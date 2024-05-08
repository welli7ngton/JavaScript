export const nome = "Luiz";
export const sobrenome = "Otavio";
export const idade = 30;

export function soma(x, y){
    return x + y
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export default function df(){
    console.log('eu sou a função padrão a ser exportada')
}


// export { nome as nome2, sobrenome, idade, soma }