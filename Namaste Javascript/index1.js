/* Primitive DataType: number, string, boolean, null, undefined, symbol, bigint
Object DataType: Object, Array, Function, Map, Set, Date, RegExp, Error, WeakMap, WeakSet */

// var x = 7;
// console.log(x, typeof x);
// var y = "Hello";
// console.log(y, typeof y);
// var z = true;
// console.log(z, typeof z);
// var a = null;
// console.log(a, typeof a);
// var b = undefined;
// console.log(b, typeof b);
// var c = Symbol("Hello");
// console.log(c, typeof c);
// var d = BigInt(10);
// console.log(d, typeof d);
// var fun = () => "a";
// console.log(fun, typeof fun);
// console.dir(fun);
// class newClass {}
// console.log(newClass, typeof newClass);
// console.dir(newClass);
// var arr = ["d", "h"];
// console.log(arr, typeof arr);
// var ob = { a: "a" };
// console.log(ob, typeof ob);
// var map1 = new Map();
// console.log(map1, typeof map1);
// var set1 = new Set([1, 2, 3]);
// console.log(set1, typeof set1);
// var e = new Boolean(true);
// console.log(e, typeof e);
// var f = new Number(1);
// console.log(f, typeof f);
// var g = new String("abc");
// console.log(g, typeof g);
// console.log(typeof NaN);

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
// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.
// Remember that JavaScript only hoists declarations, not initialisation.
// */
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

/*
In non-strict, if explicitly not declare as var, let or const, it finds in outer scope & finds till global Scope
& there also if not found it treats that variable as global variable, it will be declared as global variable
In strict mode, if explicitly not declare as var, let or const, it will throw an reference error
*/
// 'use strict'
// x = 7;
// console.log(x);

// console.log(y);
// y = 90;
// function fnc() {
// 	// console.log(y);
// 	y = 70;
//   console.log(y);
//   function inner() {
//     var z = 10; //local
//     // z = 10; //global
//     console.log(z);
//   }
//   // console.log(z); //error
//   inner();
//   console.log(z);
// }
// z = 100;
// console.log(z);
// fnc();
// console.log(y);
// console.log(z)


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
