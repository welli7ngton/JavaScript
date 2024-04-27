// nomes.splice(indice de onde quero comecar, até onde vou deletar, ...elementos para adicionar)

const nomes = ['pedro', 'guilherme', 'jose', 'ricardo', 'joao', 'mateus', 'maze']

// pop
const removido = nomes.splice((nomes.length-2), 2)
console.log(nomes, removido)