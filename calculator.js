
const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let a = Number(req.body.num1);
    let b = Number(req.body.num2);
    let result = a + b;
    res.end("The result of calculation is: " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = (weight)/(height*height);
    res.end("Your BMI is: " + bmi);
});

app.listen(3000, function() {
    console.log("Server is running at 3000...");
});