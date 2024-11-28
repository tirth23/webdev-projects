/* 
we can use strict anywhere inside code and code below will get effected 
strict forces stricter parsing and error handling, helping developers avoid common bugs 
and write more secure code
*/
// "use strict"

// /* this in global space */
// console.log(this);

// /* In non-strict, this is undefined in function. so replaced with global object - this substiution */
// function x() {
// 	/* strict: undefined
//   non-strict: window */
// 	console.log(this);
// }
// x();
// window.x();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* this inside object's method refers to object*/
// const obj3 = {
// 	a: 10,
// 	x: function () {
// 		console.log(this, this.a);
// 	},
// };
// obj3.x();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// var obj2 = {
// 	fn: function () {
// 		console.log(this);
// 		var nestedFn = function () {
// 			console.log(this);
// 		};
// 		nestedFn();
// 	},
// };
// obj2.fn();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// "use strict";
// const obj4 = {
// 	fn: function () {
// 		console.log(this);
// 	},
// };
// obj4.fn();
// /* here we are assigning function so this is window/global in non strict & undefined in strict*/
// const myfn = obj4.fn;
// myfn();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// "use strict";
// const obj5 = {
// 	fn: () => {
// 		console.log(this);
// 	},
// };
// obj5.fn();
// /* here we are assigning function so this is window/global in non strict & undefined in strict*/
// const myfn5 = obj5.fn;
// myfn5();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /*
// call apply bind methods: an object can borrow a method from another object
// call: calls this function with a given this value and arguments provided individually
// apply: similar to call, arguments are passed in array
// bind: similar to call but return a new function that can be called with other args
// */
// "use strict"
// const student = {
// 	name: "Tirth",
// 	printName: function () {
// 		console.log(this, this.name);
// 	},
// };
// student.printName();

// const student1 = {
// 	name: "Patel",
// };
// /* function borrowing */
// student.printName.call(student1);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* can be used by putting function outside object */
// let printName = function (homeTown, state) {
// 	console.log(this.firstName + " " + this.lastName + " " + homeTown + state);
// };
// const student2 = {
// 	firstName: "Tirth",
// 	lastName: "Patel",
// };

// /* call */
// printName.call(student2, "Ahmedabad", " Gujarat");

// /* apply */
// printName.apply(student2, ["Ahmedabad", " Gujarat"]);

// /* bind */
// const newPrintFun = printName.bind(student2, "Ahmedabad");
// console.log(newPrintFun);
// newPrintFun(" Gujarat");

// const student3 = {
//     firstName: "Xyz",
//     lastName: "Abc"
// };
// printName.call(student3);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* this inside arrow function retains value of enclosing lexical context (where physically placed in code) */
// const obj = {
// 	a: 10,
// 	x: () => {
// 		console.log(this);
// 	},
// };
// obj.x();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const obj1 = {
// 	a: 10,
// 	y: function () {
// 		console.log(`Inside y: `, this);
// 		const x = () => {
// 			console.log(`Inside x: `, this);
// 		};
// 		const z = function () {
//       /* act as normal function so refers to window in non strict and undefined in strict */
// 			console.log(`Inside z: `, this);
// 		};
// 		x();
// 		z();
// 	},
// };
// obj1.y();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const name1 = {
// 	nickName: "Joe",
// 	eventuallySayName: function () {
//     console.log(this);
// 		function actuallySayName() {
// 			console.log(`first: ${this.nickName}`);
// 		};
// 		const actuallySayNameWithArrow = () => {
// 			console.log(`second: ${this.nickName}`);
// 		};
// 		actuallySayName();
// 		actuallySayNameWithArrow();
//     /* forms closure with lexical scope */
// 		setTimeout(actuallySayName, 1000);
// 		setTimeout(actuallySayNameWithArrow, 1000);
// 	},
// 	arrow: () => {
// 		console.log(`arrow: ${this.nickName}`);
// 	},
// 	regular: function () {
// 		console.log(`regular: ${this.nickName}`);
// 	},
// };
// window.nickName = "globalNickname";
// name1.arrow();
// name1.regular(); //method invocation
// name1.eventuallySayName(); //method invocation

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// /* 
// this in JavaScript functions: Normally, this refers to the object that is calling the function. 
// In constructor functions (functions called with new), this refers to the new instance being created. 
// */
// function Food(name, price) {
//   console.log(this);
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5));
// console.log(new Food())

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// "use strict"
/* Node Env */
/* In node env, this return {} which is module.exports */
// console.log(this);

// function x() {
// 	/* strict: undefined
//   non-strict: global */
// 	console.log(this);
// }
// x();

// const obj3 = {
// 	a: 10,
// 	x: function () {
// 		console.log(this, this.a);
// 	},
// };
// obj3.x();

// var obj2 = {
// 	fn: function () {
// 		console.log(this);
// 		var nestedFn = function () {
// 			/* strict: undefined
//          non-strict: global */
// 			console.log(this);
// 		};
// 		nestedFn();
// 	},
// };
// obj2.fn();
