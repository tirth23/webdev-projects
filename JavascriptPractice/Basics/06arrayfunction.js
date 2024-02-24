const zoo=["lion","tiger","rhino","hippo"]
console.log(zoo.length)
zoo.push("zebra")// add item to the last pos
console.log(zoo)
//zoo=["dog","cat","cow"]//error

zoo.pop()//remove last item
console.log(zoo)

zoo.unshift("deer")//add item to the first pos
console.log(zoo)

zoo.shift()
console.log(zoo)

zoo.splice(1,2)//remove item/s from given pos
console.log(zoo)

zoo.splice(1,0,"giraffe","cheet")//add item/s to a given pos
console.log(zoo)

console.log(zoo[5])
zoo[0]="Sea Lion"
console.log(zoo)

console.log(zoo.indexOf("hippo"))

let res_animal=zoo.find((animal)=>animal.startsWith("g"))//find the first match
console.log(res_animal)

let res_index=zoo.findIndex((animal)=>animal.startsWith("g"))
console.log(res_index)

zoo.push("hyena")
console.log(zoo)
let res_all_animals=zoo.filter((animal)=>animal.includes("e"))//find all matches
console.log(res_all_animals)

let upper_zoo=zoo.map((animal)=>animal.toUpperCase())//transform the items
console.log(upper_zoo)

zoo.forEach((animal)=>{
    console.log(animal.substring(0,3))
})//will execute the given callback for eachitem
