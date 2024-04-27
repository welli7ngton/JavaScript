// Arrays tem valor por referencia

const nomes = ['Wellington', 'Almeida', 'Silva']

// copiou a referencia de nomes para nomes2, agora ambos apontam para o mesmo array
const nomes2 = nomes

const valores = [1, 2, 3, 4, 5, 'a', 'b', 'c']
// copiou todos os dados de valores para valores2 usando o spread operator(...) o mesmo que rest operator
const valores2 = [...valores]

// tamanho do array
console.log(valores.length)

// retorna o ultimo valor do array e remove
console.log(valores.pop())

// retora o primeiro valor do array e remove
console.log(valores.shift())

// adiciona algo ao final do array
valores.push('qualquer coisa')

// adiciona valores ao inicio do array
valores.unshift('qualquer coisa no inicio')

// adiciona o intervalo entre 1 e 4 do array valores no array valores slice ignorando o ultimo dado como parametro
console.log(valores_slice = valores.slice(1, 4))


const nome_ = 'Wellington Almeida Silva'
// divide o nome atravéz do separador dado como parâmetro
const nome_dividido = nome_.split(' ')
console.log(nome_dividido)

// faz a união do array de acordo com o separador dado como parâmetro
console.log(nome_dividido.join(' '))