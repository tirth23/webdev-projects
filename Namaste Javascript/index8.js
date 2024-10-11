// /*
// callback functions: A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
// */

// setTimeout(function () {
// 	console.log("timer");
// }, 5000);
// function x(z) {
// 	console.log("x");
// 	z();
// }
// x(function y() {
// 	console.log("y");
// });

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let count = 0;
// document
// 	.getElementById("introduceButton")
// 	.addEventListener("click", function xyz() {
// 		console.log("Buttom Clicked", ++count);
// 	});

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function attachEventListeners() {
// 	let count = 0;
// 	document
// 		.getElementById("introduceButton")
// 		.addEventListener("click", function xyz() {
// 			console.log("Buttom Clicked", ++count);
// 		});
// }
// /* xyz() will form closure with  its outer env and noone can change count from outside */
// attachEventListeners();




