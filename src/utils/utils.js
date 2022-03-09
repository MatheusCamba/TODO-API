class Utils{
    static verificaEmail(database, email){
        let retorno = []
        for(let i = 0; i < database.length; i++){
            if(database[i].email == email){
                return retorno.push(database[i])
            }
        }
        return retorno
    }

    static deletaEmail(database, email){
        let retorno = []
        for(let i = 0; i < database.length; i++){
            if(database[i].email != email){
                return retorno.push(database[i])
            }
        }
        return retorno
    }

    static deletaPorId(database, id){
        database.splice(id,1)
        return database
    }
}

export default Utils