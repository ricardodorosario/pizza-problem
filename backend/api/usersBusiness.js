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

//Gets the list of users
function getUsers() {
  return users;
}

//Adds a new user and put him into the voters list
function addUser(username, password) {
  if (checkUserExists(username)) {
    return { valid: false, message: "User already exists." };
  } else {
    users.push({ Username: username, Password: password });
    addVoter(username);
    return { valid: true, message: "User successfuly added." };
  }
}

//Checks if the credentials of the user is alright
function checkUser(username, password) {
  var hasUserValid = users.filter(
    (usr) =>
      usr.Username.localeCompare(username) === 0 &&
      usr.Password.localeCompare(password) === 0
  );
  if (hasUserValid.length > 0) {
    return true;
  }
  return false;
}

//Checks the user exists
function checkUserExists(username) {
  var hasUser = users.filter(
    (usr) => usr.Username.localeCompare(username) === 0
  );
  if (hasUser.length > 0) {
    return true;
  }
  return false;
}

module.exports = { getUsers, addUser, checkUser };
