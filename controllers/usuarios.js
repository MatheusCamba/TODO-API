//VERSAO EM CLASS
export class Usuarios{
    static usuarios(app){
        app.get('/usuarios', (req, res)=>{
            res.send(`<h1>Rota Usuários via método GET.</h1>`)
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