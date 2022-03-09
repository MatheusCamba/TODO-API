import { request } from "express";
import { database } from "../infra/database.js";
import TarefasModel from "../models/tarefas.js";
import Validacoes from "../services/Validacoes.js";

export class Tarefas {
    static tarefas(app){
        app.get('/tarefas', (req, res) => {
            res.status(200).json(database)
        })
        app.post('/tarefas', (req, res) => {
            const id = parseInt(req.body.id) 
            const user = new TarefasModel(id, req.body.nome, req.body.descricao)
            database.push(user)
            res.status(201).json(database)
        })
        app.get('/tarefas/:id', (req, res)=>{
            const id = parseInt(req.params.id)
            if(Validacoes.validaParametro(id, database)){
                res.status(201).json(database[id])
            }else{
                res.status(400).json({erro:"Não existe item com o id fornecido"})
            }
        })
    }
}

export default Tarefas;