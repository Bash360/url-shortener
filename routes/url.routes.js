const express = require('express');

const router = express.Router();
const {encode } = require('../services/shortUrl.service');

router.post('/encode',encode);

router.get('/decode/:shortUrl',);

router.get('/statistic/:shortUrl',);


module.exports = router;