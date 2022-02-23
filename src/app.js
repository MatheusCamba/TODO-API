import express from 'express';
import Usuarios from './controllers/usuarios.js';

const app = express();
// const port = process.env.PORT /PARA ACESSAR O AMBIENTE

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

Usuarios.usuarios(app);

app.get('/', (req, res)=>{  //a / é a pasta raiz
    res.send('<h1>Funciona</h1>')
} ) 

app.get('/usuarios', (req, res)=>{
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
})

app.get('/afazer', (req, res)=>{
    res.send('Rota ativada com GET e recurso A fazer: valores de afazer devem ser retornados')
})

app.get('/fazendo', (req, res)=>{
    res.send('Rota ativada com GET e recurso fazendo: valores de fazendo devem ser retornados')
})

app.get('/feito', (req, res)=>{
    res.send('Rota ativada com GET e recurso feito: valores de feito devem ser retornados')
})


//PEGANDO A RESPOSTA E APLICANDO O SEND POR ARRAY
// const listaEntidades = ['usuario','afazer', 'fazendo', 'feito']
// function criaRotas(listaRotas){
//     for(const entidade of listaRotas) {
//     app.get(`/${entidade}`, (req, res) => {
//         res.send(`Rota ativada com GET e recurso ${entidade}: valores de ${entidade} devem ser retornados`)
//         })
//     }

// }

// criaRotas(listaEntidades)