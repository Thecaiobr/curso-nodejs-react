import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import path from 'path';

const app = express(); //importa o módulo express e cria uma instância dele chamando a função express com express()

app.use(express.json());
app.use(cors());

app.use(router);

//cria uma rota estatica para permitir que a imagem seja visualizada no front ou quando vc pesquisa na internet
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

//verifica uma instancia de erro, todas as rotas vão passar por aqui
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        //se for uma instancia do tipo error, lança a excessão de bad request = 400
        return res.status(400).json({
            error: err.message
        })
    }
    //caso nao seja uma instancia de error, ele será um internal server error = 500
    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
})

app.listen(3333, () => console.log('Rodando'));