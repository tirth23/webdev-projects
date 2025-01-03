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

// var myObject = new Map();
// myObject.set("z", 1);
// myObject.set("@", 2);
// myObject.set("b", 3);
// for (var [key, value] of myObject) {
// 	console.log(key, value);
// }

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// console.log(String.fromCodePoint(65, 66))
// // AB

// console.log("AB".codePointAt(0));
// // 65
