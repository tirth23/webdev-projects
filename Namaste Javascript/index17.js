// "use strict"

/* this in global space */
// console.log(this);


/* In non-strict, this is undefined in function. so replaced with global object - this substiution */
// function x() {
//     /* value depends on strict/non-strict mode */
//     console.log(this);
// }
// x();
// window.x();


// /* this inside object's method refers to object*/
// const obj3 = {
//     a: 10,
//     x: function () {
//         console.log(this, this.a);
//     }
// }
// obj3.x();


/* call apply bind methods */
// const student = {
//     name: "Tirth",
//     printName: function () {
//         console.log(this, this.name);
//     },
// };
// student.printName();

// const student1 = {
//     name: "Patel",
// };
// /* function borrowing */
// student.printName.call(student1);


/* can be used by putting function outside object */
// let printName = function (homeTown, state) {
//     console.log(this.firstName + " " + this.lastName + " " + homeTown);
// }
// const student2 = {
//     firstName: "Tirth",
//     lastName: "Patel"
// };

// /* call */
// printName.call(student2, "Ahmedabad", "Gujarat");

// /* apply */
// printName.apply(student2, ["Ahmedabad", "Gujarat"]);

// /* bind */ 
// const newPrintFun = printName.bind(student2, "Ahmedabad", "Gujarat");
// console.log(newPrintFun)
// newPrintFun();

// const student3 = {
//     firstName: "Xyz",
//     lastName: "Abc"
// };
// printName.call(student3);


/* this inside arrow function retains value of enclosing lexical context */
// const obj = {
//     a: 10,
//     x: () => {
//         console.log(this);
//     },
// };
// obj.x();

// const obj1 = {
//     a: 10,
//     y: function () {
//         console.log(this);
//         const x = () => {
//             console.log(this);
//         }
//         x();
//     }
// };
// obj1.y();
