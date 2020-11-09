var { getUsers, addUser, checkUser } = require("../api/usersBusiness");

test("Should NOT have this user", () => {
  const expected = [{ Username: "Ricardo", Password: "Ricardo" }];
  expect(getUsers()).toEqual(expect.not.arrayContaining(expected));
});

test("Should have this user after adding it", () => {
  const expected = [{ Username: "Ricardo", Password: "Ricardo" }];
  addUser("Ricardo", "Ricardo");
  expect(getUsers()).toEqual(expect.arrayContaining(expected));
});

test("Should return true checking an user", () => {
  const expected = [{ Username: "Ricardo", Password: "Ricardo" }];
  expect(checkUser("Ricardo", "Ricardo")).toBeTruthy();
});

test("Should return false checking an user with wrong password", () => {
  const expected = [{ Username: "Ricardo", Password: "Ricardo" }];
  expect(checkUser("Ricardo", "1234")).toBeFalsy();
});
