const mystate = [
    "Gujarat", 
    1947,
    "Maharastra",
];
for (let index = 0; index < mystate.length; index++) {
    if (typeof mystate[index] != "string") continue;
    console.log(mystate[index]);
    
}

let i = 0
while (i < mystate.length) {
    console.log(mystate[i]);
    i++;
}

let j = 0;
do {
    console.log(mystate[j]);
    j++;
} while (j < mystate.length);