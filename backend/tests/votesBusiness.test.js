var { addUser } = require("../api/usersBusiness");
var {
  getVotes,
  setVotes,
  getVotesPerUsername,
  addVoter,
} = require("../api/votesBusiness");

test("Should NOT have this user", () => {
  const expected = [{ Username: "Ricardo", Votes: 10 }];
  expect(getVotes()).toEqual(expect.not.arrayContaining(expected));
});

test("Should have this user after adding it", () => {
  const expected = [{ Username: "Ricardo", Votes: 0 }];
  addUser("Ricardo", "Ricardo");
  expect(getVotes()).toEqual(expect.arrayContaining(expected));
});

test("Should have 1 vote after adding and setting vote", () => {
  setVotes("Ricardo", 1);
  expect(getVotesPerUsername("Ricardo")).toBe(1);
});

test("Should have this voter after adding it", () => {
  addVoter("Luis");
  expect(getVotesPerUsername("Luis")).toBe(0);
});
