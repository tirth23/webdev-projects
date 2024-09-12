/* we can use strict anywhere inside code and code below will get effected */
// "use strict"

/* this in global space */
// console.log(this);

/* In non-strict, this is undefined in function. so replaced with global object - this substiution */
// function x() {
// 	/* strict: undefined
//   non-strict: window */
// 	console.log(this);
// }
// x();
// window.x();

/* this inside object's method refers to object*/
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
// 			console.log(this);
// 		};
// 		nestedFn();
// 	},
// };
// obj2.fn();

// const obj4 = {
//   fn: function() {
//     console.log(this);
//   }
// }
// obj4.fn();
// /* here we are assigning function so this is window/global in non strict & undefined in strict*/
// const myfn = obj4.fn;
// myfn();

/* call apply bind methods */
// const student = {
// 	name: "Tirth",
// 	printName: function () {
// 		console.log(this, this.name);
// 	},
// };
// student.printName();

// const student1 = {
//     name: "Patel",
// };
// /* function borrowing */
// student.printName.call(student1);

/* can be used by putting function outside object */
// let printName = function (homeTown, state) {
// 	console.log(this.firstName + " " + this.lastName + " " + homeTown + state);
// };
// const student2 = {
// 	firstName: "Tirth",
// 	lastName: "Patel",
// };

// /* call */
// printName.call(student2, "Ahmedabad", "Gujarat");

// /* apply */
// printName.apply(student2, ["Ahmedabad", "Gujarat"]);

// /* bind */
// const newPrintFun = printName.bind(student2, "Ahmedabad");
// console.log(newPrintFun)
// newPrintFun("Gujarat");

// const student3 = {
//     firstName: "Xyz",
//     lastName: "Abc"
// };
// printName.call(student3);

/* this inside arrow function retains value of enclosing 
lexical context (where physically placed in code) */
// const obj = {
// 	a: 10,
// 	x: () => {
// 		console.log(this);
// 	},
// };
// obj.x();

const name1 = {
  nickName: 'Joe',
  arrow: () => {
    console.log(`arrow: ${this.nickName}`);
  },
  regular: function () {
    console.log(`regular: ${this.nickName}`);
  }
}
// window.nickName = "tirth";
name1.arrow();
name1.regular()

// const obj1 = {
// 	a: 10,
// 	y: function () {
// 		console.log(this);
// 		const x = () => {
// 			console.log(this);
// 		};
// 		x();
// 	},
// };
// obj1.y();

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
