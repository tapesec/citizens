var express = require('express');
var router = express.Router();
import POICtrl from '../controllers/POI.js';

/* GET informations ressource. */
router.post('/informations', POICtrl.writeInformation);
router.get('/', POICtrl.getPOIofCity);

module.exports = router;