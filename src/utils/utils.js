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
    /**
     * 
     * @param {Array} database 
     * @param {number} id 
     * @param {object} body 
     * @returns Array
     */
    static atualizaPorId(database, id, body){
        if(id < database.length){
            database.splice(id, 1, body)
        }
        return database
    }
}

export default Utils