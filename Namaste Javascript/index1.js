/* Primitive DataType: number, string, boolean, null, undefined, symbol, bigint
Object DataType: Object, Array, Function, Map, Set, Date, RegExp, Error, WeakMap, WeakSet */

/* Primitive DataType */

// var x = 7;
// var y = "Hello";
// var z = true;
// var a = null;
// var b = undefined;
// var c = Symbol("Hello");
// var d = BigInt(10);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x = 7;
// function getName() {
// 	console.log("Namaste Javascript");
// }
// getName();
// console.log(x);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

/* 
hoisting: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
variables, classes, or imports to the top of their scope, prior to execution of the code
 */
// getName();
// console.log(x);
// var x = 7;
// function getName() {
// 	console.log("Namaste Javascript");
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// getName();
// console.log(x);
// var y = 9;
// console.log(y);
// function getName() {
// 	console.log("Namaste Javascript");
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function getName() {
// 	console.log("Namaste Javascript");
// 	// return 2;
// }
// console.log(getName());

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// console.log(getName);
// function getName() {
// 	console.log("Namaste Javascript");
// }
// console.log(getName);
// console.log(typeof getName);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// x = 7;
// console.log(x);
// var x;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x;
// console.log(x);
// x = 7;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /*
// In non-strict, if explicitly not declare as var, let or const, it will be declared as global variable
// In strict mode, if explicitly not declare as var, let or const, it will throw an reference error
// */
// // 'use strict'
// x = 7;
// console.log(x);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// console.log(x);
// x = 7;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* Arrow Function - not hoisted*/
// var y = 7;
// console.log(y);
// getName(); //getname is variable in memory which is undefined
// console.log(x);
// var x = 7;
// var getName = () => {
// 	console.log("Hi");
// };

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var y = 7;
// console.log(y);
// console.log(getName); //getname is variable in memory which is undefined
// console.log(x);
// var x = 7;
// var getName = () => {
// 	console.log("Hi");
// };

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var y = 7;
// console.log(y);
// console.log(x);
// var x = 7;
// var getName = () => {
// 	console.log("Hi");
// };
// getName(); //once function initialized it behaves like function

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var y = 7;
// console.log(y);
// console.log(x);
// var x = 7;
// var getName = () => {
// 	console.log("Hi");
// };
// console.log(getName); //once function initialized it behaves like function

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* Anonyms Function behaves same as arrow function for hoisting */
// var y = 7;
// console.log(y);
// console.log(getName);
// // getName();
// console.log(x);
// var x = 7;
// var getName = function () {
// 	console.log("Hii");
// };
// console.log(getName);
// getName();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* Named Function Expression behaves same as arrow function for hoisting */
// var y = 7;
// console.log(y);
// console.log(getName);
// // getName();
// console.log(x);
// var x = 7;
// var getName = function xyz() {
// 	console.log("Hi");
// };
// console.log(getName);
// getName();
// // console.log(xyz);
// // xyz();
