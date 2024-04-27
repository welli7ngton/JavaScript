function rand(min = 1000, max=5000){
    return (Math.random() * (max - min)) + min;
};

// callback é uma função que obrigatoriamente deve ser executada depois da função que a recebe.
function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
};

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
};

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
};

f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('Olá mundo.')
}

// Callback Hell = encadeamento de funções de callback
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('olá mundo')
//         })
//     })
// })
