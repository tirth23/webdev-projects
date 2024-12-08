// /*
// Start index.html and check console:- Uncaught SyntaxError: Cannot use import statement outside a module

// To resolve this:-
// Inorder to use import, file in which we are using import, declare it as module in html file

// Sum 18 will be printed in console

// Run this as node file and result will be printed
// node index27
// Sum 18
// */
// // import Add from "./index26.js";
// import { sum as Add } from "./index26.js";
// Add(10, 8);

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /*
// Start index.html and check console:- index27.js:22 Uncaught ReferenceError: require is not defined
// Browser does not support commonjs module

// Run this as node file and result will be printed
// node index27
// Sum 18
// */
// // const sum = require("./index26");
// // const { sum } = require("./index26");
// const [sum] = require("./index26");
// sum(10, 8);
