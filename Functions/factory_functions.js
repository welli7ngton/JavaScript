
// Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(value){
            this.nome = value[0]
            this.sobrenome = value[1]
        },
        fala(assunto){
            return `${this.nome} está falando sobre: ${assunto}`
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
};

const p1 = criaPessoa('Wellington', 'Almeida', 1.83, 60);
const p2 = criaPessoa('Pedro', 'Henrique', 1.7, 65);
console.log(p1.fala('JS'));

console.log(p1.imc);
console.log(p2.imc);

p1.nomeCompleto = ['Jose', 'Otavio Mesquita'];
console.log(p1.nomeCompleto);
