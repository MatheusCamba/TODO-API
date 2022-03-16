import Database from "../infra/database.js";


class DatabaseMetodos{
    static createTable(){
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR(64),
            sobrenome VARCHAR(64),
            email VARCHAR(64)
            )
            `
            Database.run(tabela_usuarios, (e)=>{
                if(e){
                    console.log("erro ao criar Tabela")
                } else {
                    console.log("Tabela criada com sucesso")
                }
            })
        }

    // static popular(){
    //     const tabela_popular = `INSERT INTO usuarios ('nome', 'sobrenome', 'email')`
    //     Database.run(tabela_popular, (e)=>{
    //         if(e){
    //             throw new Error(`Erro ao inserir: ${e}`)
    //         } 
    //     })

    // }
    static popular(id, nome, sobrenome, email) {
        const query = `INSERT INTO usuarios VALUES (?, ?, ?, ?)`
        return new Promise((resolve, reject) => {
            Database.run(query, [id, nome, sobrenome, email], (e) => {
                if (e) { reject(e) }
                else { resolve({ message: "usuário criado com sucesso" }) }
            })
        })
    }
    static listarTodos() {
        const query = `
        SELECT * FROM usuarios
        `
        return new Promise((resolve, reject) => {
            Database.all(query, (e, rows) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({usuarios: rows})
                }
            })
        })
    }
}
    
DatabaseMetodos.createTable()

export default DatabaseMetodos