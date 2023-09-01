let num1 = 10430;
let num2 = 5.33424;

console.log(typeof(num1.toString()));
console.log(num1.toString(2)); // converte para binário se o numero '2' for passado como parâmetro
console.log(num2.toFixed(2)); // deixa duas casas decimais

console.log(Number.isInteger(num1)); // verifica se é inteiro
console.log(Number.isInteger(num2)); // verifica se é inteiro

console.log(0.7 + (0.1 * 3)); // IEE 754-2008
let n1 = 0.7;
let n2 = 0.1;

n1 += n2;
n1 += n2;
n1 += n2;

console.log(n1.toFixed(2));
ni = n1.toFixed(2);

console.log(n1, 'aqui')

