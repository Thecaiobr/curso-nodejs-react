import multer from "multer";
import crypto from "crypto";// bibioteca para criar um hash criptografado para nao repetir o mesmo nome de uma imagem

import { extname, resolve } from 'path';

export default{
    //onde será salva as imagens
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`

                return callback(null, fileName);
                }
            }),
        }
    }
}