// /*
// Start index.html and check console:- Uncaught SyntaxError: Unexpected token 'export'

// To resolve this:-
// Inorder to use export, file in which we are using export, declare it as module in html file

// Although it will be exported without declaring it as module and Sum 18 will be printed in console but recommend to use that
// */
// const sum = (a, b) => {
// 	console.log("Sum " + (a + b));
// };
// // export default sum;
// export { sum };

/* ------------------------------------------------------------------------------------------------------------------------------- */

// /*
// Start index.html and check console:- index26.js:18 Uncaught ReferenceError: module is not defined
// Browser does not support commonjs module
// */
// const sum = (a, b) => {
// 	console.log("Sum " + (a + b));
// };
// module.exports = sum;
// // module.exports = { sum };
// // module.exports = [sum];
