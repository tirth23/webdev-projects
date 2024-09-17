// const users = [
// 	{ firstName: "Tirth", lastName: "Patel", age: 25 },
// 	{ firstName: "Rahul", lastName: "Kadva", age: 90 },
// 	{ firstName: "Samsung", lastName: "Korea", age: 22 },
// 	{ firstName: "Akshay", lastName: "Saini", age: 25 },
// ];

// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

// const output1 = users.reduce(function (acc, curr) {
// 	if (acc[curr.age]) {
// 		acc[curr.age] = ++acc[curr.age];
// 	} else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});
// console.log(output1);

// const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output3);

// const output4 = users.reduce(function (acc, curr) {
// 	if (curr.age < 30) {
// 		acc.push(curr.firstName);
// 	}
// 	return acc;
// }, []);
// console.log(output4);

// const us = [
//     { firstName: "Tirth", lastName: "Patel", 1: 25 },
//     { firstName: "Rahul", lastName: "Kadva", 2: 90 },
//     { firstName: "Samsung", lastName: "Korea", 3: 22 },
//     { firstName: "Akshay", lastName: "Saini", 4: 25 }
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

// /* reverse string */
// console.log("Hello".split("").reverse().join(''));

// /* captilize first letter */
// console.log("hello world".split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' '));

// /* remove duplicate */
// console.log([...new Set("aaabbbccc")].join(''));
