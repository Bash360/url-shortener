const express = require('express');

const router = express.Router();
const {encode,decode,statistics } = require('../services/shortUrl.service');

router.post('/encode',encode);

router.get('/decode/:shortUrl',decode);

router.get('/statistic/:shortUrl',statistics);


module.exports = router;