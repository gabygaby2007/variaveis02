 const {time} = require('console');

let anoAtual = 2024;
let idade = (16);
const nomeCompleto = "Gabrielly Jaros";
const faculdade = "falculdade medicina";
let cidadeAtual = "SJP";
let lazer = "jogar";

console.log(`olá eu sou o ${nomeCompleto}, tenho ${idade} anos, moro em ${cidadeAtual} e no ano que vem espero estar cursando ${faculdade}`);

anoAtual = 2025;
idade = 16;
cidadeAtual = "SJP";
depoisMarço = "faculdade medicina";
lazer = "jogar"

console.log(`Para o ano de ${anoAtual} espero ja possuir meus bens materiais que anseio e estar cursando e estudando a minha área de desejo`);

//Agencia de viagens

const nomeComprador = "Ricardo";
const cpfComprador = 13565219899;
const idadeComprador = 65;
const ListaDeDestinos= new Array(
"Rio de Janeiro",
"São Paulo",
"Brasilia",
"Belo Horizonte",
"Salvador."
);

console.log(`Olá senhor ${nomeComprador}, seu cpf é ${cpfComprador} e sua idade é ${idadeComprador} anos, e você deseja viajar para ${ListaDeDestinos}`);

console.log(ListaDeDestinos[2]);
console.log("");
console.log("Olá senhor $(nomeComprador) adicionamos mais uma viajem a sua lista de interesses.");

ListaDeDestinos.push("Brasilia");

console.log(ListaDeDestinos);