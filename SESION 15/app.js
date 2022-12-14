const express = require("express")
const app = express();
const port = 3000;
const resta = 15 - 7;

app.get("/", (req, res) => {
    res.send(`Hola mundo Express Js la resta de 15-7=${resta}`);
})

app.get("/user", (req, res) => {
    res.send("Welcome user")
})

app.listen(port, () => {
    console.log(`Server running on at http://localhost:${port}`, port);
    console.log("My name is Rodrigo Vásquez Peralta", port);
});