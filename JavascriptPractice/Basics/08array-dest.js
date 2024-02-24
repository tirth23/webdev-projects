const zoo=["lion","tiger","rhino","hippo"]
let animal1=zoo[0]
let animal2=zoo[1]
console.log(animal1+"--"+animal2)

const [a1,a2]=zoo //[var1,var2..]=array
console.log(a1+"--"+a2)

const [a_1,,a_3]=zoo
console.log(a_1+"--"+a_3)
//... is the rest operator->it will collect of rest of the values from the array
const [an1,an2,...rem_animals]=zoo
console.log(an1+"--"+an2)
console.log(rem_animals)

function getsumsub(num1,num2){
    return [num1+num2,num1-num2]
}

const [add_res,sub_res]=getsumsub(10,20)
console.log("add:"+add_res)
console.log("sub:"+sub_res)