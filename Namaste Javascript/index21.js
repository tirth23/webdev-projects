// /* Prototype is object that has methods and properties that gets attach to objects
// It is a mechanism by which objects inherit properties and methods from other objects

// prototype inheritance means once object trying to access property of another object
// when we print an object, it will print the object's properties and methods
// and it will attach below key value in the object
// [[Prototype]]: SomeObject;

// SomeObject here is protoype

// it will have default properties and methods that JS provides for object
// it is a reference to the object.Prototype  */

// let newObj = {
// 	name: "Tirth",
// };
// console.log(`hello ${JSON.stringify(newObj)}`);
// console.log(newObj);
// console.log(newObj.__proto__);
// /* To access [[Prototype]] properties and methods we need to use __proto__ key */
// console.log(Object.prototype);
// /* same as above */
// console.log(newObj.toString());
// console.log(newObj.__proto__.toString());
// /* toString() is not in newObj but it is present in Object.prototype */

/* --------------------------------------------------------------------------------------------------------------------- */

// let myobj = {
// 	name: "Tirth",
// 	age: 27,
// 	getIntro: function () {
// 		console.log(this.name + " " + this.age);
// 	},
// };

// /* myobj.__proto__ pointing to Object.prototype or myobj.__proto__ is a reference to Object.prototype */
// console.log(myobj.__proto__);
// console.log(Object.prototype);

// console.log(myobj.__proto__.__proto__);

/* ----------------------------------------------------------------------------------------------------------------------- */

// let myobj = {
// 	name: "Tirth",
// 	age: 27,
// 	getIntro: function () {
// 		console.log(this.name + " " + this.age);
// 	},
// };

// let obj1 = {
// 	name: "patel",
// };

// /* prototypal inheritance */
// /* obj1 inheriting property of obj if not present ---- not best practice , use Object.create() method */
// obj1.__proto__ = myobj;
// console.log(obj1);
// console.log(obj1.__proto__);
// /* obj1.__proto__ is pointing to myobj */
// console.log(obj1.name, obj1.age);
// obj1.getIntro();

// let obj2 = {
// 	newkey: "new value",
// };

// obj1 = {
// 	...obj1,
// 	__proto__: obj2,
// };
// console.log(obj1);

// const animal = {
// 	eats: true,
// 	sleep: true,
// 	walk() {
// 		console.log("the animal walk");
// 	},
// };
// console.log(animal);
// const herbivore = {
// 	eatsMeat: "naah",
// 	__proto__: animal,
// };
// const carnivore = {
// 	eatsMeat: "yes",
// 	__proto__: animal,
// };
// const rabbit = {
// 	canJump: true,
// 	__proto__: herbivore,
// };
// const tiger = {
// 	canKill: true,
// 	__proto__: carnivore,
// };
// console.log(rabbit);
// console.log(rabbit.eatsMeat);
// console.log(tiger.eatsMeat);
// console.log(rabbit.dance);
// console.log(rabbit.__proto__.__proto__.__proto__.__proto__);

// console.log(Object.keys(rabbit));
// /* for...in return all keys including prototype */
// for (let key in rabbit) {
// 	console.log(key);
// }
// for (let key in rabbit) {
// 	if (rabbit.hasOwnProperty(key)) {
// 		console.log(key);
// 	}
// }

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* Same above concepts works with variables, arrays and functions
// variables, arrays and functions are objects in JS and every object in js has prototype
// and every object have default properties and methods
// that can be accessed by using __proto__ key or with . operator */

// let arry = ["Tirth", "Patel"];

// console.log(arry);
// console.log(arry.length);
// /* arry.__proto__ or [[Prototype]]: Array(0) will have length property defined in it */

// console.log(arry.__proto__);
// /* this is the object where js engine is putting all default properties and methods */
// console.log(Array.prototype);
// /* same as Array.__proto__ or [[Prototype]]: Array(0) */

// console.log(arry.__proto__.__proto__);
// console.log(Array.prototype.__proto__);
// console.log(Object.prototype);

// console.log(arry.__proto__.__proto__.__proto__);
// /* this is called prototype chain and it ends with null */

/* ----------------------------------------------------------------------------------------------------------------------- */

// function func() {}

// console.log(func);

// console.log(func.__proto__);
// console.log(func.prototype);
// console.log(func.prototype.constructor === func);
// console.log(Function.prototype);
// console.log(Function.prototype.constructor);

// console.log(func.__proto__.__proto__);
// console.log(Object.prototype);

// function BetterUser(name) {
// 	this.name = name;
// }
// BetterUser.prototype.msg = function () {
// 	console.log(`Hello ${this.name}!`);
// };
// const user3 = new BetterUser("Shubman");
// const user4 = new BetterUser("Rohit");
// console.log(user3.msg === user4.msg);
// /* Defining methods on the prototype allows all instances to share
// a single copy of the method. This not only saves memory but can
// also lead to better runtime performance because there is less
// overhead in creating each new object. All objects created from
// the BetterUser constructor share the same msg function, making
// it more memory-efficient.
// Defining methods on the prototype is generally a
// better practice in JavaScript when creating constructor functions
// that produce multiple instances.
// */

// function Animal() {
// 	this.eats = true;
// }
// console.log(Animal.prototype.constructor);
// const rabbit = new Animal();
// console.log(rabbit instanceof Animal);
// /* rabbit has constructor property which is reference to Animal */

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);
// const dog = new Dog();
// console.log(dog);
// console.log(dog.constructor.name);
// Dog.prototype.constructor = Dog;
// console.log(dog.constructor.name);

// function Rabbit() {}
// Rabbit.prototype = {
// 	eats: true,
// };
// console.log(Rabbit);
// let rabbit1 = new Rabbit();
// Rabbit.prototype = {};
// console.log(rabbit1.eats);

// const animal = {
// 	jumps: null,
// };
// const rabbit = {
// 	__proto__: animal,
// 	jumps: true,
// };
// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete animal.jumps;
// console.log(rabbit.jumps);

/* ----------------------------------------------------------------------------------------------------------------------- */

// function User(name) {
// 	this.name = name;
// 	this.msg = function () {
// 		console.log(`Hello ${this.name}!`);
// 	};
// }
// const user1 = new User("Kohli");
// const user2 = new User("Dhoni");
// console.log(user1.msg === user2.msg);
// /* When methods are added directly to the constructor, each
// instance of the object gets its own copy of the method, leading
// to higher memory usage */

// const obj = {
//   name: "Tirth",
// }
// console.log(obj.toString());
// obj.__proto__ = null;     // breaks the prototype chain
// console.log(obj.toString());

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* Primitive Data Types */
// /*
// new keyword will attach array or string prototype to the object
// During runtime new keyword will create an object and return it which has its attached prototype
// */

// const arr1 = [1, 2, 3]; // new Array(1, 2, 3); -> Array Prototype
// console.log(arr1.__proto__);

// const str1 = "Hello"; // new String("Hello"); -> String Prototype
// console.log(str1.__proto__);
// console.log(str1.toUpperCase());

// const num = 1.22432; // new Number(1.22432); -> Number Prototype
// console.log(num.__proto__);
// console.log(num.toFixed(2));

// const val = true; // new Boolean(true); -> Boolean Prototype
// console.log(val.__proto__);

// console.log(typeof val);
// console.log(typeof num);
// console.log(typeof str1);
// console.log(typeof arr1);

// String.prototype.carzyMethod = function (pattern) {
// 	return this.split("").join(pattern);
// };
// console.log("Hello".carzyMethod("@"));
// console.log("Hello".carzyMethod("##"));

/* ----------------------------------------------------------------------------------------------------------------------- */

// const parent = {
// 	name: "Tirth",
// 	getIntro: function () {
// 		console.log("Parent Object");
// 	},
// };
// /* Object.create() method creates a new object, using an existing object
// as a prototype of the new created object */
// const child = Object.create(parent); //child prototype -> parent
// console.log(child);
// child.getIntro();
// /* child is a refernce to parent object */
// /* child object will inherit all the properties and methods of parent object */
// parent.newProperty = "new property";
// child.childProperty = "child property";
// console.log(child);
// console.log(child.toString());
// /* js engine will check if the property  toString() is present in child object or not
// if not present then it will check [[Prototype]] key of child which is reference to parent object
// if not present then it will check [[Prototype]] key of parent which is reference to Object.prototype
// if not present then it will throw an undefined for property and error for method
// This is called prototypal inheritance and moving up prototype chain */

// const carPrototype = {
// 	displayInfo: function () {
// 		return `This is a ${this.year} ${this.model}.`;
// 	},
// };
// const car1 = Object.create(carPrototype);
// car1.model = "Toyota Camry";
// car1.year = 2021;
// const car2 = Object.create(carPrototype);
// car2.model = "Ford Mustang";
// car2.year = 2023;
// console.log(car1.displayInfo()); // "This is a 2021 Toyota Camry."
// console.log(car2.displayInfo()); // "This is a 2023 Ford Mustang."

/* ----------------------------------------------------------------------------------------------------------------------- */
