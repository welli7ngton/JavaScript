const _velocidade = Symbol()

class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade(){
        console.log('getter')
        return this[_velocidade]
    }

    set velocidade(value){
        console.log('setter')
        if (value > 100 || value < 0) return
        if (typeof value !== 'number') return
        this[_velocidade] = value
    }

    acelear(){
        if (this[_velocidade] === 100) return
        this[_velocidade]++
        console.log(`${this.nome} está acelerando. ${this[_velocidade]}`)
    }

    freiar(){
        if (this[_velocidade] === 0) return
        this[_velocidade]--
        console.log(`${this.nome} está freiando. ${this[_velocidade]}`)
    }
}

const c1 = new Carro('fusca')

for(let i = 0; i <= 102; i++){
    c1.acelear()
}

console.log(c1)
c1.velocidade = 55
console.log(c1)

console.log(c1.velocidade)
c1.velocidade = 23
