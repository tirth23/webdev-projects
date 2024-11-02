// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p1");
// 		resolve("p1 success");
// 		// reject("p1 fail");
// 	}, 15000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p2");
// 		resolve("p2 success");
// 		// reject("p2 fail");
// 	}, 5000);
// });

// const p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p3");
// 		// resolve("p3 success");
// 		reject("p3 fail");
// 	}, 10000);
// });

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* return promise which has array of all success or return single response if any one fail */
// Promise.all([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* return array of objects length all settled irrespective of state */
// /*
// [
// 	{
// 		status: "fulfilled",
// 		value: "p1 success",
// 	},
// 	{
// 		status: "rejected",
// 		reason: "p2 fail",
// 	},
// ];
// */
// Promise.allSettled([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* return first settled response irrespective of state */
// Promise.race([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* return first settled success response or if all fail return array of errors */
// Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((err) => {
//     console.error(err);
//     //to get aggregate error in form of array
//     // console.log(err.errors);
// });

/* ------------------------------------------------------------------------------------------------------------------------------ */

// /* Polyfill for Promise.all */
// Promise.myAll = function (values) {
// 	const promise = new Promise(function (resolve, reject) {
// 		let result = [];
// 		let total = 0;
// 		values.forEach((item, index) => {
// 			Promise.resolve(item)
// 				.then((res) => {
// 					result[index] = res;
// 					total++;
// 					if (total === values.length) resolve(result);
// 				})
// 				.catch((err) => {
// 					reject(err);
// 				});
// 		});
// 	});
// 	return promise;
// };
// Promise.myAll([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

// /* Test 1: All promises resolve */
// let promises1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// Promise.myAll(promises1)
// 	.then((results) => console.log("All resolved:", results))
// 	.catch((error) => console.error("Rejected:", error));

// /* Test 2: Including a promise that rejects */
// let promises2 = [
// 	Promise.resolve(10),
// 	Promise.reject(new Error("Failed")),
// 	Promise.resolve(30),
// ];
// Promise.myAll(promises2)
// 	.then((results) => console.log("All resolved:", results))
// 	.catch((error) => console.error("Rejected:", error.message));

/* ------------------------------------------------------------------------------------------------------------------------------ */

// /* Polyfill for Promise.any */
// Promise.myAny = function (promises) {
// 	return new Promise((resolve, reject) => {
// 		if (promises.length === 0)
// 			reject(new AggregateError("No promises were provided."));
// 		let rejections = [];
// 		let rejectedCount = 0;
// 		promises.forEach((promise, index) => {
// 			Promise.resolve(promise)
// 				.then(resolve) // Resolve immediately on any promise resolution
// 				.catch((error) => {
// 					rejections[index] = error;
// 					rejectedCount++;
// 					if (rejectedCount === promises.length) {
// 						reject(
// 							new AggregateError(rejections, "All promises were rejected.")
// 						);
// 					}
// 				});
// 		});
// 	});
// };

// Promise.myAny([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => {
// 		console.error(err);
// 		//to get aggregate error in form of array
// 		// console.log(err.errors);
// 	});
// let promises1 = [
// 	Promise.resolve(1),
// 	Promise.reject(new Error("Failed")),
// 	Promise.resolve(3),
// ];
// let promises2 = [
// 	Promise.reject(new Error("Failed")),
// 	Promise.reject(new Error("Error")),
// 	Promise.reject(new Error("Problem")),
// ];
// Promise.myAny(promises2)
// 	.then((result) => console.log("Resolved with:", result))
// 	.catch((error) =>
// 		console.error("Rejected with:", error.errors.length, "errors")
// 	);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.myRace = function (promises) {
// 	return new Promise((resolve, reject) => {
// 		if (promises.length === 0) {
// 			throw new TypeError("Cannot perform Promise.race on an empty array");
// 		}
// 		promises.forEach((promise) => {
// 			Promise.resolve(promise).then(resolve).catch(reject);
// 		});
// 	});
// };
