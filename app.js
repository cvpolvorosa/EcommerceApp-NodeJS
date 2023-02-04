const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); //npm install --save body-parser

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: true })); //Parses encoded data from the form then proceeds to next()

app.use('/admin', adminRoutes); //adds /admin as the starting path for adminRoutes; also don't need to declare /admin everytime
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

const server = http.createServer(app);

server.listen(3000);