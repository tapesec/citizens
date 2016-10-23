var express = require('express');
var router = express.Router();
var konsole = require('./../utils/CustomLog');
import path from 'path';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader('Content-type','text/html');
	res.sendFile(path.resolve(__dirname + '/../../client/index.html'));
});

module.exports = router;
