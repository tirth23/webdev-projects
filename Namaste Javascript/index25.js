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

/* ---------------------------------------------------------------------------------------------------------- */

// class Pizza {
// 	static totalPizzasMade = 0; // Static property to keep count
//   #size; //private members can't be accessed directly outside class
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
// var customerOrder1 = new Pizza(["cheese", "pepperoni"], "medium", "thin");
// var customerOrder2 = new Pizza(["veggies", "pepperoni"], "small", "thick");
// customerOrder1.describe();
// customerOrder2.describe();
// //can't access private members outside class -> undefined
// console.log(customerOrder1.size);

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

/* ---------------------------------------------------------------------------------------------------------- */

/* static methods are part of class and not object */
// class MyClass {
// 	static myStaticMethod() {
// 		console.log("This is a static method.");
// 	}
// }
// MyClass.myStaticMethod();
// const ob = new MyClass();
