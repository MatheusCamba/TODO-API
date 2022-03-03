import { request } from "express";
import { database } from "../../infra/database.js";

export class Tarefas {
    static tarefas(app){
        app.get('/tarefas', (req, res) => {
            res.status(200).json(database)
        })
        app.post('/tarefas', (req, res) => {
            database.push(req.body)
            res.status(201).json(database)
        })
    }
}

export default Tarefas;