// function x() {
// 	var i = 1;
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 3000); //will print after 3 sec
// }
// x();
// console.log("Namaste Javascript");

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function x() {
// 	var i = 1;
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 3000);
// 	console.log("Namaste Javascript");
// }
// x();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		console.log(i);
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* same logic as above */
// {
// 	var i = 1;
// 	console.log(i);
// 	setTimeout(() => console.log(i), 1000);
// }
// {
// 	var i = 2;
// 	console.log(i);
// 	setTimeout(() => console.log(i), 2000);
// }
// {
// 	var i = 3;
// 	console.log(i);
// 	setTimeout(() => console.log(i), 3000);
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* let is block scope so everytime new block will have current value of i */
// function x() {
// 	for (let i = 1; i <= 5; i++) {
//  // A new "i" is created for this block in each iteration
// 		console.log(i);
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* same logic as above */
// {
// 	let i = 1;
// 	console.log(i);
//   setTimeout(() => console.log(i), 1000);
// }
// {
// 	let i = 2;
// 	console.log(i);
//   setTimeout(() => console.log(i), 2000);
// }
// {
// 	let i = 3;
// 	console.log(i);
//   setTimeout(() => console.log(i), 3000);
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		function close(i) {
// 			setTimeout(function () {
// 				console.log(i);
// 			}, i * 1000);
// 		}
// 		close(i);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		console.log(i);
// 		(function (i) {
// 			setTimeout(function () {
// 				console.log(i);
// 			}, i * 1000);
// 		})(i);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();
