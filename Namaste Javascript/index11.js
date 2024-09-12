const arr = [10, 5, 49, 40, 25];

/* MAP --- map method is used when we want transformation of whole array & returns arrays */
/* array.map(function(currentValue, index, arr), thisValue) */

/* x is each value in arr */
// function double(x, index, arr) {
// 	return x * 2 * this;
// }

// const output = arr.map(double, 7);
// console.log(output);

// console.log(arr.map(function triple(x) {
//     return x * 3;
// }));
// console.log(arr.map((x) => x * 3));

// const sampleObj = {
// 	factor: 10,
// };
// const multiplier = {
// 	factor: 2,
// 	multiply: function (currentValue) {
// 		return currentValue * this.factor;
// 	},
// };
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(multiplier.multiply, multiplier);
// const doubled2 = numbers.map(multiplier.multiply, sampleObj);
// console.log(doubled);
// console.log(doubled2);

/* Custom Map function */
// Array.prototype.customMap = function (callback, thisValue) {
// 	const resultArray = [];
// 	for (let i = 0; i < this.length; i++) {
// 		// Apply the callback to each element
// 		// Use call to set this context if provided
// 		resultArray.push(callback.call(thisValue, this[i], i, this));
// 	}
// 	return resultArray;
// };

// const multiplier = {
// 	factor: 3,
// };
// const tripled = arr.customMap(function (currentValue) {
// 	return currentValue * this.factor;
// }, multiplier);
// console.log(tripled);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* FILTER --- filter is used when we want to filter the array to obtain required value & returns filtered array*/
/* array.filter(function(currentValue, index, arr), thisValue) */

/* filter odd value */
// function isOdd(x) {
// 	return x % 2 !== 0;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// // return values > 4
// const output2 = arr.filter(function isGreat(x) {
// 	return x > 4;
// });
// console.log(output2);

// const output1 = arr.filter((x) => x > 4);
// console.log(output1);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* REDUCE --- reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc) */
/* array.reduce(function(total, currentValue, currentIndex, arr), initialValue) */

/* sum of arr */
// function findSum(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum = sum + arr[i];
// 	}
// 	return sum;
// }
// console.log(findSum(arr));

/*
reduce(function (accumulator, current) {}, init) 
accumulator = stores result
current = current value in arr while iterating
init = initial value of accumulator before iterating
*/
// console.log(
// 	arr.reduce(function (acc, curr) {
// 		acc = acc + curr;
// 		return acc;
// 	}, 0)
// );

/* max in arr */
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function (max, curr) {
//     if(curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0);
// console.log(output);

/* if we are supplying default initial value then acc will get that value and 
curr will get arr[0] */
// console.log(arr.reduce((acc, curr, index) => {
//   console.log(index, acc, curr);
//   acc = acc + curr;
//   return acc;
// }, arr[0]));

// console.log(arr.reduce((acc, curr, index) => {
//   console.log(index, acc, curr);
//   acc = acc + curr;
//   return acc;
// }));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* Sort: arr.sort(callback); */

/* bydefault lexographical short numbers converted to string and utf-16 is compared
10 5 -> unicode(1) is U+0031 and unicode(5) is U+0035 -> U+0031 - U+0035 -> 1 comes before 5 -> [10, 5] 
if same value then second character is check and so on....
10, 25, 49, 40, 5 -> 10 25 40 49 5 (1 < 2 < 4 {0 < 9} < 5)
*/
// arr.sort();
// console.log(arr);

/* 
In custom sort a & b is picked randomly from array and compared
returned 
value > 0, in original array b comes before a [b, a]
value < 0, in original array a comes before b [a, b]
value = 0, in original array as it is

a = 40, b = 10 -> a - b -> 30 > 0 -> [10, 40]
a = 5, b = 10 -> a - b -> -5 < 0 -> [5, 10] 
*/
// arr.sort((a, b) => {
// 	console.log(a, b);
// 	return a - b;
// });
// console.log(arr);

/* 
find largest number formed by combination of elements 

  a = 5, b = 10
  num2(ba) - num1(ab) = 105 - 510 < 0 -> [a, b] -> [5, 10]
  
  a = 10, b = 5
  num2(ba) - num1(ab) = 510 - 105 > 0 -> [b, a] -> [5, 10]

*/
// arr.sort((a, b) => {
// 	console.log(a, b);
// 	const num1 = "" + a + b;
// 	const num2 = "" + b + a;
// 	return num2 - num1;
// });
// console.log(arr);
