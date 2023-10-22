//creating object in function way
var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log( `Course Count is: ${this.courseCount}`);
    };
};

User.prototype.getfirstname = function(){
    console.log(`Your first name is: ${this.firstName}`);
};

var tirth = User("Tirth", 2);           //regular function call this->global
console.log(tirth);

var tirth1 = new User("Tirth1", 4);     //create object, invoke constructor, not a regular function call
console.log(tirth1)

var tirth2 = new User("Tirth2", 6); 
console.log(tirth2)

tirth1.getCourseCount();

if (tirth1.hasOwnProperty("firstName")) {
    tirth1.getfirstname();
};
if (tirth1.hasOwnProperty("firstname")) {
    tirth1.getfirstname();
};

