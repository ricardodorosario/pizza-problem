var express = require("express");
var router = express.Router();
var { getVotesPerUsername } = require("../app/votesBusiness");
var { checkUser } = require("../app/usersBusiness");

/* POST login. */
router.post("/", function (req, res, next) {
  if (checkUser(req.body.username, req.body.password)) {
    res.send({
      valid: true,
      message: "",
      votes: getVotesPerUsername(req.body.username),
    });
  } else {
    res.send({ valid: false, message: "Username or password isn't right" });
  }
});

module.exports = router;
