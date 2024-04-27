const numeros = [4,24,54,2,36,8,4,3,3,69,2,134,6,4,7,]
const numerosDobrados = numeros.map(n => n *2)
// console.log(numerosDobrados)


const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
]

// rettorna o apenas o nome dos objetos
console.log(pessoas.map(obj => obj.nome))
// rettorna o apenas a idade dos objetos
console.log(pessoas.map(obj => obj.idade))
// adiciona um atributo id em cada objeto
console.log(pessoas.map(function(obj, index) {
    const new_obj = {...obj}
    new_obj.id = index + 1
    return new_obj
}))