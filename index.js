const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", function (req, res) {
    var num1 = parseInt(Math.random()*10);
    var num2 = parseInt(Math.random()*10);
    var answer = num1 + num2
    res.render("home", {
        num1: num1,
        num2: num2,
        answer : answer
    });
});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});