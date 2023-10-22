function init() {
    var name = "Tirth";
    console.log("I am Init.")

    function say(){
        console.log(name);
    }
    return say;
}
var temp = init()
temp();


function doaddtion(x) {
    return function(y){
        return x + y;
    }
}
var add5 = doaddtion(4);
console.log(add5(5));

console.log(doaddtion(4)(5));    //curring