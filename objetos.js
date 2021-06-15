// let tz = 'mlk insano';

// const objeto = {
//   sany: 'Chernizon',
//   patricSoma: () => {
//     console.log(this.sany);
//     console.log(`TZ - ${tz}`);
//   },
// };

// objeto.patricSoma();

// const clientes = {
//   19: {
//     nome: 'Sany',
//     sobrenome: 'Chernizon',
//     address: {
//       rua: 'emilio',
//       complemento: 18,
//     },
//   },
// };

// console.log(clientes.fala.nome.ivrit.hebraico);

console.log(
  'fazer um banco de dados fake com objetos, fazer uma função que recebe o ID do usuário e retorna as informações do usuário'
);

const bancoDeDados = {
  clientes: {
    1: {
      nome: 'Claudinho',
      sobrenome: 'Zanza',
      time: 'Santos',
      viado: true,
    },
    2: {
      nome: 'Rafa',
      sobrenome: 'Rosem',
      time: 'Sao Paulo',
      viado: false,
    },
  },
};

const consultaCliente = (id) => {
  const cliente = bancoDeDados.clientes[id];
  if (cliente.viado === true) {
    console.log(`${cliente.nome} é BICHONAAAAA`);
  } else {
    console.log(bancoDeDados.clientes[id]);
  }
};

for (let i = 1; i < 3; i++) {
  consultaCliente(i);
}
