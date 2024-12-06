// console.log(new Date());

// const obj = {
// 	name: "Sample",
// 	date: new Date(),
// };

// const json = JSON.stringify(obj);
// console.log(json); // Output: {"name":"Sample","date":"2024-11-14T12:00:00.000Z"}
// const parsedObj = JSON.parse(json);
// console.log(parsedObj.date);
// parsedObj.date = new Date(parsedObj.date);
// console.log(parsedObj.date); // Output: a Date object representing the original date

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// let uri = "https://example.com/search?query=hello world";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(encoded_uri);
// console.log(decoded_uri);

// /*
// Use encodeURIComponent for individual URI components (like query parameters) instead of encodeURI,
// as encodeURI does not encode characters like &, =, and ?, which have specific uses within query strings.
// */

// const component = "hello world & special=characters?";
// const encodedComponent = encodeURIComponent(component);
// console.log(encodedComponent);
// // Output: "hello%20world%20%26%20special%3Dcharacters%3F"

// const decodedComponent = decodeURIComponent(encodedComponent);
// console.log(decodedComponent);
// // Output: "hello world & special=characters?"

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const fn = function (x) {
// 	//Function code goes here
// };
// fn.name = "John";
// fn.profile = function (y) {
// 	//Profile code goes here
// };
// console.dir(fn);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// var myObject = new Map();
// myObject.set("z", 1);
// myObject.set("@", 2);
// myObject.set("b", 3);
// for (var [key, value] of myObject) {
// 	console.log(key, value);
// }

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// obj = {
// 	name: 123,
// };

// const ob1 = { a: 3 };
// const ob2 = { b: 6 };

// obj[ob1] = 123;
// obj[ob2] = 456;

// /*
// dynamic index are converted to String
// ob1.toString() -> [object Object]

// when we do obj[ob1] = 123;
// obj = {
//   name: 123,
//   [object Object]: 123
// }

// when we do obj[ob2] = 456, same property has been referenced
// obj = {
//   name: 123,
//   [object Object]: 456
// }
// */

// console.log(ob1.toString());
// console.log(obj[ob1]); //obj.[object Object] which is 456

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// class MyEventTarget {
// 	constructor() {
// 		this.listeners = {};
// 	}

// 	addEventListener(event, callback) {
// 		if (!this.listeners[event]) {
// 			this.listeners[event] = [];
// 		}
// 		this.listeners[event].push(callback);
// 	}

// 	removeEventListener(event, callback) {
// 		if (!this.listeners[event]) return;
// 		this.listeners[event] = this.listeners[event].filter(
// 			(listener) => listener !== callback
// 		);
// 	}

// 	dispatchEvent(event) {
// 		if (!this.listeners[event]) return;
// 		for (const callback of this.listeners[event]) {
// 			callback();
// 		}
// 	}
// }

// // Example usage
// const target = new MyEventTarget();
// const logHello = () => console.log("hello");
// const logWorld = () => console.log("world");
// const logHello2 = () => console.log("log 2");

// target.addEventListener("hello", logHello);
// target.addEventListener("hello", logHello2);
// target.addEventListener("world", logWorld);

// target.dispatchEvent("hello"); // hello, log 2
// target.dispatchEvent("world"); // world

// target.removeEventListener("hello", logHello);
// target.dispatchEvent("hello"); // log 2
// target.dispatchEvent("world"); // world

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// function sum(initialValue) {
// 	let total = initialValue;

// 	function adder(nextValue) {
// 		if (nextValue === undefined) return total;
// 		total += nextValue;
// 		return adder;
// 	}

// 	return adder;
// }

// // Example usage
// console.log(sum(1)(2)()); // Output: 3
// console.log(sum(5)(10)(15)()); // Output: 30
// console.log(sum(0)()); // Output: 0
