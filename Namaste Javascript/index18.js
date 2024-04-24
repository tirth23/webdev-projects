/* Currying with bind */
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyTwo = multiply.bind(this, 2);
// multiplyTwo(5);

// let multiplyTwo2 = multiply.bind(this);
// multiplyTwo2(5, 2);

// let multiplyThree = multiply.bind(this, 3, 4);
// multiplyThree(5);


/* Currying with closure */
// function multiply (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
// let multiplyTwo = multiply(2);
// multiplyTwo(5);
// let multiplyThree = multiply(3);
// multiplyThree(5);