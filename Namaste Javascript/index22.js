// /*
// destructuring: convenient way to extract values from arrays or properties from objects and
// assign them to variables in a more readable and concise manner
// */

// function getsumsub(num1, num2) {
// 	return [num1 + num2, num1 - num2];
// }
// const [add_res, sub_res] = getsumsub(10, 20);
// console.log("add:" + add_res);
// console.log("sub:" + sub_res);

// const [x, y, z] = [1, 2, 3];
// console.log(x, y, z);

// const [a, , c] = [1, 2, 3, 4];
// console.log(a, c);

// const [q, w] = [1, 2, 3];
// console.log(q, w);

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* rest operator used to collect rest of values into array */
// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(rest);

// function myBio(one, two, ...rest) {
// 	return rest;
// }
// console.log(myBio(1, 2, 3, 4, 5, 6));

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* spread operator used to spread values of array */
// const one = [1, 2, 3];
// const two = [4, 5, 6];
// console.log([...one, ...two])
// console.log(0, ...one, 10);

// const ten = [1, 2, 3];
// const newten = [4, 5, 6];
// console.log([...ten, 9, 10, ...newten]);

// const three = [[6, 7]];
// console.log(2, ...three, 3);

// const name = "Tirth";
// console.log(...name);
// console.log([...name]);

// const one = [1, 2, 3];
// function xyz(a, b) {
// 	return a + b;
// }
// console.log(xyz(...one));

// /* converted to string */
// console.log([1, 2, 3] + "v");

// const myName = "Tirth Patel";
// function spellName(a, b, c) {
// 	return a + b + c;
// }
// console.log(...myName[3]);
// console.log({ ...myName });
// console.log([...myName]);
// console.log(spellName(...myName));
// console.log(spellName(...myName[3]));
// console.log(spellName([...myName]));
// console.log(spellName({ ...myName }));

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* same reference - changes done in original reflect in copy */
// const four = [1, [4, 5], 3]
// const five = four;
// four.pop();
// console.log(four);
// console.log(five);

// /* shallow copy - changes done in original does not reflect in copy but does shallow copy of first level elements */
// const original = [1, [4, 5], 3]
// const copy = [...original];
// original.pop();

// console.log(original);
// console.log(copy);

// original[1][0] = 10;
// console.log(copy);

// /* deep copy */
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
// ingredientsList[1].list = null;
// console.log(ingredientsList);
// console.log(ingredientsListDeepCopy);

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* properties can be in any sequence but have same name - destructuring*/
// const { a, c, b } = { a: "A", b: "B", c: "C" };
// console.log(a, b, c);

// /* const {namefromObj: newName} = {namefromObj: value} */
// const { d: xp, f: e, e: f } = { d: "D", e: "E", f: "F" };
// console.log(xp, e, f);

// const { firstName = "Tobi", website = "CodeSweetly" } = {
// 	firstName: "Oluwatobi",
// 	xi: "h",
// };
// console.log(firstName, website);

// const vehicleOne = {
// 	brand: "Ford",
// 	model: "Mustang",
// 	type: "car",
// 	year: 2021,
// 	color: "red",
// };
// myVehicle(vehicleOne);
// function myVehicle({ type, color, brand, model }) {
// 	console.log(
// 		"My " + type + " is a " + color + " " + brand + " " + model + "."
// 	);
// }

// const vehicleAnother = {
// 	brand: "Ford",
// 	model: "Mustang",
// 	type: "car",
// 	year: 2021,
// 	color: "red",
// 	registration: {
// 		city: "Houston",
// 		state: "Texas",
// 		country: "USA",
// 	},
// };
// myVehicleAnother(vehicleAnother);
// function myVehicleAnother({ model, registration: { state } }) {
// 	console.log("My " + model + " is registered in " + state + ".");
// }

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* rest operator used to collect rest of values into object */
// const { y, x, ...rest } = { x: "X", y: "Y", z: "Z", m: "M" };
// console.log(x, y, rest);

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* spread operator used to spread values of object */
// const myNames = ["Oluwatobi", "Sofela"];
// const gh = ["hj", "kl"];
// const bio = { runs: "codesweetly.com", ...myNames };
// console.log(bio);

// /* only later one array can be included */
// const bio3 = { ...gh, runs: "codesweetly.com", ...myNames };
// console.log(bio3);

// const bio4 = { ...myNames, runs: "codesweetly.com", ...gh };
// console.log(bio4);

// const myName1 = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio1 = { ...myName1, website: "codesweetly.com" };
// console.log(bio1);

// /* all objects can be spread but later one values overrides all */
// const myName2 = { firstName: "Tobi", lastName: "Sofela" };
// const someOther = { firstName: "Tirth", another: "object" };
// const bio2 = {
// 	...myName2,
// 	firstName: "Oluwatobi",
// 	website: "codesweetly.com",
// 	...someOther,
// };
// console.log(bio2);

// const myVehicle = {
// 	brand: "Ford",
// 	model: "Mustang",
// 	color: "red",
// };
// const updateMyVehicle = {
// 	type: "car",
// 	year: 2021,
// 	color: "yellow",
// };
// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
// console.log(myUpdatedVehicle);

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* same reference - changes done in original reflect in copy know as shallow copy */
// const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio = myName;
// myName.firstName = "Tobi";
// console.log(myName);
// console.log(bio);

// /* shallow copy - changes done in original does not reflect in copy till first level */
// const myName1 = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio1 = { ...myName1 };
// myName1.firstName = "Tobi";
// console.log(myName1);
// console.log(bio1);

// /* here fullName is a reference to same object in both objects
// so changing fullName in one object will change fullName in other object
// ... does shallow copy
// Shallow Copying: When used to copy objects or arrays, the spread operator performs a shallow copy.
// This means that it only creates copies of the top-level elements, not nested objects or arrays.
// shallow copy with ... helpful for change in top level of object and saves time as it doesn't have to check nested object
// */
// const myName2 = {
// 	fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
// };
// const bio2 = { ...myName2 };
// myName2.fullName.firstName = "Tobi";
// console.log(myName2);
// console.log(bio2);

// /* deep copy  */
// const myName3 = {
// 	fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
// };
// const bio3 = JSON.parse(JSON.stringify(myName3));
// myName3.fullName.firstName = "Tobi";
// console.log(myName3);
// console.log(bio3);

/* ----------------------------------------------------------------------------------------------------------------------- */

// /* polyfill of deepcopy */
// function deepCopy(obj) {
// 	if (typeof obj !== "object" || obj === null) {
// 		return obj;
// 	}
// 	if (obj instanceof Array) {
// 		let copy = [];
// 		for (let i = 0; i < obj.length; i++) {
// 			copy[i] = deepCopy(obj[i]);
// 		}
// 		return copy;
// 	}
// 	if (obj instanceof Function) {
// 		return obj.bind({});
// 	}
// 	if (obj instanceof Object) {
// 		const copy = {};
// 		for (let key in obj) {
// 			copy[key] = deepCopy(obj[key]);
// 		}
// 		return copy;
// 	}
// 	throw new Error("Unable to copy object");
// }
// const myObj = {
// 	name: "Oluwatobi",
// 	age: 30,
// 	address: {
// 		street: "123 Main St",
// 		city: "Anytown",
// 		state: "CA",
// 		zip: 12345,
// 	},
// };
// const myObjCopy = deepCopy(myObj);
// myObjCopy.address.city = "changed";
// console.log(myObjCopy);
// console.log(myObj);

/* ----------------------------------------------------------------------------------------------------------------------- */

// const target = { a: 1, b: 2, nested: { rank: "first" } };
// const source = { b: 4, c: 5, nested: { rank: "first" } };

// // shallow copy similar to spread operator
// const returnedTarget = Object.assign(target, source);
// console.log(returnedTarget);
// console.log(target);
// console.log(returnedTarget === target);

// target.b = 10;
// target.nested.rank = "Changed";
// console.log(target);
// console.log(source);

/* ----------------------------------------------------------------------------------------------------------------------- */

// const target = { a: 1, b: 2, nested: { rank: "first" } };
// const source = { b: 4, c: 5, nested: { rank: "first" } };

// console.log({...target, ...source});

/* ----------------------------------------------------------------------------------------------------------------------- */

// const target = { a: 1, b: 2, nested: { rank: "first" } };
// const source = { b: 4, c: 5, nested: { rank: "first" } };

// const deepCopy = structuredClone(source);

/* ----------------------------------------------------------------------------------------------------------------------- */