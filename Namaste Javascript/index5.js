/* closure */
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// x()();      //means we are calling inner function of x using ()(): x() returns y -> y();

// function x() {
// 	var a = 7;
// 	return function y() {
// 		console.log(a);
// 	};
// }
// var z = x();
// console.log(z);
// z();

// function x() {
// 	var a = 7;
// 	return function () {
// 		console.log(a);
// 	};
// }
// var z = x();
// console.log(z);
// z();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function z() {
//     var b = 100;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x() {
//     function y() {
//         console.log(a);
//     }
//     let a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function x(b) {
// 	function y() {
// 		console.log(a, b);
// 	}
// 	let a = 100;
// 	return y;
// }
// var z = x("Hello World");
// console.log(z);
// z();

// function outer() {
//     var c = 20;
//     function x(b) {
//         function y() {
//             console.log(a, b, c);
//         }
//         let a = 100;
//         return y;
//     }
//     return x;
// }
// var z = outer()("Hello World");      //outer will return x => x("Hello World")
// console.log(z);
// z();

// var c = 20;
// function outer() {
//     // var c = 40;
//     function x(b) {
//         function y() {
//             console.log(a, b, c);
//         }
//         // let a = 100;
//         return y;
//     }
//     return x;
// }
// // let a = 30;
// var z = outer()("Hello World");      //outer will return x => x("Hello World")
// console.log(z);
// z();
// var a = 30;

/* Data Hiding */
// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }
// // console.log(count);
// /*
// count is hiddden in function, no access from outside
// Can only be accessed through closure formed by incrementCounter
// */
// var counter1 = counter();
// counter1();
// counter1();
// var counter2 = counter();
// counter2();
// counter2();

// function Counter() {
//     var count = 0;
//     this.incrementCounter = function xyz () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count--;
//         console.log(count);
//     }
// }
// // using constructor function
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

/* smart garbage collector */
// function a() {
//     var x = 3, z = 10;
//     return function b() {
//         console.log(x);
//     }
// }
// var data = a();  // z will be removed from memory by SGC
// data();

/* Another Example:- */
// Function to increment counter
// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// // Call add() 3 times
// add();
// add();
// console.log(add());
// //The counter should now be 3. But it is 1.

// function add() {
//     let counter = 0;
//     function plus() { counter += 1; }
//     plus();
//     return counter;
// }
// add();
// add();
// console.log(add());

//self-invoking function IIFE - (Immediately Invoked Function Expression)
// const add = (function () {
//     let counter = 0;
//     return function () { counter += 1; return counter }
// })();
// console.log(add);
// add();
// add();
// console.log(add());
// the counter is now 3
