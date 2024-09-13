// let name1 = {
// 	firstname: "Tirth",
// 	lastname: "Patel",
// };
// console.log(name1);

// let printName = function (city, state, country) {
// 	console.log(
// 		this.firstname +
// 			" " +
// 			this.lastname +
// 			" " +
// 			city +
// 			" " +
// 			state +
// 			" " +
// 			country
// 	);
// };
// let printMyName = printName.bind(name1, "amdavad");
// printMyName("gujarat", "india");

// const numbers = [5, 6, 2, 3, 7];
// // Using Math.max directly with an array does not work:
// console.log(Math.max(numbers)); // NaN - because Math.max expects separate number arguments, not a single array.
// // Using apply to spread the numbers array into individual arguments:
// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber); // Output: 7

// const alice = {
// 	name: "Alice",
// 	age: 30,
// 	introduce: function () {
// 		// console.log(this)
// 		console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// 	},
// };
// // Get the button element from the HTML
// const button = document.getElementById("introduceButton");
// // Add an event listener to the button
// // We use bind to ensure 'this' inside introduce refers to 'alice'
// // button.addEventListener('click', alice.introduce);
// const boundIntroduce = alice.introduce.bind(alice);
// button.addEventListener("click", boundIntroduce);

// /* polyfill for call */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price) {
// 	console.log(`I bought a ${this.color} ${this.name} of ${price} `);
// }
// Function.prototype.myCall = function (context = {}, ...args) {
// 	// console.log(this)
// 	if (typeof this !== "function") {
// 		throw new Error(this + "Is not callable");
// 	}
// 	// context -> car
// 	context.myFunction = this; // buyCar
//   // console.log(context);
// 	context.myFunction(...args);
// };
// buyCar.myCall(car, "5000000");

/* polyfill for apply */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price) {
// 	console.log(`I bought a ${this.color} ${this.name} for ${price}`);
// }
// Function.prototype.myApply = function (context = {}, argsArray = []) {
// 	if (typeof this !== "function") {
// 		throw new Error(this + " is not callable");
// 	}
// 	if (!Array.isArray(argsArray)) {
// 		throw new Error(this + "We need an array for args");
// 	}
// 	/**
// 	 * car.myFunction = buyCar
// 	 */
// 	context.myFunction = this;
// 	/**
// 	 * car.myFunction(5000000)
// 	 */
// 	context.myFunction(...argsArray); // sprad the array and invoking the function
// };
// buyCar.myApply(car, ["3000000"]);

// /* polyfill for bind */
/* A polyfill is a piece of code (usually JavaScript on the Web) 
used to provide modern functionality on older browsers that do not natively support it. */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price, year) {
// 	console.log(
// 		`I bought a ${this.color} ${this.name} for ${price} made in ${year}`
// 	);
// }
// Function.prototype.myBind = function (context, ...boundArgs) {
// 	if (typeof this !== "function") {
// 		throw new Error(this + " is not callable");
// 	}
// 	const targetFunction = this; // The function on which myBind is called
// 	return function (...args) {
// 		return targetFunction.apply(context, [...boundArgs, ...args]);
// 	};
// };
// const buyMyCar = buyCar.myBind(car, "3000000");
// buyMyCar("2020");

// Function.prototype.mybind = function (...args) {
// 	let obj = this;
// 	params = args.slice(1);
// 	return function (...args2) {
// 		// obj.call(args[0]);
// 		obj.apply(args[0], [...params, ...args2]);
// 	};
// };
// let printMyName1 = printName.mybind(name1, "amdavad");
// printMyName1("gujarat", "india");
