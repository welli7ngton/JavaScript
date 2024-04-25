// Declaração de função (Function Hoisting)
function falaOi(){
    console.log('oioioi');
}
falaOi();

// funcções no Javascript e Python são First-Class Objects(Objetos de primeira classe)
// é possível alocar seus dados em variáveis
// Function Expression

const souUmdado = function(){
    console.log('Sou um dado');
};

souUmdado();

function fun(func){
    console.log(func);
    func();
    console.log('e estou na fun');
};

fun(souUmdado);

// Arrow function
const FuncaoArrow = () => {
    console.log('sou uma arrow function');
};

// funções dentro de objects usando notação de ponto
const obj = {
    falar() {
        console.log('estou falando atravéz de um object');
    }
};

obj.falar();
