var { addVoter } = require("./votesBusiness");

var users = [
  { Username: "John", Password: "John" },
  { Username: "Mary", Password: "Mary" },
  { Username: "Gary", Password: "Gary" },
  { Username: "Lucas", Password: "Lucas" },
  { Username: "Ann", Password: "Ann" },
  { Username: "Maria", Password: "Maria" },
  { Username: "Suzie", Password: "Suzie" },
  { Username: "Mario", Password: "Mario" },
  { Username: "Carlos", Password: "Carlos" },
  { Username: "Donald", Password: "Donald" },
];

function getUsers() {
  return users;
}

function addUser(username, password) {
  Object.assign(users, [{ Username: username, Password: password }]);
  addVoter(username);
}

function checkUser(username, password) {
  var hasUserValid = users.filter(
    (usr) =>
      usr.Username.localeCompare(username) === 0 &&
      usr.Password.localeCompare(password) === 0
  );
  console.log(hasUserValid, users, username, password);
  if (hasUserValid.length > 0) {
    return true;
  }
  return false;
}

module.exports = { getUsers, addUser, checkUser };
