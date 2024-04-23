// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p1 success");
//         reject("p1 fail");
//     }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p2 success");
//         reject("p2 fail");
//     }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p3 success");
//         reject("p3 fail");
//     }, 2000);
// });

/* return all success or return if any one fail */
// Promise.all([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* return all settled irrespective of state */
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* return first settled irrespective of state */
// Promise.race([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.error(err));

/* return first settled success */
// Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((err) => {
//     console.error(err);
//     //to get aggregate error in form of array
//     console.log(err.errors);
// });