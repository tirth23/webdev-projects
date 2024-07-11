// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p1");
// 		resolve("p1 success");
// 		// reject("p1 fail");
// 	}, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p2");
// 		// resolve("p2 success");
// 		reject("p2 fail");
// 	}, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p3");
// 		resolve("p3 success");
// 		// reject("p3 fail");
// 	}, 2000);
// });

/* return array of all success or return single response if any one fail */
// Promise.all([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* return array of objects length all settled irrespective of state */
/* [
	{
		status: "fulfilled",
		value: "p1 success",
	},
	{
		status: "rejected",
		reason: "p2 fail",
	},
]; */
// Promise.allSettled([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* return first settled response irrespective of state */
// Promise.race([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* return first settled success response */
// Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((err) => {
//     console.error(err);
//     //to get aggregate error in form of array
//     console.log(err.errors);
// });
