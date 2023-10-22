const uno = () => {
    console.log("I am One.");
};
const dos = () => {
    setTimeout(() => {
        console.log("Woohoo!")
    }, 3000)                         //after 3 second statement will execute
    console.log("I am Two.");
};
const tres = () => {
    console.log("I am Three.");
};
uno();
dos();
tres();