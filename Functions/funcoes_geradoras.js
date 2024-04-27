// lazy evalluation

function* geradora1(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

g2 = geradora1();

for (let valor of g2){
    console.log(valor);
}

function* gerador2(){
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

g3 = gerador2();

console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
