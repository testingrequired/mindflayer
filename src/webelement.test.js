import { WebElement } from "./webelement";

describe("WebElement", () => {
  let id, webelement, session;

  beforeEach(() => {
    id = "foobar";
    webelement = new WebElement(id);
  });

  describe("id", () => {
    it("should have id", () => {
      expect(webelement).toHaveProperty("id");
      expect(webelement.id).toEqual(id);
    });
  });
});
