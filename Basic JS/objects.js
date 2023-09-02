const person1 = {
    nome : 'wellington',
    sobrenome : 'almeida',
    idade : 25
};



function makePerson (_name, first_name, age) {
    return {
        nome: _name,
        sobrenome : first_name,
        idade: age,

        // função dentro de objeto
        fala() {
            console.log(`${this.nome} ${this.sobrenome} está falando...`)
        },

    }
}

const person2 = makePerson('Maria', 'Oliveira', 55)

console.log(person1);
console.log(person2);

console.log(person1.nome);
console.log(person2.nome);

person2.fala()
