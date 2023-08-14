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
    `);
});

/* Magic 8 Ball */
const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic", (req, res) => {
    res.send(`
        <h1>Write your question behind the existing URL!</h1>
    `);
});

app.get("/magic/:question", (req, res) => {
    const question = req.params.question.replace(/%20/g, " ");
    const randomBallResponse = ballResponse[Math.floor(Math.random() * ballResponse.length)];
    res.send(`
        <h1>Your Question: ${question}?</h1>
        <h2>Answer: ${randomBallResponse}<h2>
    `);
});

app.listen("3000", (req, res) => {
    console.log("loaded");
});