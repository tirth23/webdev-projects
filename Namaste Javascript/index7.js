// /* function statement aka function declaration */
// a();
// function a() {
// 	console.log("a called");
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* function expression */
// b();
// var b = function () {
//     console.log("b called");
// }
// b();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* anonymous function: it doesn't have its own identity */
// function () {}

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* named function expression */
// var c = function xyz() {
// 	console.log("c called");
// 	console.log("xyz");
// };
// c();
// xyz(); //error

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* first class function/first class citizen: when function/anonymous function are passed in arg */
// var b = function (param1) {
// 	console.log(param1);
// };
// function xyz() {
// 	console.log("xyz");
// }
// b(xyz);
// b(function () {
// 	console.log("Hi");
// });

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var b = function (param1) {
// 	return function () {
// 		console.log("Hi1");
// 	};
// };
// console.log(b()); //prints returned anonymous function

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var b = function (param1) {
// 	return function xyz() {
// 		console.log("Hi2");
// 	};
// };
// console.log(b()); //prints returned  function

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* Immediately invoked function expression - IIFE */
// (function hey(i) {
// 	console.log("HI" + i);
// })(6);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* Constuctor Function */
// function car(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	year = year;
// 	this.displayInfo = function () {
// 		console.log(`Car ${this.make} ${this.model} ${year}`);
// 	};
// }
// const car1 = new car("Toyota", "camry", 2029);
// console.log(car1);
// car1.displayInfo();


