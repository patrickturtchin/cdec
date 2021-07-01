const funcComCallback = (dado, catzo) => {
  console.log('entrei !!');

  setTimeout(() => {
    console.log('preparando o dado');
    dado = dado + 20;
  }, 2000);

  setTimeout(() => {
    console.log('callback ACIONAR!');
    catzo(404, dado);
  }, 4000);
};

module.exports = {
  funcComCallback: funcComCallback,
  oi: 'tudo',
};
