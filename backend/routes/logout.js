var express = require("express");
var router = express.Router();
var getChart = require("../app/chartBusiness");

/* POST logout. */
router.post("/", function (req, res, next) {
  res.send({
    valid: true,
    message: "",
    rankingChart: getChart(),
  });
});

module.exports = router;
