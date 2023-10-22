const tirth = {
    firstname: "Tirth",
    lastname: "Patel",
    role: "Admin",
    coursecount: 3,
    getInfo: function() {
        console.log(`
        firstname is: ${this.firstname}
        Lastname is: ${this.lastname},
        Role is: ${this.role} and 
        Coursecount is: ${this.coursecount}
        `);
    }
}
tirth.getInfo();

tirth.getInfo.call(tirth);

const rahul = {
    firstname: "Rahul",
    lastname: "Patel",
    role: "Sub-Admin",
    coursecount: 5
}

tirth.getInfo.bind(rahul)();     //this->rahul
//getInfo is reference to getInfo()

var a = tirth.getInfo.bind(rahul);
a();

tirth.getInfo.call(rahul);              //directly calls method