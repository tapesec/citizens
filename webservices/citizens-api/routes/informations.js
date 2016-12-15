var express = require('express');
var router = express.Router();
import InformationCtrl from '../controllers/Information.js';

/* GET informations ressource. */
router.post('/', InformationCtrl.writeInformation);

module.exports = router;