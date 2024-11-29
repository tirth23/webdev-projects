// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p1");
// 		resolve("p1 success");
// 		reject("p1 fail");
// 	}, 15000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Inside p2");
// 		resolve("p2 success");
// 		reject("p2 fail");
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

// /* returns fulfilled promise whose result will be an array of all values result of fulfilled
// promises in array or returns rejected promise with single response if any one rejected state */
// console.log(Promise.all([p1, p2, p3]));
// Promise.all([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* returns fulfilled promise with result as array of objects once all promises settle irrespective of state */
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
// console.log(Promise.allSettled([p1, p2, p3]));
// Promise.allSettled([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* returns promise whose result will be result of first settled promise response irrespective of state
// and state of promise depended on state of first settled promise state
// */
// console.log(Promise.race([p1, p2, p3]));
// Promise.race([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* returns fulfilled promise whose result will be result of first settled success response
// or if all promises rejected returns rejected promise with result
// AggregateError: All promises were rejected
// */
// console.log(Promise.any([p1, p2, p3]));
// Promise.any([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => {
// 		console.error(err);
// 		// to get aggregate error in form of array
// 		console.log(err.errors);
// 	});

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
// Promise.myAll([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// let promises1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// Promise.myAll(promises1)
// 	.then((results) => console.log("All resolved:", results))
// 	.catch((error) => console.error("Rejected:", error));

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
// Promise.myAny(promises1)
// 	.then((result) => console.log("Resolved with:", result))
// 	.catch((error) =>
// 		console.error("Rejected with:", error.errors.length, "errors")
// 	);

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
// Promise.myRace([p1, p2, p3])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// function PromisePolyfill(executor) {
// 	let onResolve,
// 		onReject,
// 		isFulfilled = false,
// 		isRejected = false,
// 		isCalled = false,
// 		value;

// 	function resolve(val) {
// 		isFulfilled = true;
// 		value = val;
// 		console.log("Inside resolve" + value);
// 		if (typeof onResolve === "function") {
// 			console.log("Inside resolve if");
// 			onResolve(val);
// 			isCalled = true;
// 		}
// 	}

// 	function reject(val) {
// 		isRejected = true;
// 		value = val;
// 		if (typeof onReject === "function") {
// 			onReject(val);
// 			isCalled = true;
// 		}
// 	}

// 	this.then = function (callback) {
// 		onResolve = callback;
// 		console.log(onResolve);
// 		if (isFulfilled && !isCalled) {
// 			console.log("Inside then if");
// 			isCalled = true;
// 			onResolve(value);
// 		}
// 		console.log(this);
// 		return this;
// 	};

// 	this.catch = function (callback) {
// 		onReject = callback;

// 		if (isRejected && !isCalled) {
// 			isCalled = true;
// 			onReject(value);
// 		}
// 		return this;
// 	};

// 	try {
// 		executor(resolve, reject);
// 	} catch (error) {
// 		reject(error);
// 	}
// }

// const exmaplePromise = new PromisePolyfill((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2);
// 	}, 6000);
// });

// exmaplePromise
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// PromisePolyfill.resolve = (val) => {
// 	return new PromisePolyfill(function executor(resolve, reject) {
// 		resolve(val);
// 	});
// };

// PromisePolyfill.reject = (val) => {
// 	return new PromisePolyfill(function executor(resolve, reject) {
// 		reject(val);
// 	});
// };

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// function myPromisePolyfill(executor) {
// 	let state = "pending";
// 	let value = null;
// 	let reason = null;
// 	let onFulfilledCallbacks = [];
// 	let onRejectedCallbacks = [];

// 	function resolve(newvalue) {
// 		if (state !== "pending") return;
// 		state = "fulfilled";
// 		value = newvalue;
// 		console.log("Inside resolve", value, onFulfilledCallbacks);
// 		onFulfilledCallbacks.forEach((callback) => callback(value));
// 	}

// 	function reject(newreason) {
// 		if (state !== "pending") return;
// 		state = "rejected";
// 		reason = newreason;
// 		console.log("Inside reject", value, onRejectedCallbacks);
// 		onRejectedCallbacks.forEach((callback) => callback(reason));
// 	}

// 	this.then = function (onFulfilled, onRejected) {
//     console.log("Inside then function");
// 		return new myPromisePolyfill((resolve, reject) => {
// 			if (state === "fulfilled") {
// 				setTimeout(() => {
// 					try {
// 						const x = onFulfilled(value);
// 						resolve(x);
// 						console.log("fulfilled", x);
// 					} catch (e) {
// 						reject(e);
// 					}
// 				}, 0);
// 			} else if (state === "rejected") {
// 				setTimeout(() => {
// 					try {
// 						const x = onRejected(reason);
// 						resolve(x);
//             console.log("Rejected", x);
// 					} catch (e) {
// 						reject(e);
// 					}
// 				}, 0);
// 			} else {
//         console.log(onFulfilledCallbacks);
// 				onFulfilledCallbacks.push((value) => {
// 					try {
// 						const x = onFulfilled(value);
// 						resolve(x);
//             console.log(x);
// 					} catch (e) {
// 						reject(e);
// 					}
// 				});
// 				onRejectedCallbacks.push((reason) => {
// 					try {
// 						const x = onRejected(reason);
// 						resolve(x);
// 					} catch (e) {
// 						reject(e);
// 					}
// 				});
// 			}
// 		});
// 	};

// 	this.catch = function (onRejected) {
// 		return this.then(null, onRejected);
// 	};

//   executor(resolve, reject);
// 	console.log("Executor", resolve);
// 	console.log("Executor", reject);
	
// }

// const myexmaplePromise = new myPromisePolyfill((resolve, reject) => {
//   console.log("Inside Promise Callback")
// 	setTimeout(() => {
// 		console.log("Inside SetTimeout");
// 		resolve(2);
// 	}, 6000);
// });

// // myexmaplePromise
// // 	.then((res) => console.log(res))
// // 	.catch((err) => console.error(err));

// console.log(Promise.resolve(() => {
//   setTimeout(() => {
//     console.log(1);
//   }, 0);
// }).then((val) => console.log(val)))