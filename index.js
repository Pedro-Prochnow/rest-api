const express = require('express');
const servidor = express();

servidor.use(express.json());

// Armazenamento de dados dos usuários
const listaUsuarios = [];

// Rota para listar todos os usuários
servidor.get('/usuarios', (req, res) => {
  console.log('Acessando rota: /usuarios');
  res.json(listaUsuarios);
});

// Rota para buscar um usuário pelo ID
servidor.get('/usuario/:identificador', (req, res) => {
  const identificador = Number(req.params.identificador);
  const encontrado = listaUsuarios.find(item => item.id === identificador);

  if (!encontrado) {
    return res.status(404).send('Usuário não localizado');
  }

  console.log(`Consulta ao usuário de ID: ${identificador}`);
  res.json(encontrado);
});

// Rota para adicionar um novo usuário
servidor.post('/usuario/novo', (req, res) => {
  const nomeUsuario = req.body.username;

  if (!nomeUsuario) {
    console.warn('Falha: nome de usuário ausente');
    return res.status(400).send('O campo "username" precisa ser preenchido');
  }

  const usuarioCriado = {
    id: listaUsuarios.length + 1,
    username: nomeUsuario
  };

  listaUsuarios.push(usuarioCriado);

  console.log('Novo usuário registrado:', usuarioCriado);
  res.status(201).json(usuarioCriado);
});

// Inicialização do servidor
servidor.listen(3000, () => {
  console.log('Aplicação ativa na porta 3000');
});
