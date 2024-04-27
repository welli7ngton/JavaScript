// filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

// const numeros = [4,24,54,2,36,8,4,3,3,69,2,134,6,4,7,]
// const numerosFiltrados = numeros.filter(n => n > 10)
// console.log(numerosFiltrados)


// retorne as pessoas que tem o nome com 5 letras ou mais
function callbackRetornaCincoletrasOuMais(obj){
    return obj.nome.length >= 5
}

// retorne as pessoas com mais de 50 anos
function callbackRetornaPessoasComMaisDeCinquentaAnos(obj){
    return obj.idade > 50
}

// retorne as pessoas cujo nome termina com 'a'
function callbackRetornaPessoasComNomeTerminadoEmA(obj){
    return obj.nome.toLowerCase().endsWith('a')
}

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 23},
    {nome: 'eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'rosana', idade: 32},
    {nome: 'wallace', idade: 47},
]

console.log(pessoas.filter(callbackRetornaCincoletrasOuMais))
console.log(pessoas.filter(callbackRetornaPessoasComMaisDeCinquentaAnos))
console.log(pessoas.filter(callbackRetornaPessoasComNomeTerminadoEmA))