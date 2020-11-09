var express = require("express");
var router = express.Router();
var { setVotes, getVotesPerUsername } = require("../api/votesBusiness");

/* POST vote. */
router.post("/", function (req, res, next) {
  setVotes(req.body.username, req.body.votes);
  res.send({
    valid: true,
    message: "",
    votes: getVotesPerUsername(req.body.username),
  });
});

module.exports = router;
