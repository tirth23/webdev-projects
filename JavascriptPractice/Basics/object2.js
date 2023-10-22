Name = "L"
var user = {
    Name : "Tirth",
    Age : 22,
    Courselist : [],
    buycourse : function(cousername) {
        this.Courselist.push(cousername);
    },
    Coursecount : function() {
        return `${this.Name} is enrolled in total of ${this.Courselist.length} courses.`;
    },
};
//var Courselist = true
console.log(user)
console.log(user.Coursecount())
user.buycourse("React JS");
console.log(user.Coursecount());