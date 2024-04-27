class ValidaCPF {
    constructor (cpf){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfParcial)
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1)
        this.novoCpf = cpfParcial + digito1 + digito2
    }

    static geraDigito(cpfParcial){
        let total = 0
        let reverso = cpfParcial.length + 1

        for(let stringNumerica of cpfParcial){
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito): '0'
    }

    valida(){
        // verifica se cpfLimpo existe
        if (!this.cpfLimpo) return false
        // verifica se o tipo de cpfLimpo é string
        if (typeof this.cpfLimpo !== 'string') return false
        // verifica se o tamanho do cpf equivale a 11 digitos
        if (this.cpfLimpo.length !== 11) return false
        // verifica se o cpf dado é uma sequencia ex. 999.999.999-99
        if (this.sequencia()) return false
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo

    }
}

const v1 = new ValidaCPF('183.279.040-19')
const v2 = new ValidaCPF('011.673.423-92')
console.log(v1.valida())
console.log(v2.valida())