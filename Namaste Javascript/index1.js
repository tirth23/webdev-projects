// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//     var x = 10;
//     console.log(x);
// }
// function b() {
//     // var x = 100;
//     console.log(x);
// }

// var x = 10;
// function a() {
//     var y = 5;
// }
// console.log(window.x);
// console.log(this.x);
// console.log(x);
// /* non-esixting object returns undefined */
// console.log(window.y);
// console.log(this.y);
// console.log(y);

// var x;
// console.log(x);
// x = 10;
// console.log(x);
// x = "Tirth";
// console.log(x);

// "use strict"
// function test() {
//   a = 5;
//   /* when declared with var it becomes function scope */
//   var b = 10;
// }
// test();
// /* In strict mode a also becomes function scope */
// console.log(a);
// console.log(b);

/* In strict mode not allowed */
// function abc(a, a) {
//   console.log(a);
// }
// abc(1, 2);