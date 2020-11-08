var express = require("express");
var router = express.Router();
var getChart = require("../app/chartBusiness");

router.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(getChart(), null, 3));
});

module.exports = router;
