class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(this.nome, 'está falando')
    }

    comer(){
        console.log(this.nome, 'está comendo')
    }

    beber(){
        console.log(this.nome, 'está bebendo')
    }
}


const p1 = new Pessoa('Wellington', 'Almeida')

console.log(p1.nome)
console.log(p1.sobrenome)
p1.falar()
p1.comer()
p1.beber()