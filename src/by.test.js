import { By } from "./by";

describe("By", () => {
  let by, value;

  beforeEach(() => {
    value = chance.guid();
  });

  describe("css", () => {
    describe("using", () => {
      it("should return css strategy string", () => {
        expect(By.css(value).using).toEqual("css selector");
      });
    });
  });

  describe("xpath", () => {
    describe("using", () => {
      it("should return xpath strategy string", () => {
        expect(By.xpath(value).using).toEqual("xpath");
      });
    });
  });

  describe("tagName", () => {
    describe("using", () => {
      it("should return tag name strategy string", () => {
        expect(By.tagName(value).using).toEqual("tag name");
      });
    });
  });

  describe("linkText", () => {
    describe("using", () => {
      it("should return link text strategy string", () => {
        expect(By.linkText(value).using).toEqual("link text");
      });
    });
  });

  describe("partialLinkText", () => {
    describe("using", () => {
      it("should return partial link text strategy string", () => {
        expect(By.partialLinkText(value).using).toEqual("partial link text");
      });
    });
  });
});
