//esse arquivo contem o template para resolucao dos exercicios passados durante a explicação
//  de DESESTRUTURAÇÃO DE OBJETOS

/*
DICA: para imprimir o valor de alguma variavel dentro de uma frase, voce pode usar a
 seguinte sintaxe:

`imprimindo valor da variavel x: ${variavel}`
*/

/*
Exercicio 1

Voce tem o seguinte objeto

const pessoa =  {
    nome: "Joana",
    idade: 21,
    curso: "Engenharia"
}

Use desestruturação para criar as variáveis “nome” e “curso” e imprima a frase:
“Joana está cursando engenharia”
*/

const pessoa =  {
    nome: "Joana",
    idade: 21,
    curso: "Engenharia"
}
function exe01() {
  const { nome, curso } = pessoa;

  console.log(`${nome} está cursando ${curso}`);
}
exe01();

/*
Exercicio 2

Crie uma função que recebe um objeto chamado “produto”, que terá a seguinte definição:

const produto = {
  nome: "Celular",
  preco: 1500,
  categoria: "eletronicos",
};

A função deve usar desestruturação para extrair os dados e retornar uma mensagem no seguinte
 formato:
A desestruturação deve ser feita direta nos parâmetros da função

“Produto: celular, Categoria: eletronico, preco: R$1500”
*/
produto = {
    nome: "Celular",
    preco: 1500,
    categoria: "eletronicos"
};
const {nome, preco, categoria} = produto;
function exe02({nome, preco, categoria}) {

  console.log(`Produto: ${nome}, Categoria: ${categoria}, Preço: R$${preco}`);
}

exe02(produto);