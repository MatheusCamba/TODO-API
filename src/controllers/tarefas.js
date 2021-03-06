import DatabaseMetodos from "../infra/DatabaseMetodos.js";
import TarefasModel from "../models/tarefas.js";
import Validacoes from "../services/Validacoes.js";
import Utils from "../utils/utils.js";

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
        app.put('/tarefas/:id', (req, res)=>{
            const att = Utils.atualizaPorId(database, req.params.id, req.params.body)
            res.status(200).json(att)
        })
    }
}

export default Tarefas;