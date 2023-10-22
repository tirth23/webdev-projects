var a = ["hey", "How", 1]
var b = new Array("hey", "How", 1)
console.log(a)
console.log(b[1])
b[1]=2
console.log(b)
console.log(a.length)
b.pop()
console.log(b)
b.unshift("Tirth")
console.log(b)
b.shift()
console.log(b)
console.log(b.indexOf(2))
console.log(a.indexOf("T"))
console.log(Array.from("Tirth"));
b.push(100)
console.log(b)