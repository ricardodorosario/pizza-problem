var express = require("express");
var router = express.Router();
var { addUser } = require("../api/usersBusiness");

/* POST signup listing. */
router.post("/", function (req, res, next) {
  addUser(req.body.username, req.body.password);
  res.send({
    valid: true,
    message: "User added.",
  });
});

module.exports = router;
