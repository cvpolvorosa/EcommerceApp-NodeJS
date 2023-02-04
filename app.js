const http = require('http');

const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:true})); //Parses encoded data from the form then proceeds to next()

app.use(adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000);