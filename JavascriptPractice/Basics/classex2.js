//import User from "./classex.js";                      //modern way 

const User = require("./classex.js");
const tirth = new User("Tirth", "tirth@.com");
console.log(tirth.getInfo());
console.log(tirth.getInfo().email);

tirth.enrollCourse("React JS");
tirth.enrollCourse("Angular JS");
console.log(tirth.getCourseList());

let courses = tirth.getCourseList();
courses.forEach(c => console.log(c));