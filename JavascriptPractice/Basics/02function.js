function display()
{
    console.log("Hello world..")

}

display()

function sum(num1,num2)
{
    return num1+num2//10+20
}

console.log(sum(10,20))

//function expression

let sub=function(num1,num2)
{
    return num1-num2
}
let add=function(num1,num2)
{
    return num1+num2
}

console.log(sub(30,20))
// callback function

function calculate(num1,num2,opr)
//num1=30,num2=20,opr=function(num1,num2){    return num1*num2 }
{
console.log("result:"+opr(num1,num2))//opr(30,20)//600
}

calculate(30,20,sub)//sub is a callback
calculate(30,20,add)//add is a callback
calculate(30,20,function(num1,num2){return num1*num2})