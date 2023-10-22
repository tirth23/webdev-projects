var User = {
    Name: "",
    getUserName: function() {
        console.log(`Username is: ${this.Name}`)
    }
};

var tirth = Object.create(User);
console.log(tirth);
tirth.Name = "Tirth Patel";
tirth.getUserName();

var rahul = Object.create(User, {
    Name: {value: "Rahul"},
    courseCount: {value: 3}
});
rahul.getUserName();
console.log(rahul.courseCount);