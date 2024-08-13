// let name1 = {
//     firstname: "Tirth",
//     lastname: "Patel"
// }
// console.log(name1);

// let printName = function (city, state, country) {
//     console.log(this.firstname + " " + this.lastname + " " + city + " " + state + " " + country);
// }

// let printMyName = printName.bind(name1, "amdavad");
// printMyName("gujarat", "india");

// /* polyfill for bind */
/* A polyfill is a piece of code (usually JavaScript on the Web) 
used to provide modern functionality on older browsers that do not natively support it. */
// Function.prototype.mybind = function(...args) {
//     let obj = this;
//     params = args.slice(1);
//     return function (...args2) {
//         // obj.call(args[0]);
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// let printMyName1 = printName.mybind(name1, "amdavad");
// printMyName1("gujarat", "india");