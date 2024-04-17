import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

//esse middleware serve para quando um usuario for acessar uma rota privada, que for acessar esse middleware,
//ele deve informar o token junto com a requisição

//tipando o payload do token
interface Payload{
    sub: string;//id do usuario
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){

    //receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");//estamos recebendo o token dentro da variavel token

    try {
        //validar o token

        //o verify irá retornar o nosso payload
        const { sub } = verify(
            token,
            process.env.JWT_SECRET,
        ) as Payload; 

        //recuperar o id do token e colocar dentor de uma variavel user_id dentro do request por meio de injeção de tipos, esta no @types
        req.user_id = sub;

        return next();

    }catch(err){
        //erro na validação e o cara nao pode processeguir na requisição
        return res.status(401).end();
    }

}
