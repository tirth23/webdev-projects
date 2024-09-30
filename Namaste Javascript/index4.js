// {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 100;
// {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(a);

// let b = 100;
// {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(b);

// const c = 200;
// {
// 	var a = 10;
// 	let b = 20;
// 	const c = 30;
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }
// console.log(c);

// var a = 10;
// {
// 	var a = 20;
// }

// let a = 10;
// {
// 	let a = 20;
// }

// var a = 10;
// {
// 	let a = 20;
// }

// let a = 10;    //script
// {
// 	var a = 20;  //global
// }

// let a = 10;
// function hello() {
// 	var a = 20;
// 	{
// 		let a = 30;
//     {
//       let a = 40;
//     }
// 	}
// }
// hello();

// const a = 100;
// {
// 	const a = 200;
// 	{
// 		const a = 300;
// 		console.log(a + " innnermost");
// 	}
// 	console.log(a + " innner");
// }
// console.log(a + " outerrmost");

// const a = 100;
// {
// 	// const a = 200;
// 	{
// 		console.log(a + " innnermost");
// 	}
// 	console.log(a + " innner");
// }
// console.log(a + " outerrmost");

// function print() {
// 	var x = 10;
// 	let y = 20;
//   console.log(window);
// 	console.log(window.x);
// 	console.log(window.y);
// }
// print();

// var x = 21;
// var compute = function () {
// 	console.log(x);
// 	var x = 20;
// };
// compute();

// /* TDZ ends once the computer fully assigns a value to bestFood */
// {
//   // bestFood's TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   console.log(bestFood); // returns ReferenceError because bestFood's TDZ continues here
//   // bestFood's TDZ continues here
//   let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
//   // bestFood's TDZ does not exist here
// }

// /* to access a variable outside the temporal dead zone */
// {
//   // TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
//   console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood's TDZ does not exist here
//   // bestFood's TDZ does not exist here
// }

// /* An uninitialized let variable defaults to undefined outside the TDZ */
// {
//   // TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   let bestFood; // bestFood's TDZ ends here
//   console.log(bestFood); // returns undefined because bestFood's TDZ does not exist here
//   bestFood = "Vegetable Fried Rice"; // bestFood's TDZ does not exist here
//   console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood's TDZ does not exist here
// }