/*
Operadores lógicos
&& = And = E
|| - OR = OU
! = NOT = NÃO
*/


console.log('AND')
// todas as expressões devem ser verdadeiras para retornar true
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && false); // -> false

console.log('OR')
// se pelo menos uma das expressões for verdadeira, retorna true
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || false); // -> true

console.log('NOT')
// inverte a expressão(nega a expressão)
console.log(!true); // -> false
console.log(!false); // -> true
