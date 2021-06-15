const lerPensamentos = (pensamento) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(pensamento);
      resolve('pensamento lido');
    }, 5000);
  });
};

const funcao = async () => {
  const resultado = await lerPensamentos('derreti');

  console.log(`RESPOSTAASS -> ${resultado}`);
};

funcao();
