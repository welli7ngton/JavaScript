// filtre os numeros pares
// eleve os valores ao quadrado
// some todos

const numeros = [4,24,54,2,36,8,4,3,3,69,2,134,6,4,7,]

console.log(
    numeros
    .filter(n => n % 2 === 0)
    .map(n => n**2)
    .reduce(function(acumulador, valor){
        acumulador += valor
        return acumulador
    }, 0)
)
