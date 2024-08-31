// var x = 7;
// function getName() {
//     console.log("Namaste Javascript");
// }
// getName();
// console.log(x);

/* hoisting */
// getName();
// console.log(x);
// var x = 7;
// function getName() {
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// var y = 9;
// console.log(y);
// function getName() {
//     console.log("Namaste Javascript");
// }

// function getName() {
//     console.log("Namaste Javascript");
//     // return 2;
// }
// console.log(getName());

// console.log(getName);
// function getName() {
//     console.log("Namaste Javascript");
// }
// console.log(getName);

// x = 7;
// console.log(x);
// var x;

// x = 7;
// console.log(x);

// var x;
// console.log(x);
// x = 7;

// console.log(x);
// x = 7;

/* Arrow Function - not hoisted*/
// var y = 7;
// console.log(y);
// getName();       //getname is variable in memory which is undefined
// console.log(x);
// var x = 7;
// var getName = () => {
//     console.log("Hi");
// }

// var y = 7;
// console.log(y);
// console.log(getName);   //getname is variable in memory which is undefined
// console.log(x);
// var x = 7;
// var getName = () => {
//     console.log("Hi");
// }

// var y = 7;
// console.log(y);
// console.log(x);
// var x = 7;
// var getName = () => {
//     console.log("Hi");
// }
// getName();  //once function initialized it behaves like function

// var y = 7;
// console.log(y);
// console.log(x);
// var x = 7;
// var getName = () => {
//     console.log("Hi");
// }
// console.log(getName);     //once function initialized it behaves like function   

/* Anonyms Function behaves same as arrow function for hoisting */
// var y = 7;
// console.log(y);
// console.log(getName);
// // getName();
// console.log(x);
// var x = 7;
// var getName = function () {
//     console.log("Hii");
// }
// console.log(getName);
// getName();

/* Named Function Expression behaves same as arrow function for hoisting */
// var y = 7;
// console.log(y);
// console.log(getName);
// // getName();
// console.log(x);
// var x = 7;
// var getName = function xyz () {
//     console.log("Hi");
// }
// console.log(getName);
// getName();
// // console.log(xyz);
// // xyz();




