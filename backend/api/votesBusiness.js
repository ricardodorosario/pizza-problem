var votes = [
  { Username: "John", Votes: 155 },
  { Username: "Mary", Votes: 44 },
  { Username: "Gary", Votes: 23 },
  { Username: "Lucas", Votes: 12 },
  { Username: "Ann", Votes: 10 },
  { Username: "Maria", Votes: 9 },
  { Username: "Suzie", Votes: 1 },
  { Username: "Mario", Votes: -2 },
  { Username: "Carlos", Votes: -10 },
  { Username: "Donald", Votes: -15 },
];

//Gets the list of votes
function getVotes() {
  return votes;
}

//Return the number of votes of an username
function getVotesPerUsername(username) {
  var user = votes.filter((usr) => usr.Username === username);
  if (user.length > 0) {
    return user[0].Votes;
  }
  return 0;
}

//Set votes into an username
function setVotes(username, vts) {
  var newVotes = votes.map((usr) => {
    if (usr.Username === username) {
      Object.assign(usr, { Votes: vts });
    }
    return usr;
  });
  Object.assign(votes, newVotes);
}

//Add a new voter
function addVoter(username) {
  votes.push({ Username: username, Votes: 0 });
}

module.exports = { getVotes, setVotes, getVotesPerUsername, addVoter };
