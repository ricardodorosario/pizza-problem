var express = require("express");
var router = express.Router();
var { addUser } = require("../api/usersBusiness");

/* POST signup listing. */
router.post("/", function (req, res, next) {
  const result = addUser(req.body.username, req.body.password);
  res.send(result);
});

module.exports = router;
