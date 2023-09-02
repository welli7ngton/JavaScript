function hello(value) {
    console.log(value);

    return "1234567";
}

// hello("good mornig");
// hello("foo");
// hello("test");

// let a = hello("hi");
// console.log(a)

function _sum(x, y) {
    return x + y;
}

// console.log(_sum(10, 10))
// console.log(_sum(5, 10.6453))
// console.log(_sum(16, 1))


function testClosure(func, value) {
    function inner(){
        func(value);
    }
    return inner;
}

// a = testClosure(console.log, 'it workded')
// a()


const times = function (x, y) {
    return x * y
};

console.log(times(3, 3))


// arrow function
const plus = (x, y) => x + y;
console.log(plus(1, 2));