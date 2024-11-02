// /* Primitive DataType: number, string, boolean, null, undefined, symbol, bigint
// Object DataType: Object, Array, Function, Map, Set, Date, RegExp, Error, WeakMap, WeakSet */

// var x = 7;
// var y = "Hello";
// var z = true;
// var a = null;
// var b = undefined;
// var c = Symbol("Hello");
// var d = BigInt(10);
// var fun = () => "a";
// class newClass {}
// var arr = ["d", "h"];
// var ob = { a: "a" };
// var map1 = new Map();
// var set1 = new Set([1, 2, 3]);
// var e = new Boolean(true);
// var f = new Number(1);
// var g = new String("abc");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(fun, typeof fun);
// console.dir(fun);
// console.log(newClass, typeof newClass);
// console.dir(newClass);
// console.log(arr, typeof arr);
// console.log(ob, typeof ob);
// console.log(map1, typeof map1);
// console.log(set1, typeof set1);
// console.log(e, typeof e);
// console.log(f, typeof f);
// console.log(g, typeof g);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x = 7;
// function getName() {
// 	console.log("Namaste Javascript");
// }
// getName();
// console.log(x);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /*
// hoisting: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
// variables, classes, or imports to the top of their scope, prior to execution of the code
//  */
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

// /*
// The console.dir() method in JavaScript is used to display an interactive list of the properties of a specified JavaScript object.
// Unlike console.log(), which prints the object as a string representation, console.dir() presents the object in a tree-like structure,
// which is especially useful for inspecting deeply nested objects.
// Unlike console.log(), which often prints a string representation of an object (e.g., [object Object]),
// console.dir() helps visualize the actual properties of that object.
// */

// console.log(getName);
// function getName() {
// 	console.log("Namaste Javascript");
// }
// console.log(getName);
// console.dir(getName);

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
// In non-strict, if explicitly not declare as var, let or const, it finds in outer scope & finds till global Scope
// & there also if not found it treats that variable as global variable, it will be declared as global variable
// In strict mode, if explicitly not declare as var, let or const, it will throw an reference error
// */
// // 'use strict'
// // x = 7;
// // console.log(x);

// // console.log(y);
// // y = 90;
// function fnc() {
// 	// console.log(y);
// 	y = 70;
//   console.log(y);
// }
// fnc();
// console.log(y);

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
