var getChart = require("../api/chartBusiness");

describe("Getting Chart Test", () => {
  it("should return an Object", () => {
    expect(getChart()).toBeDefined();
  });
});
