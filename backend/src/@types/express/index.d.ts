//dentro do express temos o nosso tipo Request, mas também estamos adiconando agora a variavel user_id
declare namespace Express{
    export interface Request{
        user_id: string;
    }
}