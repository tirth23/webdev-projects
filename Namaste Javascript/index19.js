/* At its core, currying is a functional programming technique that involves 
breaking down a function that takes multiple arguments into a series of functions 
that take one argument each. This creates a chain of functions, where each function 
returns another function until the final result is achieved */

// /* Currying with bind */
// let multiply = function (x, y) {
// 	console.log(x * y);
// };

// let multiplyTwo = multiply.bind(this, 2);
// console.log(multiplyTwo);
// multiplyTwo(5);

// let multiplyTwo2 = multiply.bind(this);
// multiplyTwo2(5, 2);

// let multiplyThree = multiply.bind(this, 3, 4);
// multiplyThree(5);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Currying with closure */
// function multiply(x) {
// 	return function (y) {
// 		console.log(x * y);
// 	};
// }
// let multiplyTwo = multiply(2);
// multiplyTwo(5);
// let multiplyThree = multiply(3);
// multiplyThree(5);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* a pure function is one that, for the same inputs, always returns the same output and has no side effects.  */
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* In contrast, an impure function may have side effects or may return different results for the same inputs due to external factors. */
// let counter = 0;
// function incrementCounter() {
// 	counter += 1; // Modifies external state
// 	return counter;
// }
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2 
