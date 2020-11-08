var express = require("express");
var router = express.Router();
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

/* GET home page. */
router.get("/", cors(corsOptions), function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
