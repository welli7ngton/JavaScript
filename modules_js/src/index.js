// import { nome as nome2 , sobrenome, idade, soma, Pessoa } from './modulo1' import singular

import * as meuModulo from './modulo_export'


// console.log(nome2)
// console.log(sobrenome)
// console.log(idade)
// console.log(soma(1, 1))

// const p1 = new Pessoa(nome2, sobrenome)

// console.log(p1)

console.log(new meuModulo.Pessoa('Wellington', 'Almeida'))

meuModulo.default()