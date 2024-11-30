/* 
async function always return promise immediately, Async functions always return a promise.
if it doesn't return anything, it will return fulfilled promise wuth result as undefined
If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

The await keyword in JavaScript is used inside an async function to pause the execution of the function until a 
Promise is resolved or rejected
await can only be used before promise and inside async function
If the Promise is resolved, await returns the resolved value.
If the Promise is rejected, an error is thrown, which you can handle with try...catch 
*/

/* timer starts from where promise is declared */
const p1 = new Promise((resolve, reject) => {
	console.log("p1");
	setTimeout(() => {
		console.log("inside p1 timeout");
		resolve("Promise1 Resolved");
	}, 5000);
});

// const p2 = new Promise((resolve, reject) => {
// 	console.log("p2");
// 	setTimeout(() => {
// 		console.log("inside p2 timeout");
// 		resolve("Promise2 Resolved");
// 	}, 10000);
// });

/* async will always returns promise */
// async function getData() {
// 	return p1;
// 	// return "Hi";
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

/* handling promise with normal way */
// async function getData() {
// 	//JS engine won't wait for promise to be resolved
// 	p1.then((res) => console.log(res));
// 	console.log("First");
// }
// console.log(getData());

// /* handling promise with await */
// async function handlePromise() {
// 	console.log("Hello World");
// 	/* JS engine seems to wait for promise to resolve
//     but internally it suspends handlePromise execution from call stack */
// 	const val = await p1;
// 	console.log("First");
// 	console.log(val);

// 	const val2 = await p2;
// 	console.log("First2");
// 	console.log(val2);
// }
// handlePromise();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* will take 25 sec to complete */
// async function handlePromise() {
// 	console.log("Hello World");
// 	/* JS engine seems to wait for promise to resolve
//     but internally it suspends handlePromise execution from call stack */
// 	const p1 = new Promise((resolve, reject) => {
// 		console.log("p1");
// 		setTimeout(() => {
// 			console.log("inside p1 timeout");
// 			resolve("Promise1 Resolved");
// 		}, 10000);
// 	});
//   // when js checks await, it suspends execution of handlePromise from stack
//   // after 10 sec, it resumes execution
// 	const val = await p1;
// 	console.log("First");
// 	console.log(val);

//   const p2 = new Promise((resolve, reject) => {
//     console.log("p2");
//     setTimeout(() => {
//       console.log("inside p2 timeout");
//       resolve("Promise2 Resolved");
//     }, 15000);
//   });
//   // when js checks await, it suspends execution of handlePromise from stack
//   // after 15 sec, it resumes execution
// 	const val2 = await p2;
// 	console.log("First2");
// 	console.log(val2);
// }
// handlePromise();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* async/await vs return */
// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//   return p;
// }
// console.log(asyncReturn());

// function basicReturn() {
//   return Promise.resolve(p);
// }
// console.log(basicReturn());

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false since aysnc automatically wraps whatever is returned in a new promise

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* real world use */
// const GITHUB_AP = "https://api.github.com/users/tirth23";

// /* using normal way */
// fetch(GITHUB_AP)
// 	.then((data) => data.json())
// 	.then((jsonValue) => console.log(jsonValue))
// 	.catch((err) => console.log(err));

// /* using aysnc/await */
// async function handlePro() {
// 	console.log("Check");
// 	try {
// 		const data = await fetch(GITHUB_AP);
// 		const jsonValue = await data.json();
// 		console.log(jsonValue);
// 	} catch (err) {
// 		console.log(err);
// 	}
// 	console.log("stop execution till await is resolved");
// }
// handlePro();
// console.log("Hi");

/* either use try catch block or below statement */
// handlePro().catch((err) => console.log(err));

/* try {
  //if anywhere it throws errors, it skips rest of statements and go to catch
  //can have multiple try..catch
} catch {
  //catches error
} */

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// async function getData() {
// 	/* pauses the execution of the getData function until the Promise.resolve("Hello!") resolves */
// 	console.log("Hi");
// 	// let startTime = performance.now();
// 	// while (performance.now() < startTime + 10000) {}
// 	// const innerdata = await Promise.reject("Suspend Execution!"); //if rejected diectly exit function and in return promise value is rejected
//   const innerdata = await Promise.resolve("success Execution!");
// 	console.log(innerdata);
// 	console.log(Promise.resolve("Resolved Promise"));
// 	/*
//   await resolved promise and returns value
//   return from promise will again wrap value into promise whose result will be that value
//   */
// 	return await Promise.resolve("Hello!");
// }
// /*
// when getData() called, getData function starts executing. Since it’s an async function,
// it prints hello and wait for 10 seconds
// it encounters await and suspends excution and it immediately returns a Promise.
// The returned Promise is stored in the data variable and continue
// executing below code and prints promise with state and value depend on return statement
// */
// const data = getData();
// // let startTime = performance.now();
// // while(performance.now() < startTime + 10000) {
// // }
// console.log(data);

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* If you use await with a non-Promise value, it converts the value into a resolved Promise and returns the value immediately. */
// async function simpleValue() {
// 	const result = await 42; // Non-Promise value
// 	console.log(result); // Logs: 42
// }
// simpleValue();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* If the Promise is rejected, await throws the error, and it can be caught with try...catch */
// async function handleError() {
// 	try {
// 		const result = await Promise.reject("Something went wrong!");
// 		console.log(result); // This won't run
// 	} catch (error) {
// 		console.error(error); // Logs: "Something went wrong!"
// 	}
// }
// handleError();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* both returns promise */
// async function foo1() {
//   return 1;
// }
// foo1();

// /*
// The Promise.resolve() static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned;
// if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared;
// otherwise the returned promise will be fulfilled with the value
//  */
// function foo2() {
//   return Promise.resolve(1);
// }
// foo2();

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// /* All are same */
// function getProcessedData(url) {
// 	return downloadData(url) // returns a promise
// 		.catch((e) => downloadFallbackData(url)) // returns a promise
// 		.then((v) => processDataInWorker(v)); // returns a promise
// }

// async function getProcessedData(url) {
// 	let v;
// 	try {
// 		v = await downloadData(url);
// 	} catch (e) {
// 		v = await downloadFallbackData(url);
// 	}
// 	return processDataInWorker(v);
// }

// async function getProcessedData(url) {
// 	const v = await downloadData(url).catch((e) => downloadFallbackData(url));
// 	return processDataInWorker(v);
// }
