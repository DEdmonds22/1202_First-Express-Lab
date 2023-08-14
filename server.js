const express = require("express");
const app = express();

/* GREETINGS */
app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, Stranger</h1>");
});

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello ${name}! How have you been?</h1>`);
});

/* TIP CALCULATOR */
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = `${req.params.tipPercentage}%`;
    const totalBill = total + (total * parseFloat (req.params.tipPercentage)/100);
    res.send(`
        <h1>Bill: </h1>
        <h2>${total}</h2>
        <h1>Tip Percentage: </h1>
        <h2>${tipPercentage}</h2>
        <h1>Total Bill Amount: </h1>
        <h2>${totalBill}</h2>
    `)
});

app.listen("3000", (req, res) => {
    console.log("loaded");
});