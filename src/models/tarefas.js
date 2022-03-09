

class TarefasModel {
    constructor(id, nome, descricao){
        this.id = this.validarId(id),
        this.nome = nome,
        this.descricao = descricao
    }

    validarId(numero){
        if(typeof numero == 'number'){
            return numero
        } else{
            return "ID inválido"
        }
    }
}

export default TarefasModel;