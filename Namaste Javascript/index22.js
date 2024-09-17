// /* rest operator used to collect rest of values into array,
// always use at end to collect rest of values - destructuring*/
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

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(rest);

// function myBio(one, two, ...rest) {
// 	return rest;
// }
// console.log(myBio(1, 2, 3, 4, 5, 6));

// /* spread operator used to spread values of array */
// const one = [1, 2, 3];
// const two = [4, 5, 6];
// console.log([...one, ...two])
// console.log(0, ...one, 10);

// const three = [[6, 7]];
// console.log(2, ...three, 3);

// /* same reference - changes done in original reflect in copy */
// const four = [1, 2, 3]
// const five = four;
// four.pop();
// console.log(four);
// console.log(five);

/* new copy - changes done in original does not reflect in copy */
// const four = [1, 2, 3]
// const five = [...four];
// four.pop();
// console.log(four);
// console.log(five);

// const name = "Tirth";
// console.log(...name);
// console.log([...name]);

// const one = [1, 2, 3];
// function xyz(a, b) {
//     return a + b;
// }
// console.log(xyz(...one));

// const myName = "Oluwatobi Sofela";
// function spellName(a, b, c) {
//     return a + b + c;
// }
// console.log([1, 2, 3]);
// console.log([1, 2, 3] + "v");
// console.log(spellName(...myName));
// console.log(...myName[3]);
// console.log(spellName(...myName[3]));
// console.log(spellName([...myName]));
// console.log(spellName({ ...myName }));
// console.log({ ...myName });

// // deep copy
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

// /* rest operator used to collect rest of values into object,
// properties can be in any sequence but have same name - destructuring*/
// const { a, c, b } = { a: "A", b: "B", c: "C" };
// console.log(a, b, c);

// /* const {namefromObj: newName} = {namefromObj: value} */
// const { d: xp, f: e, e: f } = { d: "D", e: "E", f: "F" };
// console.log(xp, e, f);

// const { y, x, ...rest } = { x: "X", y: "Y", z: "Z", m: "M" };
// console.log(x, y, rest);

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

// const vehicleOne = {
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
// myVehicle(vehicleOne);
// function myVehicle({ model, registration: { state } }) {
// 	console.log("My " + model + " is registered in " + state + ".");
// }

/* spread operator used to spread values of object */
const myNames = ["Oluwatobi", "Sofela"];
const gh = ["hj", "kl"];
// const bio = {runs: "codesweetly.com", ...myNames };
/* only one array can be included by destructuring */
// const bio = { ...gh, runs: "codesweetly.com", ...myNames };
// const bio = { ...myNames, runs: "codesweetly.com", ...gh };
// console.log(bio);

// const myName1 = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio1 = { ...myName1, website: "codesweetly.com" };
// console.log(bio1);

// const myName2 = { firstName: "Tobi", lastName: "Sofela" };
// const bio2 = { ...myName2, firstName: "Oluwatobi", website: "codesweetly.com" };
// console.log(bio2);

/* same reference - changes done in original reflect in copy know as shallow copy */
// const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio = myName;
// myName.firstName = "Tobi";
// console.log(myName);
// console.log(bio);

/* new copy - changes done in original does not reflect in copy */
// const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
// const bio = { ...myName };
// myName.firstName = "Tobi";
// console.log(myName);
// console.log(bio);

// const myName1 = {
// 	fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
// };
// const bio1 = { ...myName1 };
// // myName1.fullName = "Tobi";
// console.log(myName1);
// console.log(bio1);

/* here fullName is a reference to same object in both objects
so changing fullName in one object will change fullName in other object
... does shallow copy
Shallow Copying: When used to copy objects or arrays, the spread operator performs a shallow copy.
This means that it only creates copies of the top-level elements, not nested objects or arrays. */
// const myName2 = {
// 	fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
// };
// const bio2 = { ...myName2 };
// myName2.fullName.firstName = "Tobi";
// console.log(myName2);
// console.log(bio2);

// /* deep copy  */
// const myName3 = {
//     fullName: { firstName: "Oluwatobi", lastName: "Sofela" }
// };
// const bio3 = JSON.parse(JSON.stringify(myName3));
// myName3.fullName.firstName = "Tobi";
// console.log(myName3);
// console.log(bio3);

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
