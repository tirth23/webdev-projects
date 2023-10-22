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
    static login() {                               //private method
        return "You are logged in";
    }
}

class SubAdmin extends User{
    getSubAdmin() {
        return "I am subadmin";
    }
}
const tom = new SubAdmin();
console.log(tom.getSubAdmin());
//console.log(tom.login());      //give error
console.log(tom.getInfo());
console.log(User.login());