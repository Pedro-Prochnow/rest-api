import express from 'express';

let usuarios = [
  { id: 1, username: 'joao' },
  { id: 2, username: 'maria' },
  { id: 3, username: 'pedro' }
];

const app = express();

app.get("/usuarios", (req, res) => {
    //quero retornar todos os usuarios
    
    //declarando variavel limitador 
    //convertendo para o tipo numero o q vier para o limitador
    let limitador = Number(req.query.limit);
    //slice
    let usuarioLimitados = usuarios.slice(0, limitador)
    
    res.json(usuarios);
});

app.listen(3000);