// se (condição) = true,  faça {codigo}
// se nao faça {codigo}

number = 2;

if (number >= 0 && number <= 5) {
    console.log('o número está entre 0 e 5');
} else if (number === 6 && number <= 8) {
    console.log('o número está entre 6 e 8');
} else if (number === 9 || number === 10) {
    console.log('o número está entre 9 e 10');
} else {
    console.log('o número é maior que 10');
}