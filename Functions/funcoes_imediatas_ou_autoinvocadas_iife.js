// IIFE = Imediately Invoked Function Expression
(function(){
    console.log('OI fui executado imediatamente');
    const nome = 'Wellington'
    console.log('eu estou no escopo local', nome)
    // escopo local da função IIFE não colide com o escopo global do arquivo
})();

const nome = 'Almeida'
console.log('eu estou no escopo global', nome)