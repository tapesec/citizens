const express = require('express');
const router = express.Router();

import POICtrl from '../controllers/POI.js';

/* GET home page. */
router.post('/', POICtrl.add);

module.exports = router;
