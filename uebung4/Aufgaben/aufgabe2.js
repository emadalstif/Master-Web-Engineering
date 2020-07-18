//Make a function that returns a function that will return the next fibonacci number.
// var fib = fibonaccif(0, 1);
// fib() // 0
// fib() // 1
// fib() // 1
// fib() // 2
// fib() // 3
// fib() // 5
function fibonacci(x, y) {
    var n = 0;
    var elem1 = x;
    var elem2 = y;
    return function() {
        n++;
        if (n === 1)
            return elem1;
        if (n === 2)
            return elem2;

        let a = elem1;
        let b = elem2;

        for (let i = 2; i < n; i++) {
            aust = b;
            b = b + a;
            a = aust;
        }
        return b;
    }
}

fib = fibonacci(0, 1);
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

//Write a function that adds from many invocations, until it sees an empty invocation.
//addg(3)(4)(5)() // 12
//addg(1)(2)(4)(8)() // 15
function addg(x) {
    return function(y) {
        if (y != null) {
            return addg(x + y);
        } else {
            return x;
        }
    };
}

addg(3)(4)(5)(6)(7)(); // muss 12 ergeben
addg(1)(2)(4)(8)(); // muss 15 ergeben

//Write a function that will take a binary function and apply it to many invocations.
//applyg(add)(3)(4)(5)() // 12
//applyg(add)(1)(2)(4)(8)() // 15

add = (x, y) => x + y;
mul = (x, y) => x * y;

function applyg(fun, x) {
    return function(y) {
        if (y != null)
            if (typeof x === "number")
                return applyg(fun, fun(x, y));
            else
                return applyg(fun, y);

        else
            return x;
    }
}
applyg(add)(3)(4)(5)(); // muss 12 ergeben
applyg(mul)(2)(4)(8)(); // muss 48 ergeben

//Write a function addm that takes two m objects and returns an m object.
//JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}

function addm(m1, m2) {
    return m(m1.value + m2.value, "(" + m1.value + "+" + m2.value + ")");
}

JSON.stringify(addm(m(2), m(5)));

//Make a function that stores a value in a variable.
//var variable; store(5); // variable === 5

var variable;
store = (x) => variable = x;
store(5);
console.log(variable === 5);