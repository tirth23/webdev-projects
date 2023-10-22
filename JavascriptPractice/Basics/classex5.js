class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my fullname`;
        return fullname;
    }
    editName(newname) {
        const myname = newname.split(' ');
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}

class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        super(firstname, lastname, credit);
        this.subject = subject;
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my fullname and I teach ${this.subject}`;
        return fullname;
    }
}

const john = new User('John', 'Anderson', 34);
//console.log(john);
console.log(john.getFullName());
john.editName('Johnny Anderson');
console.log(john.getFullName());
// const sammy = new User();
// console.log(sammy);

const john1 = new Teacher('John', 'Anderson', 34, 'python');
console.log(john1.getFullName());      //method overriding