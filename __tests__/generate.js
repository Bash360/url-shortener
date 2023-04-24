const generateRandomChar = require("../utils/generateRandomChar");
describe("generate Short URl assumptions", () => {
  test("should check if it generates exact length of random string asked for", () => {
    expect(generateRandomChar(6).length).toBe(6);
    expect(generateRandomChar(8).length).toBe(8);
    expect(generateRandomChar().length).toBe(6);
  });
});
