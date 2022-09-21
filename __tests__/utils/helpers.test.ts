import { randomInt } from "../../utils/helpers";

describe("Edit Helpers File", () => {
  it("Should return Number between 10 and 1", () => {
    expect(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(randomInt(1, 10))
    ).toBeTruthy();
  });
});
