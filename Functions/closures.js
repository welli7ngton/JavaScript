function retornaFuncao(nome){
    return function(){
        // closure é a habilidade de ter acesso ao corpo lexo de 
        // uma função externa a partir de uma função interna
        return nome;
    };
};


// é possível mudar o contexto lexo das funções closures atravéz
// da função mãe
const funcao = retornaFuncao('Wellington');
const funcao2 = retornaFuncao('Almeida');

console.log(funcao(), funcao2());