function calculate(num1,num2,opr)
//num1=30,num2=20,opr=(num1,num2)=>num1+num2
{
console.log("result:"+opr(num1,num2))//opr(30,20)//50
}

calculate(30,20,sub)//sub is a callback
calculate(30,20,add)//add is a callback
calculate(30,20,function(num1,num2){return num1*num2})

//arrow function
let add_arrow=(num1,num2)=>{
    let res=num1+num2
    return res    
}

calculate(30,20,add_arrow)
calculate(30,20,(num1,num2)=>num1/num2)
calculate(30,20,(num1,num2)=>num1%num2)
calculate(3,2,(num1,num2)=>num1**num2)