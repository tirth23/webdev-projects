var a = 3;
console.log(a);
var c = false;
console.log(c)
var b
console.log(b);

// comment whole section ctrl+/
// SVGFEDropShadowElement
// SVGAnimatedPreserveAspectRatio

const x = 7 //can not be changed once assigned
console.log("hey"+x);
console.log("Hello",x);
console.log(`
    hello: ${a}
    how: ${x}
`);

console.log(5+7)

var num1=89
var num2=4
console.log(num1/num2)
console.log(Math.round(num1/num2))
console.log(typeof num1)

if (num1 > num2) {
    console.log("Yes");
} else {
    console.log("No");
}

var user = "Patel"
switch(user) {
    case "Tirth":
        console.log("Yes");
        break;
    case "Patel":
        console.log("NO");
        break;
    default:
        console.log("Default");
        break;
}

const google = "google";       //truthy value
const fb = null;               //falsy value
if (google) {
    console.log("1");
}
if (!!fb) {                      //!! convert falsy/truthy to boolean
    console.log("2");
}