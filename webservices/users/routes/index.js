const express = require('express');
const router = express.Router();

import UserCtrl from '../controllers/User.js';

/* GET home page. */
router.get('/', UserCtrl.get);
router.post('/', UserCtrl.add);

module.exports = router;
