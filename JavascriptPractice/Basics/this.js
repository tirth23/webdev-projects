console.log(this);

var user = {
    name : "Tirth",
    fun1 : function() {
        console.log("line 6", this)
        function fun2(){
            console.log("Hello", this);
        }
        fun2()   //regular function call
   },
};    
user.fun1()     //not a regular function call so this refers to current object
                //in regular function call this refers to window (global) object