const express = require("express");

const router = express.Router();
const {
  encode,
  decode,
  statistics,
  goto,
} = require("../services/shortUrl.service");

router.post("/encode", encode);

router.get("/decode/:shortUrl", decode);

router.get("/statistic/:shortUrl", statistics);

router.get("/:shortUrl", goto);

module.exports = router;
