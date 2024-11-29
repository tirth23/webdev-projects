// /*
// fetch() will return promise and stores in user initaliy it will be in pending after it gets data, it is fulfilled
// */
// const GITHUB_API = "https://api.github.com/users/tirth23";
// const user = fetch(GITHUB_API);
// console.log(user);

// /* arg in callbak function is data/response returned in promise */
// user.then(function (data) {
// 	console.log(data);
// });

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* Callback Hell */
// const cart = ["shoes", "kurta", "pants"];
// api.createOrder(cart, function (pay) {
// 	api.proceedToPayment(pay, function (summary) {
// 		api.showOrderSummary(summary, function (wallet) {
// 			api.walletSummary(wallet);
// 		});
// 	});
// });

/* ---------------------------------------------------------------------------------------------------------------------------------- */

/* 
Promise => The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const prom1 = new Promise((resolve, reject) => {
  resolve(data);
  reject(error);
});

then => The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases 
of the Promise. It stores the callbacks within the promise it is called on and immediately returns another Promise object, 
allowing you to chain calls to other promise methods.
then(onFulfilled)
then(onFulfilled, onRejected)
const prom2 = prom1.then(handleFulfilled1Callback, handleRejected1Callback);
const prom3 = prom2.then(handleFulfilled2Callback, handleRejected2Callback);

function handleFulfilled1Callback(datafromPromise) {
  console.log(datafromPromise);
  return anotherpromise
}

function handleRejected1Callback(errorfromPromise) {
  console.log(errorfromPromise);
  return anotherpromise
}

handleFulfilled1Callback will get value from resolve of prom1
handleRejected1Callback will get value from reject of prom1 

undefined is return if nothing is returned in promise

catch: The catch() method of Promise instances schedules a function to be called when the promise is rejected. 
It immediately returns another Promise object, allowing you to chain calls to other promise methods.
It is a shortcut for then(undefined, onRejected). 
Internally it will call then with undefined
In promise chain, if any promise will be rejected then catch even if it is at end will capture that

finally: The finally() method of Promise instances schedules a function to be called when the promise is settled 
(either fulfilled or rejected). 
It immediately returns another Promise object, allowing you to chain calls to other promise methods. */

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.reject(1).then(
// 	(data) => console.log(data),
// 	(error) => console.log(error)
// );

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.reject(1)
// 	.finally((data) => console.log("Returns " + data))
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.resolve().then((data) => console.log(data));
// Promise.resolve(1).then((data) => console.log(data));

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* 
// SomePromise
//   .then((result) => console.log(result)) //on resolve
// 	.catch((err) => console.log(err)) //on reject
// 	.finally(() => console.log("promise settled")); //executes everytime 
// */

// /* Promise chain preferred over then()'s two case syntax */
// Promise.resolve()
// 	.then(() => {
// 		console.log("No error");
// 		throw new Error("Oh no!");
// 	})
// 	.then(
// 		(data) => {
// 			console.log(data, "Not called.");
// 		},
// 		(error) => {
// 			console.error(`onRejected function called: ${error.message}`);
// 		}
// 	);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.resolve()
// 	.then(() => {
//     console.log("No error");
//     // return 1;
// 		throw new Error("Oh no!");
// 	})
//   .then((data) => {
//     console.log(1, data);
//     return "Hello"
//   })
// 	.catch((error) => {
// 		console.error(`onRejected function called: ${error.message}`);
// 	})
// 	.then((data) => {
// 		console.log("I am always called even if the prior then's promise rejects " + data);
// 	});

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.reject("rejected promise")
// 	.finally(() => {
// 		console.log("always called finally");
// 	})
// 	.then(() => {
// 		console.log("not called since rejection");
// 	})
// 	.catch((error) => console.log("rejection from promise: ", error))
// 	.then((data) => {
// 		console.log(1);
// 		// return "another promise";
// 		throw new Error("Error from 2nd then");
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.error(`onRejected function called: ${error.message}`);
// 		return "data from catch in form of promise";
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		console.log("I am always called even if the prior then's promise rejects");
// 	});

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Promise.reject("rejected promise")
// 	.finally(() => {
// 		console.log("always called finally");
// 	})
// 	.then(() => {
// 		console.log("not called since rejection");
// 	})
// 	.then((data) => {
// 		console.log(1);
//     // return "another promise";
//     throw new Error("Error from 2nd then");
// 	})
//   .then((data) => {
//     console.log(data);
//   })
// 	.catch((error) => {
// 		console.error(`onRejected function called: ${error.message}`);
//     return "data from catch in form of promise"
// 	})
