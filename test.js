//metodo de string

function dominio(site) {
  let dominioCompleto = `http://${site}`;
  return dominioCompleto;
}

console.log(dominio('twitter.com'));
console.log(dominio('digitalhouse.com'));
console.log(dominio('gov.br'));

// arrow function

let cincoNumeros = () => {
  return [1, 2, 3, 4, 5];
};

let multiplicarPorDois = (numneroASerDobrado) => numneroASerDobrado * 2;

let mostrarNome = () => 'Meu nome é Ryan Dahl';

console.log(cincoNumeros());
console.log(multiplicarPorDois(4));
console.log(mostrarNome());

// if ternário

const dado = 'tchau';

const condicao = dado === 'oi';

let verifi = condicao ? 'É verdadeiro!' : 'É falso!';

if (dado === 'oi') {
  verifi = 'Verdadeiro';
} else {
  verifi = 'E falso';
}

console.log(verifi);

// switch

let fruta = 'sopa';

switch (fruta) {
  case 'kiwi':
    console.log('É kiwi da massa!');
    break;
  case 'morango':
    console.log('É kiwi da massa!');
    break;
  case 'banana':
    console.log('É kiwi da massa!');
    break;
  default:
    console.log('Não é kiwi da massa!');
}

const objeto = {
  kiwi: 'É kiwi',
  morango: 'é morango',
  banana: 'é banana',
  brigadeiro: function () {
    return this.banana;
  },
};

const result = objeto[fruta];

if (!result) console.log('nao achou nada');
console.log(result);

// ciclo for

function papagaio(texto) {
  for (let i = 1; i < 6; i++) {
    console.log(texto);
  }
}
console.log(papagaio('VAGINA'));

// classes e construtor de objetos

function CriarPessoa(firstName, lastName) {
  this.nome = firstName;
  this.sobrenome = lastName;
}

const sanynho = new CriarPessoa('Sany', 'Chernizon');

const patrick = new CriarPessoa('Patrick', 'Turtchin ');

console.log(sanynho);
console.log(patrick);

class CriarNarga {
  constructor(qtdRosh, qtdMangueiras, litrosDeAgua) {
    this.roshes = qtdRosh;
    this.mangueiras = qtdMangueiras;
    this.vaso = litrosDeAgua;
  }
}

const nargaDoPatrick = new CriarNarga(1, 2, 10);
const nargaDoSany = new CriarNarga(2, 4, 15);

// destructuring

const clientes = {
  cliente1: {
    nome: 'Sany',
    endereco: {
      rua: 'Emilio de melhoras',
      bairro: 'higi',
      cidade: 'sp',
      outro: 'olá!',
    },
  },
  cliente2: {
    nome: 'Patrick',
  },
};

// const { rua, bairro, cidade, outro } = clientes.cliente1.endereco;

// const rua = clientes.cliente1.endereco.rua;
// const bairro = clientes.cliente1.endereco.bairro;
// const cidade = clientes.cliente1.endereco.cidade;
// const outro = clientes.cliente1.endereco.outro;

// console.log(rua);
// console.log(bairro);
// console.log(cidade);
// console.log(outro);

// spread operator

const { rua, outro, ...resto } = clientes.cliente1.endereco;

console.log(resto);

const coresQuentes = {
  vermelho: 'red',
  laranja: 'orange',
  amarelo: 'yellow',
};

const coresFrias = {
  azul: 'blue',
  cinza: 'gray',
  verde: 'green',
};

const { vermelho, ...resto } = coresQuentes;

const cores = { ...coresFrias, ...resto };

console.log(cores);
