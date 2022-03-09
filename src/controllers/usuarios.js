import { request } from "express";
import { database } from "../infra/database.js";
import UsuariosModel from "../models/Usuarios.js";
import Validacoes from "../services/Validacoes.js";
import Utils from "../utils/utils.js";

//VERSAO EM CLASS
export class Usuarios{
    static usuarios(app){
        app.get('/usuarios', (req, res)=>{
            res.status(200).json(database)
        })
        app.post('/usuarios', (req, res)=>{
            const id = parseInt(req.body.id) //passar para number, ja q a validação está para number
            const user = new UsuariosModel(id, req.body.nome, req.body.sobrenome, req.body.email)
            database.push(user)
            res.status(201).json(database)
            // res.send(`Rota POST de tarefa ativada: tarefa adiciona ao banco de dados`)
        })
        // app.post('/afazer', (req, res)=>{
        //     // res.status(201).json(database)
        //     const body = request.body;
        //     res.send(`${body}`)
        // })
        app.get('/usuarios/:id', (req, res)=>{
            const id = parseInt(req.params.id)
            if(Validacoes.validaParametro(id, database)){
                res.status(200).json(database[id])
            } else{
                res.status(400).json({erro: "Não existe item com o id fornecido"})
            }
        })
        app.get('/usuarios/email/:email', (req, res)=>{
            const resposta = Utils.verificaEmail(database, req.params.email);
            res.status(200).json(resposta);
        })
        app.delete('/usuarios/email/:email', (req, res)=>{
            const resposta = Utils.deletaEmail(database, req.params.email);
            res.status(200).json(resposta);
        })
        app.delete('/usuarios/:id', (req, res)=>{
            console.log(database.length)
            const resposta = Utils.deletaPorId(database, req.params.id);
            res.status(200).json(resposta)
            console.log(database.length)
        })
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