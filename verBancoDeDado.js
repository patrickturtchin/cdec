const objetoDeOutroArquivo = require('./objetos');

const callback = (error, resultado) => {
  setTimeout(() => {
    console.log('funcao callback!');
  }, 1000);

  setTimeout(() => {
    console.log(error);
    console.log(resultado);
  }, 3000);
};

console.log(objetoDeOutroArquivo.oi);

objetoDeOutroArquivo.funcComCallback(10, callback);
