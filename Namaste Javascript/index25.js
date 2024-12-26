/* 
Class Constructor Function: The class itself acts as a constructor function.

Methods on Prototypes: Any methods defined within the class (like sayHello in the example) are added to the prototype, 
not to each instance. This is exactly what we do manually with prototypes, but the class syntax does it automatically.

Strict Mode: All code inside a class is automatically executed in strict mode, even if you don’t declare 'use strict'.

Non-Callable: Unlike regular functions, classes cannot be called without the new keyword. 
If you try to call a class like a regular function, JavaScript will throw an error. 
*/

/* 
JavaScript uses prototypes to allow objects to inherit properties and methods from other objects. 
When you create a class, JavaScript sets up the prototype property on the constructor function and links 
instances of the class to this prototype.

When you create an instance (const person = new Person('Alice')), JavaScript links person.__proto__ to Person.prototype.
Methods defined in the class, like sayHello, are stored on Person.prototype, so all instances can access them.
This linking of __proto__ to prototype is how JavaScript achieves inheritance, and it's the same mechanism 
used with functions and objects. 
*/

/* ----------------------------------------------------------------------------------------------------------------- */

// /* Person is a constructor function.
// sayHello is a method added to Person's prototype, which any instance of Person can access. */
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const person = new Person('Alice');
// person.sayHello();

/* ----------------------------------------------------------------------------------------------------------------- */

// /*
// Class in JavaScript, it's just syntactic sugar over the older function-based approach to creating objects and prototypes.
// This means that a class is really a function with some extra features that make it easier to create objects,
// use inheritance, and manage prototypes.

// JavaScript interprets this as:

// Creates a constructor function called Person
// Adds a constructor method to Person.prototype that initializes the instance.
// Adds a sayHello method to Person.prototype
// */
// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayHello() {
// 		console.log(`Hello, my name is ${this.name}`);
// 	}
// }

// const person = new Person("Alice");
// person.sayHello();

/* ----------------------------------------------------------------------------------------------------------------- */

// function Pizza(toppings, size, crustType) {
// 	this.toppings = toppings;
// 	this.size = size;
// 	this.crustType = crustType;
// 	this.describe = function () {
// 		console.log(
// 			`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${
// 				this.crustType
// 			} crust.`
// 		);
// 	};
// }
// const customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
// const customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
// customerOrder1.describe();
// customerOrder2.describe();

/* ----------------------------------------------------------------------------------------------------------------- */

// class Pizza {
// 	static totalPizzasMade = 0; // Static property to keep count
// 	#size; //private members can't be accessed directly outside class
// 	constructor(toppings, size, crustType) {
// 		this.toppings = toppings;
// 		this.#size = size;
// 		this.crustType = crustType;
// 		Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
// 	}
// 	describe() {
// 		console.log(
// 			`A ${this.#size} pizza with ${this.toppings.join(", ")} on a ${
// 				this.crustType
// 			} crust.`
// 		);
// 	}
// 	// Static method
// 	static calculateTotalPizzasMade() {
// 		console.log(`Total pizzas made: ${Pizza.totalPizzasMade}`);
// 	}
// }
// // var customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
// // var customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
// // customerOrder1.describe();
// // customerOrder2.describe();
// // //can't access private members outside class -> undefined
// // console.log(customerOrder1.size);

// /* Classical Inheritance doesn't even exists in JS, Everything is a paradigm of Prototypal Inheritance */
// class StuffedCrustPizza extends Pizza {
// 	constructor(toppings, size, crust, stuffingType) {
// 		super(toppings, size, crust); // Call the parent class constructor with super
// 		this.stuffingType = stuffingType; // New property specific to StuffedCrustPizza
// 	}
// 	//overrides parent crustType
// 	crustType = "Forest";
// 	describeStuffing() {
// 		console.log(
// 			`This pizza has ${this.stuffingType} stuffing in the crust and ${this.toppings}, ${this.crustType}`
// 		);
// 	}
// 	// Overriding the describe method
// 	describe() {
// 		super.describe(); // Call the describe method from the parent class
// 		this.describeStuffing(); // Additional description for the stuffing
// 	}
// }
// const specialOrder = new StuffedCrustPizza(
// 	["cheese", "mushrooms"],
// 	"large",
// 	"thick",
// 	"cheese and tikki"
// );
// specialOrder.describe();
// Pizza.calculateTotalPizzasMade();

/* ----------------------------------------------------------------------------------------------------------------- */

// /* static methods are part of class and not object */
// class MyClass {
// 	static myStaticMethod() {
// 		console.log("This is a static method.");
// 	}
// }
// MyClass.myStaticMethod();
// const ob = new MyClass();
// ob.myStaticMethod();

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
