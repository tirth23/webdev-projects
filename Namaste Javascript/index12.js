// const users = [
// 	{ firstName: "Tirth", lastName: "Patel", age: 25 },
// 	{ firstName: "Rahul", lastName: "Kadva", age: 90 },
// 	{ firstName: "Samsung", lastName: "Korea", age: 22 },
// 	{ firstName: "Akshay", lastName: "Saini", age: 25 },
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const output1 = users.reduce(function (acc, curr) {
// 	if (acc[curr.age]) {
// 		acc[curr.age] = ++acc[curr.age];
// 	} else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});
// console.log(output1);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output3);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const output4 = users.reduce(function (acc, curr) {
// 	if (curr.age < 30) {
// 		acc.push(curr.firstName);
// 	}
// 	return acc;
// }, []);
// console.log(output4);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const us = [
// 	{ firstName: "Tirth", lastName: "Patel", 1: 25 },
// 	{ firstName: "Rahul", lastName: "Kadva", 2: 90 },
// 	{ firstName: "Samsung", lastName: "Korea", 3: 22 },
// 	{ firstName: "Akshay", lastName: "Saini", 4: 25 },
// ];
// console.log(us[0].firstName);
// console.log(us[0]["firstName"]);
// const fname = "firstName";
// console.log(us[0][fname]);
// // console.log(us[0].1);  //syntax error
// console.log(us[0][1]);
// console.log(us[0]["1"]);
// const no1 = 1;
// console.log(us[0][no1]);
// const no = "1";
// console.log(us[0][no]);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* object key always have string/symbol, if else then it automatically tries to convert to String */
// const obj = {
// 	name: "JS",
// };

// const arr1 = ["name"];
// console.log(arr1.toString());

// /* obj[arr1] => obj[["name"]] => obj["name"], i.e., obj.name = "React" */
// obj[arr1] = "React";
// console.log(obj.name);
// console.log(obj[arr1]);
// console.log(obj["name"]);
// // console.log(obj[name]);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* reverse string */
// console.log("Hello".split("").reverse().join(''));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* captilize first letter */
// console.log(
// 	"hello world"
// 		.split(" ")
// 		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// 		.join(" ")
// );

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* remove duplicate */
// console.log(new Set("aaabbbccc"));
// console.log([...new Set("aaabbbccc")].join(''));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// if (!Array.prototype.sort) {
// 	Array.prototype.sort = function (compareFunction) {
// 		// If no compareFunction is provided, default to lexicographical order
// 		compareFunction =
// 			compareFunction ||
// 			function (a, b) {
// 				a = String(a);
// 				b = String(b);
// 				return a < b ? -1 : a > b ? 1 : 0;
// 			};

// 		// Simple insertion sort for demonstration
// 		for (let i = 1; i < this.length; i++) {
// 			let currentValue = this[i];
// 			let j = i - 1;

// 			while (j >= 0 && compareFunction(this[j], currentValue) > 0) {
// 				this[j + 1] = this[j];
// 				j--;
// 			}
// 			this[j + 1] = currentValue;
// 		}

// 		return this; // Return the sorted array
// 	};
// }

// // Example Usage
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// const words = ["banana", "apple", "cherry"];
// words.sort();
// console.log(words); // Output: ["apple", "banana", "cherry"]

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const obj = [
// 	{ name: "Tir", age: 30 },
// 	{ name: "Pat", age: 40 },
// 	{ name: "Tir", age: 30 },
// ];

// const uniqueObj = obj.reduce((acc, current) => {
// 	if (!acc.find((item) => JSON.stringify(item) === JSON.stringify(current))) {
// 		acc.push(current);
// 	}
// 	return acc;
// }, []);

// console.log(uniqueObj);
// Output: [ { name: 'Tir', age: 30 }, { name: 'Pat', age: 40 } ]

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const obj = [
// 	{ name: "Tir", age: 30 },
// 	{ name: "Pat", age: 40 },
// 	{ name: "Tir", age: 30 },
// ];

// const uniqueObj = Array.from(
// 	new Set(obj.map(JSON.stringify)) // Convert objects to JSON strings
// ).map(JSON.parse); // Convert them back to objects

// console.log(uniqueObj);
// // Output: [ { name: 'Tir', age: 30 }, { name: 'Pat', age: 40 } ]

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 180);

// console.log(found);
