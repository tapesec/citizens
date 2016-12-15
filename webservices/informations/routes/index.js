const express = require('express');
const router = express.Router();

import InformationCtrl from './../controllers/Information.js';

/* GET home page. */
router.post('/', InformationCtrl.saveInformation);

module.exports = router;
