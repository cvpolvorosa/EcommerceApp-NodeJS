const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname,'../','views', 'shop.html')); //__dirname is a global var that holds the absolute path on the OS to the project folder
    //used ../ to go up one level because shop.js file is under routes folder
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;