// função construtora
function Pessoa(nome, sobrenome){
    // atributo ou metodos privados
    const id = 12345;
    const metodoPrivado = function(){
        console.log('sou privado')
    }

    // attributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log('sou um método de de instância')
    }
}


const p1 = new Pessoa('Wellington', 'Almeida');
const p2 = new Pessoa('Marcio', 'Campos');
