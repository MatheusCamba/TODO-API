//Modelo de como vai ser inserido no banco de dados
//É o modelo como eu quero receber
class UsuariosModel{
    constructor(id, nome, sobrenome, email){
        this.id = this.validarId(id),
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.email = email
    }

    validarId(numero){
        if(typeof numero == 'number'){
            return numero
        } else{
            return "ID inválido"
        }
    }
}

export default UsuariosModel;