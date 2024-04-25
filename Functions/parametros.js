
// a variavel arguments sustenta todos os argumentos enviados em uma função
function func(){
    console.log(arguments);
};

func("aaa", 'bbbb', 'ccccc', 'dddd', 2, 4,5,6,7,8);

function func2(){
    total = 0;
    for (let arg of arguments){
        total += arg;
    };
    console.log(total);
};

func2(1, 2, 3, 4, 5, 6, 7, 8, 9, 20);

// funções com valores padrões
function funcao(a, b=1, c=10){
    console.log(a + b + c);
};

funcao(1, undefined, 1);

// função com atribuição por desestruturação
function desestruturação([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
};

desestruturação(['welllington', 'almeida', 21]);

// '...'(Rest parameter) significa rest operator, ele recebe tedos os proximos argumentos passados pelo usuários como o *args do python
function conta(operador, acumulador, ...numeros){
    // o 'in' retorna os indices e o 'of' retorna os valores
    for(let n of numeros){
        if (operador === '+') acumulador += n;
        if (operador === '-') acumulador -= n;
        if (operador === '*') acumulador *= n;
        if (operador === '/') acumulador /= n;
    };

    console.log(acumulador)
};

conta('+', 0, 1,2,3,4,5,6,7,9,78,213,4,23423,423,423,)
conta('-', 0, 1,2,3,4,5,6,7,9,78,213,4,23423,423,423,)
conta('*', 0, 1,2,3,4,5,6,7,9,78,213,4,23423,423,423,)
conta('/', 0, 1,2,3,4,5,6,7,9,78,213,4,23423,423,423,)