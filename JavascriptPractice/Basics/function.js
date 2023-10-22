function myfun(name) {
    console.log(`Hey ${name}`);
}
myfun();
myfun("Tirth");

var myfun1 = function (name) {
    switch (name){
        case "Tirth":
            return "yes";
            break;   //not needed
        default:
            return "no";
    }
}
console.log(myfun1("Tirth"))
console.log(myfun1("Patel"))

//every function/code in js is registered in global context so even when function is called ahead of its Definition runs
//var are just scanned
sayhello()
function sayhello(){
    console.log("Hello");}

//below code won't work as sayhello1 variable is just scanned and remained undefined
//sayhello1()
//var sayhello1 = function (){
//console.log("Hello1");}   

console.log(name)
var name = "T"

 a="5"
 console.log(a  + 5)
 console.log(parseInt(a)  + 5)