// console.log("start");
// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);
// console.log("end");
// // wait for 10 seconds to  block main thread
// let startDate = new Date().getTime();
// console.log(startDate);
// endDate = startDate;
// while (endDate < startDate + 10000) {
//     endDate = new Date().getTime(); 
// }
// console.log("while expires");

// console.log("start");
// function cb() {
//     console.log("callback");
// }
// setTimeout(cb, 0);
// /*
// even if it is time is zero it has to go through whole procedure and enters queue
// once GEC is removed from stack then it pushes into stack
// */
// console.log("end");