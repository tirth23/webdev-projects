// console.log("start");

// setTimeout(function cb() {
// 	console.log("callback");
// }, 5000);

// console.log("end");

// /* wait for 20 seconds to  block main thread
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00 */
// let startDate = new Date().getTime();
// console.log(startDate);
// endDate = startDate;
// while (endDate < startDate + 10000) {
// 	endDate = new Date().getTime();
// }

// let startTime = performance.now();
// console.log(startTime, "ms elaped since start of this script");
// while (performance.now() - startTime < 10000) {
// 	// Do nothing for 10000 ms to emulate extremely slow code
// }

// console.log("while expires");

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// console.log("start");
// function cb() {
// 	console.log("callback");
// }
// setTimeout(cb, 0);
// /*
// even if it is time is zero it has to go through whole procedure and enters queue
// once GEC is removed from stack then it pushes into stack
// */
// console.log("end");

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* performance.now(): This method returns a timestamp representing the number of milliseconds elapsed since the page or script 
// started to load (relative to the navigation start). It provides a high-resolution time, meaning the value returned includes 
// decimals (sub-millisecond accuracy) */
// let startTime = performance.now();
// for (let i = 0; i < 1000000; i++) {
//   // Some task
// }
// let endTime = performance.now();
// console.log(`The loop took ${endTime - startTime} milliseconds.`);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* The console.time() method in JavaScript is used to measure the amount of time that passes between when you start and stop a timer. 
// It's a very useful feature for debugging and performance testing */
// console.time('myTimer');  // Starts the timer named 'myTimer'
// for (let i = 0; i < 1000000; i++) {
//   // Simulate some task
// }
// console.timeEnd('myTimer');  // Stops the timer and logs the time elapsed
