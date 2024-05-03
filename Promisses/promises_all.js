function rand(min = 1000, max = 3000) {
    sleep = Math.floor(Math.random() * (max - min) + min);
    console.log(sleep);
    return sleep;
  }
  
// promisse
function espera(msg) {
    return new Promise((resolve, reject) => {
      if (typeof msg !== 'string'){
          reject('Caiu no erro')
          return
      }
      setTimeout(() => {
        resolve(msg.toUpperCase() + 'passei na promisse');
      }, rand());
    });
  }

const promises = [
    'primeiro valor',
    espera('promisse 1'),
    espera('promisse 2'),
    espera('promisse 3'),
    'outro valor'
  ]

// Promisse.all()
Promise.all(promises).then(
function(valor){
    console.log(valor)
}
)
.catch(
function(err){
    console.log(err)
}
)