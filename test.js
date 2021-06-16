//metodo de string

function dominio(site) {
  let dominioCompleto = `http://${site}`;
  return dominioCompleto;
}

console.log(dominio('twitter.com'));
console.log(dominio('digitalhouse.com'));
console.log(dominio('gov.br'));

// arrow function

let cincoNumeros = () => [1, 2, 3, 4, 5];

let multiplicarPorDois = () => 123 * 2;

let mostrarNome = () => 'Meu nome é Ryan Dahl';

console.log(cincoNumeros());
console.log(multiplicarPorDois());
console.log(mostrarNome());

// if ternário

const dado = true;

let verifi = dado ? 'É verdadeiro!' : 'É falso!';

console.log(verifi);

// switch

let fruta = 'sopa';

switch (fruta) {
  case 'kiwi':
    console.log('É kiwi da massa!');
    break;
  default:
    console.log('Não é kiwi da massa!');
}

// ciclo for

function papagaio(texto) {
  for (let i = 1; i < 6; i++) {
    console.log(texto);
  }
}
console.log(papagaio('VAGINA'));
