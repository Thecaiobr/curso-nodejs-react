import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest{
    name: string;
    email: string;
    password: string;
  }
  
  class CreateUserService{
    async execute({name, email, password}: UserRequest){ //A função do método execute na classe CreateUserService é receber um objeto contendo informações de um usuário (como nome, e-mail e senha), processar essas informações conforme necessário
  
    //verificar se ele enviou um email
    if(!email){
        throw new Error("Email Incorreto");
    }

    //verificar se o email ja esta cadastrado
    const userAlreadyExist = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })

    if(userAlreadyExist) {
        throw new Error("Usuario ja existe");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
        data: {
            name: name,
            email: email,
            password: passwordHash,
        },
        //select serve para selecionar o que eu quero devolver
        //ele esta sendo usado para impedir o envio da senha do usuario o que não é certo de se fazer
        select:{
            id: true,
            name: true,
            email: true,
        }
    })
  
    return user;
    }
  }
  
  export { CreateUserService }