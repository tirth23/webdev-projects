const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "a19f736fb2b9d81fbefdf933f5a6f384";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +  "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode);
        // console.log(response);

        response.on("data", function(data1){
            const weatherData = JSON.parse(data1);    //data1 is in hexadicimal code so need to convert it js object
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL ="https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query +" is " + temp + " degress Celcius.</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
        });
    });
});

    



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

