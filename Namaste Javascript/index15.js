/* Async/Await */

/* timer starts from where promise is declared */
const p1 = new Promise((resolve, reject) => {
	console.log("p1");
	setTimeout(() => {
		console.log("inside p1 timeout");
		resolve("Promise1 Resolved");
	}, 5000);
});

const p2 = new Promise((resolve, reject) => {
	console.log("p2");
	setTimeout(() => {
		console.log("inside p2 timeout");
		resolve("Promise2 Resolved");
	}, 10000);
});

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
// getData();

/* handling promise with await */
async function handlePromise() {
	console.log("Hello World");
	/* JS engine seems to wait for promise to resolve
    but internally it suspends handlePromise execution from call stack */
	const val = await p1;
	console.log("First");
	console.log(val);

	const val2 = await p2;
	console.log("First2");
	console.log(val2);
}
handlePromise();

//will take 25 sec to complete
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

/* async/await vs return */
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
// console.log(p === asyncReturn()); // false

/* real world use */
const GITHUB_AP = "https://api.github.com/users/tirth23";

/* using normal way */
// fetch(GITHUB_AP)
//     .then((data) => data.json())
//     .then((jsonValue) => console.log(jsonValue))
//     .catch((err) => console.log(err));

//* using aysnc/await */
// async function handlePro() {
//     console.log("Check");
//     try {
//         const data = await fetch(GITHUB_AP);
//         const jsonValue = await data.json();
//         console.log(jsonValue);
//     } catch (err) {
//         console.log(err);
//     }
//     console.log("stop execution till await is resolved");
// }
// handlePro();
// console.log("Hi");

/* either use try catch block or below statement */
// handlePro().catch((err) => console.log(err));
