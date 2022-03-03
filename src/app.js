import express from 'express';
import Usuarios from './controllers/usuarios.js';
import Tarefas from './controllers/tarefas.js';

const app = express();
// const port = process.env.PORT /PARA ACESSAR O AMBIENTE

const port = process.env.PORT || 3000;

//transforma o body em json antes de chegar na rota
app.use(express.json()) //seria o bodyparse
//podemos usar um MIDDLEWARE da mesma forma. 

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

Usuarios.usuarios(app);
Tarefas.tarefas(app);

app.get('/', (req, res)=>{  //a / é a pasta raiz
    res.send('<h1>Funciona</h1>')
} ) 

app.get('/usuarios', (req, res)=>{
    res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
})

app.get('/tarefas', (req, res)=>{
    res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
})

// app.get('/fazendo', (req, res)=>{
//     res.send('Rota ativada com GET e recurso fazendo: valores de fazendo devem ser retornados')
// })

// app.get('/feito', (req, res)=>{
//     res.send('Rota ativada com GET e recurso feito: valores de feito devem ser retornados')
// })


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