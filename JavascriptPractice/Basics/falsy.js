// TODO: falsy values
// undefined
// 0
// ''
// null
// NaN
console.log("2"+2)

// Type coercion refers to implict converion of datatype.
// bool to number, bool to string if concat, number to string if concat, string to number 
// == does type Coercion
// === does strict data type check

var a = "2";
if (2 == a) {
    console.log("Type Coercion done.")
}
if (2 === a) {
    console.log("Type Coercion not done/ Strict checking.")
}
console.log("2"+2)
console.log(true + 2)
console.log(false * 2)

if (true == 'true') {
    console.log("true string is coerced to NaN so not execute.")
}
console.log(true == 1) //1->true

var b = "2" * 2
console.log(b)