import {createContext, ReactNode, useState, useEffect} from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { toast } from 'react-toastify';

import { api } from '../services/apiClient';

//criação do context api
type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;// é uma promise pois vamos buscar dados na api
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
  }

type AuthProviderProps ={
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try{
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    }catch(err){
        console.log('error ao deslogar')
    }
}

//provider do contexto, onde terá os métodos de login cadastro
//é um componente react
//tudo o que for passado no value, qualquer componente consegue acessar depois
//quero que dentro do contexto apenas renderize os componentes que stão dentro dele
export function AuthProvider({ children }: AuthProviderProps){

    const [user, setUser] = useState<UserProps>()//cria um state para receber e armazenar os dados do usuario ao logar
    const isAuthenticated = !!user;//!! serve para converter a variavel user em booleano

    useEffect(() => {

        //tentar pegar algo no cookie que é o token
        const {'@nextauth.token': token} = parseCookies();

        if(token){
            api.get('/me').then(response => {
                const {id, name, email} = response.data;

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch(() =>{
                //se deu erro deslogamos o usuario
                signOut();
            })
        }
    }, [])

    //funcao de logar chamando a api
     async function signIn({ email, password}: SignInProps){
        try{
            const response = await api.post('/session',{
                email,
                password
            })

            //console.log(response.data);

            const {id, name, token} = response.data;

            setCookie(undefined, '@nextauth.token', token,{
                maxAge: 60 * 60 * 24 * 30, //expira em 1 mes
                path: "/" //quais caminhos terao acesso ao cookie
            })

            setUser({
                id,
                name,
                email,
            })

            //passar para as proximas requisições o nosso token
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success('Logado com sucesso')

            //redirecionar o usuario para a pagina inicial
            Router.push('/dashboard')

        }catch(err){
            console.log("ERRO AO ACESSAR", err);
            toast.error('Erro ao acessar')
        }
    }

    async function signUp({ name, email, password}: SignUpProps){
        try{
            const response = await api.post('/users', { 
                name: name,
                email: email,
                password: password
            })

            toast.success("Conta criada com sucesso")

            Router.push('/')
        }catch(err){
            toast.error('Erro ao cadastrar')
            console.log("ERRO AO CADASTRAR", err);
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}