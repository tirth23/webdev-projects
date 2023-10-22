var a = "Global";
console.log(a);
function one(){
    var a = "Local";
    console.log(a);
    two()
    function two(){
        var a = "sublocal"
        console.log(a)
    }
}
one()
console.log(this)