const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let peso = event.target.querySelector('#peso');
    let altura = event.target.querySelector('#altura');

    peso = Number(peso.value);
    altura = Number(altura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}(${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = [
        'Abaxo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3',
    ];

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    let imc = peso / altura**2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');


    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado-positivo');
    } else {
        p.classList.add('paragrafo-resultado-negativo');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
    
}
