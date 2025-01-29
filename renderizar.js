
const handlebars = require('handlebars');
const fs = require('fs');

const produtos = [
  {
    "nome": "Smartphone X",
    "preco": 1999,
    "descricao": "O mais recente smartphone da marca X, com tela AMOLED e câmera de alta resolução."
  },
  {
    "nome": "Notebook Gamer Y",
    "preco": 4999,
    "descricao": "Notebook potente para jogos, com processador de última geração e placa de vídeo dedicada."
  },
  {
    "nome": "Fones de Ouvido Z",
    "preco": 299,
    "descricao": "Fones de ouvido com cancelamento de ruído ativo e som de alta qualidade."
  }
];

const paginaFonte = fs.readFileSync('template.handlebars', 'utf-8');
const modelo = handlebars.compile(paginaFonte);
const renderizado = modelo({ informacoes: produtos });

fs.writeFileSync('renderizado.html', renderizado);

console.log('Arquivo renderizado.html criado com sucesso!');

