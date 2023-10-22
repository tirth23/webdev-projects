class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo() {
        return {name: this.name,  email: this.email};
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
}

module.exports = User;

const tirth = new User("Tirth", "tirth@.com");
console.log(tirth.getInfo());
tirth.enrollCourse("React JS");
console.log(tirth.getCourseList());
console.log(tirth.courseList);