//... 
let mammals=["lion","tiger","rhino","hippo"]
//console.log(...mammals)
//console.log(mammals)

/*const copy_mammals=mammals//it will not create copy
console.log(copy_mammals)
mammals.pop()
console.log(copy_mammals)*/

const copy_mammals=[...mammals]
console.log(copy_mammals)
mammals.pop()
console.log(copy_mammals)

const aquatic=["jelly fish","shark","seal"]

const all_animals=[...mammals,...aquatic]
console.log(all_animals)

mammals=["fox",...mammals,"elephant"]
console.log(mammals)

let user={
    id:1,
    name:"sachin",
    age:50
}

let usercontact={
    id:1,
    city:"mumbai",
    country:"india"
}

let user_all={
    ...user,
    ...usercontact
}

console.log(user_all)

let usercopy={...user}
user.age=60
console.log(usercopy)

user={
    ...user,
    name:"sachin tendulkar",
    hobby:"cricket"
}

console.log(user)