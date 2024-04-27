class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        console.log('Método do pai')
        this.ligado = true
    }

    desligar(){
        this.ligado = false
    }
}

class Smartophone extends DispositivoEletronico {
    constructor (nome, cor, modelo){
        // parametros da classe pai
        super(nome)
        // parametros da classe filha
        this.cor = cor
        this.modelo = modelo
    }

    tirarFoto(){
        console.log('Método apenas disponivel no Iphone')
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, marca, faceId){
        super(nome)
        this.marca = marca
        this.faceId = faceId
    }

    ligar(){
        console.log('Método sobrescrito')
    }
}

const s1 = new Smartophone('iPhone', 'vermelho', '11')
console.log(s1)
const t1 = new Tablet('iPad', 'Apple', true)
console.log(t1)

s1.tirarFoto()

s1.ligar()
t1.ligar()