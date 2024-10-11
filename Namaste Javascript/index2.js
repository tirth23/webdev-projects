/* 
Scope means where we can access the variable/function in code
Scope is directly dependent on lexical environment
Lexical environment is local memory along with reference to the enclosing lexical environment of its parent
lexical means where it is physically located in code
lexical environment of GEC is null 
*/

// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
// 	var x = 10;
// 	console.log(x);
// }
// function b() {
// 	console.log(x);
//   var x = 100;
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
// 	var x = 10;
// 	console.log(x);
// }
// function b() {
// 	console.log(x); //x will check in lexical scope/env
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
// 	var x = 10;
// 	console.log(x);
// }
// function b() {
// 	console.log(x);
//   x = 100;   // bydefault it will be global variable
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x = 10;
// let z = 100;
// function a() {
// 	var y = 5;
// }
// console.log(window.x);
// console.log(this.x);
// console.log(x);
// /* non-esixting object returns undefined */
// // console.log(window.y);
// // console.log(this.y);
// // console.log(y);
// console.log(window.z);
// console.log(this.z);
// console.log(z);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var x;
// console.log(x);
// x = 10;
// console.log(x);
// x = "Tirth";
// console.log(x);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// "use strict"
// function test() {
//   a = 5;
//   /* when declared with var it becomes function scope */
//   var b = 10;
// }
// test();
// /* In strict mode a = 5 not allowed */
// console.log(a);
// console.log(b);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* In strict mode not allowed */
// "use strict"
// function abc(a, a) {
//   console.log(a);
// }
// abc(1, 2);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function a() {
// 	console.log(b + " in a");
// 	c();
// 	function c() {
// 		console.log(b + " in c");
// 	}
// }
// var b = 10;
// a();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function a() {
// 	console.log(b + " in a");
// 	c();
// 	function c() {
// 		console.log(b + " in c");
// 	}
//   var b = 69;
// }
// var b = 10;
// a();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function a() {
// 	console.log(b + " in a");
//   var b = 69;
// 	c();
// 	function c() {
// 		console.log(b + " in c");
// 	}
// }
// var b = 10;
// a();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function a() {
//   c();
// 	var b = 10;
// 	console.log(b + " in a");
// 	function c() {
// 		console.log(b + " in c");
// 	}
// }
// a();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var b = 20;
// function a() {
// 	var b = 10;
// 	c();
// 	function c() {
// 		console.log(b + " in c");
// 	}
// }
// a();
// console.log(b + " in global");

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function a() {
// 	var b = 10;
// 	c();
// 	function c() {
// 		console.log(b + " in c");
// 	}
// }
// a();
// console.log(b + " in global");
