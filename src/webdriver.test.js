import { WebDriver } from "./webdriver";

describe("WebDriver", () => {
  let webdriver, session;

  beforeEach(() => {
    session = "foobar";
    webdriver = new WebDriver(session);
  });

  describe("session", () => {
    it("should have session", () => {
      expect(webdriver).toHaveProperty("session");
      expect(webdriver.session).toEqual(session);
    });

    it("should be a string", () => {
      expect(typeof webdriver.session).toBe("string");
    });
  });
});
