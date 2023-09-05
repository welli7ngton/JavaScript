function setdayName(weekDay){
    switch (weekDay) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

function setMonth(month){
    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:""
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '';
    }
}

function setCompleteDate(dayName, dayNumber, month, year, hour, minute) {
    return `${dayName}, ${dayNumber} de ${month} de ${year} ${hour}:${minute}`
}

function setLeftZero(number) {
    return (number < 10) ? `0${number}`: number
}

const p = document.querySelector('.text')

const today = new Date();

const dayNumber = setLeftZero(today.getDate());
const dayName = setdayName(today.getDay());
const month = setMonth(today.getMonth());
const year = today.getFullYear();
const hour = setLeftZero(today.getHours());
const minute = setLeftZero(today.getMinutes());  

// console.log(dayNumber);
// console.log(dayName);
// console.log(month);
// console.log(year);
// console.log(hour);
// console.log(minute);

p.innerHTML = setCompleteDate(dayName,dayNumber, month, year, hour, minute)
