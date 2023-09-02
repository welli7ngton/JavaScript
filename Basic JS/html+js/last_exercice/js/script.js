function myScope(){
    // conectando o formulario html com a variavel form atravez do querryselector .form
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    // previnindo o envio do formulário evitando o comportamento padrão do botão submit
    // form.onsubmit = function(event) {
    //     event.preventDefault()
    // };
    
    // variavel para armazenar as pessoas
    const pessoas = [];

    // factory function de objetos 'pessoa'
    // function criaPessoa(nome, sobrenome, peso, altura) {
    //     // criando o objeto pessoa
    //     const pessoa = {
    //         nome,
    //         sobrenome,
    //         peso,
    //         altura,
    //     }
    //     return pessoa;
    // }

    // função para receber o evento e dividir os dados
    function recebeEvento(event) {
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // adicionando 'pessoa' na variável 'pessoas'
        pessoas.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                sltura: altura.value,
            }
        );

        // mostrando o array atualizado
        console.log(pessoas);
        
        resultado.innerHTML += `<p>${nome.value} | ${sobrenome.value} | ${peso.value} | ${altura.value} |</p>`
    }

    form.addEventListener('submit', recebeEvento);


}

myScope();