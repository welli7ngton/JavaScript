const a1 = [1,2,3,4,5]
const a2 = [1,2,3,4,5]
const a3 = a1.concat(a2, [7,8,9,], 'wellington', 'almeida', 'silva')

console.log(a3)

// concatenando com o rest operator(...)
const a4 = [1,2,3,4,5]
const a5 = [1,2,3,4,5]
const a6 = [...a4, 'isso funciona' ,999,888,777,...a5]
console.log(a6)
