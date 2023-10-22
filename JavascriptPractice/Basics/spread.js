var myobj = {}
Object.assign(myobj, {a: 1, b: 2, c: 3}, {z: 9, y: 8});
console.log(myobj)

function sumtwo(a, b){
    return a + b;
}
var a = [2, 3];
console.log(sumtwo(...a));     //...a is spread operator

function sumal(...args){       //args receive array, args is rest operator
    let sum = 0 
    console.log(args);
    for (const i of args) {
        sum += i;
    }
    return sum
}
console.log(sumal(1, 2, 4, 5));

function sumal1(a, b, ...args){       
    console.log(args);
    let multi = a * b;
    let sum = 0 
    for (const i of args) {
        sum += i;
    }
    return [multi, sum]
}
console.log(sumal1(1, 2, 4, 5));