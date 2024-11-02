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

// /* let is block scope so everytime new block will have current value of i */
// function x() {
// 	for (let i = 1; i <= 5; i++) {
// 		console.log(i);
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// 	console.log("Namaste Javascript");
// }
// x();

// /* same logic as above */
// let i = 1;
// console.log(i);
// {
// 	i = 2;
// 	console.log(i);
// }
// {
// 	i = 3;
// 	console.log(i);
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
