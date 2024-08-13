// /* prototype inheritance means once object trying to access property of another object
// when we print an object, it will print the object's properties and methods 
// and it will attach below key value in the object
// [[Prototype]]: Object; 

// it will have default properties and methods that JS provides for object 
// it is a reference to the object.Prototype 
//  */
// let newObj = {
//     name: "Tirth",
// }
// console.log(newObj);
// console.log(newObj.__proto__);
// /* To access [[Prototype]] properties and methods we need to use __proto__ key */
// console.log(Object.prototype);
// /* same as above */
// console.log(newObj.toString());
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

// const parent = {
//     name: "Tirth",
//     getIntro: function () {
//         console.log("Parent Object");
//     }
// }
// /* Object.create() method creates a new object, using an existing object
// as a prototype of the new created object */
// const child = Object.create(parent);
// console.log(child);
// child.getIntro();
// /* child is a refernce to parent object */
// /* child object will inherit all the properties and methods of parent object */
// parent.newProperty = "new property";
// console.log(child);
// console.log(child.toString());
// /* js engine will check if the property  toString() is present in child object or not
// if not present then it will check [[Prototype]] key of child which is reference to parent object
// if not present then it will check [[Prototype]] key of parent which is reference to Object.prototype
// if not present then it will throw an undefined for property and error for method
// This is called prototypal inheritance and moving up prototype chain */

/* ----------------------------------------------------------------------------------------------------------------------- */

// let myobj = {
// 	name: "Tirth",
// 	age: 27,
// 	getIntro: function () {
// 		console.log(this.name + " " + this.age);
// 	},
// };

// let obj1 = {
//     name: "patel"
// }

// /* prototypal inheritance */
// /* obj1 inheriting property of obj if not present ---- not best practice , use Object.create() method */
// obj1.__proto__ = myobj;
// console.log(obj1);
// console.log(obj1.__proto__);
// /* obj1.__proto__ is pointing to myobj */
// console.log(obj1.name, obj1.age);
// obj1.getIntro();

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

// function fun() {}

// console.log(fun.__proto__);
// console.log(Function.prototype);

// console.log(fun.__proto__.__proto__);
// console.log(Object.prototype);

