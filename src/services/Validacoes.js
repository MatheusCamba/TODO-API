class Validacoes{
    /**
     * Método que valida se o nome possuí um número mínimo de caracteres.
     * @param {string} string 
     * @returns {boolean}
     */
    static validaNome(string){
        if(string.length >= 3){
            return true
        } else {
            console.log({erro: "nome ou sobrenome inválido"})
            return false
        }
    }
    static validaSobrenome(string){
        return this.validaNome(string)
    }
    static validaEmail(string){
        const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(reg.test(string)){
            return true
        } else {
            console.log({erro: "e-mail inválido"})
            return false
        }
    }
      /**
   * 
   * @param {number} id 
   * @param {array} database 
   * @returns {boolean}
   */
  static validaParametro(id, database) {
    if(id < database.length) {
        return true;
    } else {
        return false;
    }
}
}


export default Validacoes