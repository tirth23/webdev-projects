const convertToRs = (dollar) => {
    if (typeof dollar === "number") {
        return dollar * 64
    } else {
        throw Error("Amount needs to be in number")
    }
}

try {
    const myValue = convertToRs('five')
    console.log(myValue);
} catch (e) {
    console.log(e);
}
console.log("It will Run with try catch.")
