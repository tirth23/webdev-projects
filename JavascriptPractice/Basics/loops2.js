const mystate = [
    "Gujarat", 
    1947,
    "Maharastra",
];
mystate.forEach((s) => (console.log(s)));

for (const n of mystate){
    console.log(n)
}

const symbols = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram"
};

for (const n in symbols){
    console.log(`Key: ${n} and Value: ${symbols[n]}`)
}

const days = ["mon", "tue", "wed", "thu"];

function hello() {
    console.log("HEllo");
}

days.forEach(hello);
days.forEach(function() {
    console.log("Bye")
});
//without name function is callback function.
days.forEach(function(d, index) {
    console.log(index+1, d);
}); 