function rand(min = 1000, max = 3000) {
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg) {
    return new Promise((resolve, reject) => {
      if (typeof msg !== 'string'){
          reject('Caiu no erro')
          return
      }
      setTimeout(() => {
        resolve(msg + ' passei na promisse');
      }, rand());
    });
}

// código sem assync/await
// espera('fase 1')
//     .then(valor =>{
//         console.log(valor)
//         return espera('fase 2')
//     })
//     .then(valor => {
//         console.log(valor)
//         return espera('fase 3')
//     })
//     .then(valor => {
//         console.log(valor)
//         return 'cheguei no final.'
//     })
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(e => console.log(e))

async function executa(){
  try {
    const fase_1 = await espera('fase 1')
    console.log(fase_1)
    const fase_2 = await espera(2)
    console.log(fase_2)
    const fase_3 = await espera('fase 3')
    console.log(fase_3)
  } catch(e){
    console.log('tratei o erro')
    console.log(e)
  }
}

executa()

// promisses tem 3 estados:
// estado pending: pendente
// estado fullfilled: resolvida
// estado reject: rejeitada