// const tresHoras = 60 * 60 * 3 * 1000;
// const umDIa = 60 * 60 * 24 * 1000;
// const dataZero = new Date(0 + tresHoras + umDia);  = 01/01/1970 timestamp unix

// messes vão de 0-11 sendo 0 = Janeiro e 11 = Dezembro
// const data = new Date(2002, 11, 7); // ano, mes, dia, hora, minuto, segundo, milésimo

const data = new Date('2023-12-07 12:18:59');
console.log('Dia', data.getDate());
console.log('Mẽs', data.getMonth() + 1); // mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 = domingo, 6 = sábado

console.log('timestamp atual',Date.now()) // timestamp atual
console.log(data.toString());

function zeroAEsquerda(numero) {
    return `${numero}`.length >= 2 ? numero : `0${numero}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data2 = new Date();
const dataFormatada = formataData(data2);
console.log('Data formatada:', dataFormatada);
