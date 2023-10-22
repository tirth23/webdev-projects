//works in console.
fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    //console.log("API:", response.json());
    return response.json();
})
.then((data) => {
    //console.log("Data is:", data);
    var joke = data.value;
    console.log("JOKE: ", joke);
})
.catch();