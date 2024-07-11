/* Async/Await */

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved");
//     }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved");
//     }, 5000);
// });


/* async will always returns promise */
// async function getData() {
//     return p1;
//     // return "Hi";
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

/* handling promise with normal way */
// async function getData() {
//     //JS engine won't wait for promise to be resolved
//     p1.then((res) => console.log(res));
//     console.log("First");
// }
// getData();

/* handling promise with await */
// async function handlePromise() {
//     console.log("Hello World");
//     /* JS engine seems to wait for promise to resolve 
//     but internally it suspends handlePromise execution from call stack */
//     const val = await p1;
//     console.log("First");
//     console.log(val);

//     const val2 = await p2;
//     console.log("First2");
//     console.log(val2);
// }
// handlePromise();


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