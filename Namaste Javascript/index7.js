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

// /* The wrapping parentheses ensure that the function xyz is treated as an expression, not a declaration. */
// (function hey(i) {
// 	console.log("HI" + i);
// }(6));

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

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* if we are returning new object then it will be replaced by default object */
// function car(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	year = year;
// 	this.displayInfo = function () {
// 		console.log(`Car ${this.make} ${this.model} ${year}`);
// 	};
//   return new String("Hello");
// }
// const car1 = new car("Toyota", "camry", 2029);
// console.log(car1);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /*
// If a constructor explicitly returns an object, that object is returned instead of the new instance.
// If a constructor explicitly returns a primitive value, it is ignored, and the newly created object is returned.

// new MyClass1() returns a Number object, which is not an instance of MyClass1.
// new MyClass2() ignores the primitive return and uses the default object created by the new operator, making it an instance of MyClass2
// */

// var MyClass1 = function () {
// 	return new Number(1);
// };
// var MyClass2 = function () {
// 	return Number(2);
// };

// console.log(
// 	new MyClass1() instanceof MyClass1,
// 	new MyClass2() instanceof MyClass2
// );

// console.dir(new Number(1));
// console.dir(MyClass1);
// console.dir(new MyClass1());

// console.dir(Number(2));
// console.dir(MyClass2);
// console.dir(new MyClass2());

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* In JavaScript, objects (like bankAccount) are passed by reference, not by value.
// This means that when you modify an object's property, you are directly modifying the original object, not a copy. */
// (function () {
// 	var myAccount = {
// 		name: "Tirth",
// 		amount: 20000,
// 		deductAmount: function (amount) {
// 			this.amount -= amount;
// 			return "Amount in account: " + this.amount;
// 		},
// 	};
// 	var bankAccount = {
// 		name: "Tirth",
// 		amount: 6000,
// 	};
// 	var withDrawAmountBy = function (totalAmount) {
// 		return myAccount.deductAmount.call(bankAccount, totalAmount);
// 	};
//   console.log(withDrawAmountBy(600));
//   console.log(withDrawAmountBy(400));
//   console.log(withDrawAmountBy(100));
// }());

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const fn = function (x) {
// 	//Function code goes here
// };
// fn.name = "John";
// fn.profile = function (y) {
// 	//Profile code goes here
// };
// console.dir(fn);
