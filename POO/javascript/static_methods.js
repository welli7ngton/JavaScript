class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2
    }

    // Método de instância
    diminuirVolume(){
        this.volume -= 2
    }

    // Método estático
    static trocaPilha(){
        console.log('A pilha foi trocada')
    }
}

const c1 = new ControleRemoto('LG smartv')

c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
console.log(c1)
ControleRemoto.trocaPilha()
