class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];                        //# makes var private

    getInfo() {
        return {name: this.name,  email: this.email};
    }
    enrollCourse(name) {                           //setter
        this.#courseList.push(name);
    }
    getCourseList() {                              //getter
        return this.#courseList;
    }
    login() {
        return "You are logged in";
    }
}

class SubAdmin extends User{
    constructor(name1, email1){
        super(name1, email1);
    }
    getSubAdmin() {
        return "I am subadmin";
    }
    login(){                                //overwrite
        return "Login for admin only"
    }
}

module.exports = User;

const tirth = new User("Tirth", "tirth@.com");
console.log(tirth.getInfo());
tirth.enrollCourse("React JS");
console.log(tirth.getCourseList());
console.log(tirth.courseList);

const tom = new SubAdmin();
console.log(tom.getSubAdmin());
console.log(tom.login());
console.log(tom.getInfo());

const jerry = new SubAdmin("jerry", "@jerry.com");
console.log(jerry.getInfo())