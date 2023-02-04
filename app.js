const http = require('http');

const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express();

app.use(bodyParser.urlencoded({extended:true})); //Parses encoded data from the form then proceeds to next()

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hello</h1>');
});

const server = http.createServer(app);

server.listen(3000);