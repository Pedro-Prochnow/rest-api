import express from "express";

const app = express();
app.use(express.json());

// Lista de pessoas cadastradas
const pessoas = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Joana" },
  { id: 4, nome: "Carlos" },
];

// Rota para retornar uma quantidade limitada de pessoas
app.get("/usuarios", (req, res) => {
  const quantidade = Number(req.query.limit);

  // Validação do parâmetro
  if (!quantidade || quantidade < 1 || isNaN(quantidade)) {
    return res.status(400).json({
      mensagem: "Informe um valor numérico válido para 'limit' maior que zero.",
    });
  }

  // Seleciona os primeiros 'quantidade' elementos da lista
  const resultado = pessoas.slice(0, quantidade);

  res.status(200).json(resultado);
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
