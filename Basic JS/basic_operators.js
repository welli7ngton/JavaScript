// arithmetic (+ - / * ** %)

const num1 = 5;
const num2 = 10;
const strNum = '3';

// addition operator concatenates strings and adds numbers
console.log(num1 + num2);
console.log(num1 + strNum);

// - subtraction
console.log(num1 - num2);

// / division
console.log(num1 / num2);

// * multiplication
console.log(num1 * num2);

// ** potentiation
console.log(num1 ** num2);

// % rest of division
console.log(num1 % num2);

console.log();

// order of precedence of operators

// https://learn.microsoft.com/pt-br/office/vba/language/reference/user-interface-help/operator-precedence

// ++ -- after and before
let cont = 1;
cont++;
++cont;
console.log(cont);

cont = 10;
cont--;
--cont;
console.log(cont);

console.log();

// += -= *= /= **=
const step = 5;
let i = 0;
i += step;
console.log(i);
i += step;
console.log(i);
i += step;
console.log(i);
i += step;
console.log(i);

console.log();

// convertion 
const n1 = 10;
const n2 = '5';
const n3 = '5.4';

console.log(parseInt(n2));
console.log(parseFloat(n3));

console.log(Number(n2));
console.log(Number(n3));