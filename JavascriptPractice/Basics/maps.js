var mymap = new Map();

mymap.set(1, "One");
mymap.set(2, "two");
mymap.set(3, "three");
mymap.set(4, "four");

console.log(mymap)
console.log(mymap.size)
console.log(mymap.get(2))
console.log(mymap.keys())
console.log(mymap.values())

for (let key of mymap.keys()) {
    console.log(key);
}
for (let value of mymap.values()) {
    console.log(value);
}
for (let [k, v] of mymap) {
    console.log(k, v);
}
mymap.forEach((v) => (console.log(v)));    
mymap.forEach((v, k) => (console.log(v, k)));                //value and then key

mymap.delete(2);
console.log(mymap);