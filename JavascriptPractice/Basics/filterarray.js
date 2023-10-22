var a = [1, 2, 3, 4, 10 , 9, 8, 7];
console.log(a.fill("T"))
console.log(a.fill(0, 2, 6))
//console.log(a);
const b = [22, 23, 25, 89, 67, 90]
const result = b.filter((num) => num != 25)
console.log(b.filter((num) => num != 25))
//console.log(result)
console.log(b.slice(1, 4))
console.log(b.slice(1))
console.log(b)

c = [1, 2, 3, 4, 5, 6, 7]
//c.splice(1, 3, "R")
console.log(c.splice(1, 3, "R"))
console.log(c)

d = [1, 2, 3, 4]
d.splice(2, 1, "T", "I", "R", "T", "H")
//start, count, insert
console.log(d)