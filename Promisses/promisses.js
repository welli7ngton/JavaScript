function rand(min = 1000, max = 3000) {
  sleep = Math.floor(Math.random() * (max - min) + min);
  console.log(sleep);
  return sleep;
}

function espera(msg) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string'){
        reject('Caiu no erro')
    }
    setTimeout(() => {
      resolve(msg);
    }, rand());
  });
}

espera("Frase 1")
    .then((resposta) => {
        console.log(resposta);
        return espera('Frase 2')
    })
    .then((resposta) => {
        console.log(resposta);
        return espera(0)
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(()=>{
        console.log('Eu serei o ultimo a ser executado.')
    })
    .catch((err) =>{
        console.log(err)
    });
