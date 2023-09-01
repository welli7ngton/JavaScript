const myName = 'Otavio Miranda';
let age = 30;
let height = 1.80;
let weight = 84;
const birth = 2000;
let imc; // peso / (altura * altura)

imc = weight / (height * height);

console.log(myName, 'tem', age, 'anos', ',pesa',weight, 'kgs, tem', height, 'm de altura e seu IMC é:', imc);

console.log(myName,'nasceu em', birth);

console.log();
console.log(`${myName} tem ${age} anos, pesa ${weight} kgs, tem ${height} m de altura e seu IMC é: ${imc}`);