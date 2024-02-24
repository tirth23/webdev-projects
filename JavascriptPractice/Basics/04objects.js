const user={
    name:"jhon",
    age:40,
    loc:"india"
}

console.log(user.age)
console.log(user["name"])

const user2={
    firstname:"sachin",
    lastname:"tendulkar",
    age:50,
    loc:"mumbai",
    fullname:function(){
        return this.firstname+"--"+this.lastname
    }
}

console.log(user2.fullname())

/*
let age=user.age
let name=user.name
*/

const {age,name}=user

console.log(name+"--"+age)

const {firstname,middlename="**",lastname,...rem_attrs}=user2
console.log(firstname+"---"+lastname)
console.log(middlename)
console.log(rem_attrs)


function getshortname({firstname,lastname})
//{firstname,lastname}=user2
{
 return firstname.substring(0,3)+lastname.substring(0,3)
}

console.log(getshortname(user2))