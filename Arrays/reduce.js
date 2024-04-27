// Reduz o array

// soma todos os numeros (reduce)
// retorne um array com os impares (filter)

const numeros = [4,24,54,2,36,8,4,3,3,69,2,134,6,4,7,]


console.log(numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}))

console.log('')

console.log(numeros.reduce(
    function(acumulador, valor){
        if (valor % 2 !== 0){
            acumulador.push(valor)
        }
        return acumulador
    }, []))