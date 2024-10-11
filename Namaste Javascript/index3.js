// /* A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ)
// from the start of the block until code execution reaches the place where the variable is declared
// and initialized. */
// var a = 10;
// console.log(a);
// // console.log(b);   //tdz
// // let b = 20;
// console.log(window.a);
// console.log(window.b);   //script scope not in global scope
// console.log(window.c);
// console.log(window.d);
// let c;
// console.log(c); //c will be undefined in script scope
// c = 30;
// console.log(c); 

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var a = 10;
// var a = 20;
// console.log(a);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let b = 10;
// let b = 20;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let c = 10;
// var c = 20;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// var d = 10;
// let d = 20;

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let a;
// a = 10;
// console.log(a);
// const b = 20;
// console.log(b);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let a;
// a = 10;
// console.log(a);
// const b;
// b = 20;
// console.log(b);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let a;
// a = 10;
// console.log(a);
// const b = 20;
// b = 30;
// console.log(b);

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* TDZ ends once the computer fully assigns a value to bestFood */
// {
//   // bestFood's TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   console.log(bestFood); // returns ReferenceError because bestFood's TDZ continues here
//   // bestFood's TDZ continues here
//   let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
//   // bestFood's TDZ does not exist here
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* to access a variable outside the temporal dead zone */
// {
//   // TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
//   console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood's TDZ does not exist here
//   // bestFood's TDZ does not exist here
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// /* An uninitialized let variable defaults to undefined outside the TDZ */
// {
//   // TDZ starts here (at the beginning of this block's local scope)
//   // bestFood's TDZ continues here
//   let bestFood; // bestFood's TDZ ends here
//   console.log(bestFood); // returns undefined because bestFood's TDZ does not exist here
//   bestFood = "Vegetable Fried Rice"; // bestFood's TDZ does not exist here
//   console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood's TDZ does not exist here
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let bestFood = "Vegetable Fried Rice"; 
// {
//   console.log(bestFood); 
//   let bestFood = "Vegetable Fried Rice"; 
// }

/* ------------------------------------------------------------------------------------------------------------------------------------ */

// let bestFood = "Vegetable Fried Rice"; 
// {
//   console.log(bestFood); 
// }