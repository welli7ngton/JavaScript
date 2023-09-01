// Seu nome é: ______
// Seu nome tem ______ letras
// A segunda letra do seu nome é: ______
// Qual o primeiro índice da letra LETRA no seu nome? ______
// Qual o último índice da letra LETRA no seu nome? ______
// As últimas 3 letras do seu nome são: ______
// As palavras do seu nome são: ______
// Seu nome com letras maiúsculas: ______
// Seu nome com letras minúsculas: ______

let _name2 = prompt("Digite seu nome:");
_name  = _name2.replace(" ", "");
_name  = _name.replace(" ", "");

document.body.innerHTML = `Seu nome tem ${_name.lenght} letras`;
document.body.innerHTML += `A segunda letra do seu nome é: ${_name[1]} <br>`;
let letter = prompt("Dite uma letra: ");
document.body.innerHTML += `o primeiro indice da letra '${letter}' é:  ${_name.indexOf(letter)} <br>`;

document.body.innerHTML += `o último indice da letra '${letter}' é: ${_name.lastIndexOf(letter)} <br>`;

document.body.innerHTML += `as ultimas letras do seu nome são: ${_name.slice(-3)} <br>`;
document.body.innerHTML += `as palavras do seu nome são: ${_name2} <br>`;
document.body.innerHTML += `seu nome com letras maiúsculas: ${_name2.toUpperCase()} <br>`;
document.body.innerHTML += `seu nome com letras maiúsculas: ${_name2.toLowerCase()} <br>`;