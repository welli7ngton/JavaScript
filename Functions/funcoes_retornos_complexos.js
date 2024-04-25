function multiplier(m){
    function multiply(number){
        console.log('Numero multiplicado');
        console.log(m * number)
    };
    return multiply;
};

a = multiplier(2);
b = multiplier(3);
c = multiplier(4);

a(5);
b(5);
c(5);