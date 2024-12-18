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
// console.dir(printMyName);
// printMyName("gujarat", "india");

/* ------------------------------------------------------------------------------------------------------------------------------- */

// const numbers = [5, 6, 2, 3, 7];
// // Using Math.max directly with an array does not work:
// console.log(Math.max(numbers)); // NaN - because Math.max expects separate number arguments, not a single array.
// // Using apply to spread the numbers array into individual arguments:
// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber); // Output: 7

/* ------------------------------------------------------------------------------------------------------------------------------- */

// const alice = {
// 	name: "Alice",
// 	age: 30,
// 	introduce: function () {
// 		console.log(this)
// 		console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// 	},
// };

// const button = document.getElementById("introduceButton");

// /* bydefault this refers to HTML element in event listener */
// button.addEventListener('click', alice.introduce);

// /* We use bind to ensure 'this' inside introduce refers to 'alice' */
// const boundIntroduce = alice.introduce.bind(alice);
// button.addEventListener("click", boundIntroduce);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* A polyfill is a piece of code (usually JavaScript on the Web) 
// used to provide modern functionality on older browsers that do not natively support it. */

// /* polyfill for call */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price) {
// 	console.log(`I bought a ${this.color} ${this.name} of ${price} `);
// 	return "returnd from car";
// }
// Function.prototype.myCall = function (context, ...args) {
// 	// console.log(this)
// 	if (typeof this !== "function") {
// 		throw new Error(this + "Is not callable");
// 	}
// 	// context -> car
// 	context = context && typeof context === "object" ? context : {};
// 	context.myFunction = this; // add buycar into car
// 	const result = context.myFunction(...args); // Call the function with the specified context and arguments
// 	console.log(car);
// 	delete context.myFunction; // Remove the temporary property
// 	return result;
// };
// console.log(buyCar.myCall(car, "5000000"));
// console.log(car);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* polyfill for apply */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price) {
// 	console.log(`I bought a ${this.color} ${this.name} for ${price}`);
//   return "returnd from car";
// }
// Function.prototype.myApply = function (context, argsArray = []) {
// 	if (typeof this !== "function") {
// 		throw new Error(this + " is not callable");
// 	}
// 	if (!Array.isArray(argsArray)) {
// 		throw new Error(this + "We need an array for args");
// 	}
// 	context = context && typeof context === "object" ? context : {};
// 	context.myFunction = this;
// 	const result = context.myFunction(...argsArray);
// 	delete context.myFunction; // Remove the temporary property
// 	return result;
// };
// console.log(buyCar.myApply(car, ["3000000"]));

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* polyfill for bind */
// let car = {
// 	name: "Mercedes",
// 	color: "White",
// };
// function buyCar(price, year) {
// 	console.log(
// 		`I bought a ${this.color} ${this.name} for ${price} made in ${year}`
// 	);
// 	return "returnd from car";
// }
// Function.prototype.myBind = function (context, ...boundArgs) {
// 	if (typeof this !== "function") {
// 		throw new Error(this + " is not callable");
// 	}
// 	context = context && typeof context === "object" ? context : {}; //not required here since we are calling with apply
// 	const targetFunction = this; // The function on which myBind is called
// 	return function (...args) {
// 		return targetFunction.apply(context, [...boundArgs, ...args]);
// 	};
// };
// const buyMyCar = buyCar.myBind(car, "3000000");
// console.log(buyMyCar("2020"));

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

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* polyfill for map */
// /* ideally it should be !Array.prototype.map for unsupported older browser when they don't have this property */
// if (!Array.prototype.myMap) {
// 	Array.prototype.myMap = function (callback, thisArg) {
// 		/* Throw a TypeError if 'callback' is not a function */
// 		if (typeof callback !== "function") {
// 			throw new TypeError(callback + " is not a function");
// 		}
// 		const val = new Array(this.length);
// 		var context = thisArg ? thisArg : this;
// 		for (let i = 0; i < this.length; i++) {
// 			/* check if the index exists in the array to handle sparse arrays */
// 			if (i in this) {
// 				var mappedValue = callback.call(context, this[i], i, this);
// 				val[i] = mappedValue;
// 			}
// 		}
// 		return val;
// 	};
// }
// const arr1 = [1, 2, 4];
// delete arr1[1]; //create sparse array by deleting inbetween
// const data = arr1.myMap((item) => item * 2);
// console.log(data);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* polyfill for filter */
// if (!Array.prototype.myFilter) {
// 	Array.prototype.myFilter = function (callback, thisArg) {
// 		/* Throw a TypeError if 'callback' is not a function */
// 		if (typeof callback !== "function") {
// 			throw new TypeError(callback + " is not a function");
// 		}
// 		const result = [];
// 		var context = thisArg ? thisArg : this;
// 		for (var i = 0; i < this.length; i++) {
// 			/* check if the index exists in the array to handle sparse arrays */
// 			if (i in this) {
// 				if (callback.call(context, this[i], i, this)) {
// 					result.push(this[i]);
// 				}
// 			}
// 		}
// 		// for (const element of this) {
// 		//   if (this.hasOwnProperty(element)) {
// 		//     const context = thisArg ? thisArg : this;
// 		//     if (callback.call(context, element, this.indexOf(element), this)) {
// 		// 			result.push(element);
// 		// 		}
// 		//   }
// 		// }
// 		return result;
// 	};
// }
// var numbers = [1, 2, 3, 4, 5];
// var evenNumbers = numbers.myFilter(function (number) {
// 	return number % 2 === 0;
// });
// console.log(evenNumbers);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* polyfill for reduce */
// if (!Array.prototype.myReduce) {
// 	Array.prototype.myReduce = function (callback, initialValue) {
// 		/* Throw a TypeError if 'callback' is not a function */
// 		if (typeof callback !== "function") {
// 			throw new TypeError(callback + " is not a function");
// 		}
// 		/* Handle empty array with no initial value case */
// 		if (this.length === 0 && arguments.length === 1) {
// 			throw new TypeError("Reduce of empty array with no initial value");
// 		}
// 		// Step 3: Set the initial index and accumulator
// 		let accumulator = arguments.length >= 2 ? initialValue : this[0];
// 		let startIndex = arguments.length >= 2 ? 0 : 1;
// 		// Step 4: Iterate over the array
// 		for (let i = startIndex; i < this.length; i++) {
// 			// Check if the index exists in the array to handle sparse arrays
// 			if (i in this) {
// 				// Step 5: Update the accumulator
// 				accumulator = callback(accumulator, this[i], i, this);
// 			}
// 		}
// 		// Step 6: Return the accumulated value
// 		return accumulator;
// 	};
// }
// const arr3 = [5, 8];
// const ans = arr3.myReduce((acc, curr) => acc + curr);
// console.log(ans);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* 
// greet is a function but also an object, allowing us to add a custom property (language)
// This flexibility is key to JavaScript’s powerful functional capabilities 
// */

// function greet() {
// 	console.log("Hello, world!");
// }
// greet.language = "English";
// console.log(greet.language);
// greet();
// console.dir(greet)

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /* The in operator returns true if the specified property is in the specified object or its prototype chain */

// const car = { make: "Honda", model: "Accord", year: 1998 };
// console.log("make" in car);

// const arr5 = ["a", "b", "c", "d"];
// delete arr5[1];
// console.log(2 in arr5);
// console.log(1 in arr5);
