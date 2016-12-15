var express = require('express');
var router = express.Router();
import MessageCtrl from '../controllers/Message.js';

/* GET message ressource. */
router.post('/', MessageCtrl.writeMessage);
//router.get('/', MessageCtrl.getAllMessages);

module.exports = router;
