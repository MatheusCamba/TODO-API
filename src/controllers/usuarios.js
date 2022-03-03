import { request } from "express";
import { database } from "../../infra/database.js";
//VERSAO EM CLASS
export class Usuarios{
    static usuarios(app){
        app.get('/usuarios', (req, res)=>{
            res.status(200).json(database)
        })
        app.post('/usuarios', (req, res)=>{
            database.push(req.body)
            res.status(201).json(database)
            // res.send(`Rota POST de tarefa ativada: tarefa adiciona ao banco de dados`)
        })
        // app.post('/afazer', (req, res)=>{
        //     // res.status(201).json(database)
        //     const body = request.body;
        //     res.send(`${body}`)
        // })
    }
}

//VERSAO EM FUNCTION

// export function usuarios(app){
//     app.get('/usuarios', (req, res)=>{
//         res.send('<h1>Usuários</h1>')
//     })
// }

export default Usuarios;
//module.exports = Usuarios;