var express = require('express');
var router = express.Router();
import UserCtrl from '../controllers/User.js';

/* GET users ressource. */
router.get('/', UserCtrl.get);

module.exports = router;