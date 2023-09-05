// (condição) ?(valor para true) :(valor para false)


const pontuacao = 999;

let valor = pontuacao <= 1000 ? 'AAA' : 'BBB';

console.log(valor);

console.log(pontuacao >= 1000 ? 'CCC' : 'DDD');

let corUsuario = undefined;
let corPadrao = corUsuario || 'black';

console.log(corPadrao);
