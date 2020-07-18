//eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt

function identity_function(argument) {
    return function() {
        return argument;
    }
}
console.log(identity_function(1)());

// eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)

function addf(x) {
    return function(y) {
        return x + y;
    }
}
console.log(addf(2)(3));

//eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.

function addf(x) {
    return function(y) {
        return x + y;
    }
}

function mul(x) {
    return function(y) {
        return x * y;
    }
}

function applyf(fun) {
    return fun;
}
console.log(applyf(addf)(5)(6)); //11


//eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.

function curry(fun, z) {
    return function(y) {
        return fun(z)(y);
    }
}
console.log(curry(addf, 3)(4));

//die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?

inc1 = addf(1);
inc2 = applyf(addf)(1);

//eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.

function methodize(fun) {
    return function(x) {
        return fun(this)(x);
    }
}
Number.prototype.add = methodize(addf);


//eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.
function twice(fun) {
    return function(x) {
        return fun(x, x);
    }
}

function mul(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}

double = twice(add);
a = double(11);
console.log(a);
square = twice(mul);
m = square(11);
console.log(m);


//eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.

function composeu(fun1, fun2) {
    return function(x) {
        return fun2(fun1(x));
    }
}
composeu(double, square)(3); // muss 36 ergeben

//eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.

function composeb(binary1, binary2) {
    return function(x, y, z) {
        return binary1(binary2(x, y), z)
    }
}
composeb(add, mul)(2, 3, 5); // muss 25 ergeben

//eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.

function counterf(zahl) {
    return {
        inc: function() {
            return zahl + 1;
        },
        dec: function() {
            return zahl - 1;
        }
    };
}
counter = counterf(10);
counter.inc(); // muss 11 ergeben
counter.dec(); // muss 10 ergeben

// ein "Array Wrapper"-Objekt mit den Methoden get, store und append, so dass ein Angreifer keinen Zugriff auf das innere, private Array hat.

class Array_Wrapper {
    constructor(_array) {
        let array = _array;
        this.getArray = () => array;
        this.storeArray = (i) => array = i;
        this.appendElement = (v) => array.push(v);
    }
}
//z.B wrapper = new Array_Wrapper([4, 5, 6]);
//wrapper.storeArray([7,3,6]);
//wrapper.appendElement(8);
//console.log(wrapper.getArray());
//console.log(wrapper.array);