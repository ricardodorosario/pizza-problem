var express = require("express");
var router = express.Router();

/* POST logout. */
router.post("/", function (req, res, next) {
  res.send({
    valid: true,
    message: "",
  });
});

module.exports = router;
