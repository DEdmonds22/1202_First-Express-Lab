/* GREETINGS */
const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, Stranger</h1>");
});

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello ${name}! How have you been?</h1>`);
});

app.listen("3000", (req, res) => {
    console.log("loaded");
});