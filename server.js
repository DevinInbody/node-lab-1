// const http = require("http");
// const quote = require("./quotes");
// const port = 3000;

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-type": "text/plain"});
//        res.write(quotes[Math.floor(Math.random() * facts.length)]);
//     res.end();
// }).listen(3000);


const express = require("express");
const app = express();
const port = 3000
const quotes = require("./quotes");
app.listen (port, () => console.log ('listening on port:', port));

app.get("/", (req, res) => {
    console.log(quotes[Math.floor(Math.random() * quotes.length)])
    res.json(quotes[Math.floor(Math.random() * quotes.length)]);
    res.end();
})
