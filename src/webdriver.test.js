import { WebDriver } from "./webdriver";

describe("WebDriver", () => {
  let webdriver, remoteUrl, session, spy;

  beforeEach(() => {
    remoteUrl = "http://localhost:4000";
    session = "foobar";
    webdriver = new WebDriver(remoteUrl, session);
    fetch.resetMocks();
  });

  describe("remoteUrl", () => {
    it("should have remoteUrl", () => {
      expect(webdriver).toHaveProperty("remoteUrl");
      expect(webdriver.remoteUrl).toEqual(remoteUrl);
    });
  });

  describe("session", () => {
    it("should have session", () => {
      expect(webdriver).toHaveProperty("session");
      expect(webdriver.session).toEqual(session);
    });
  });

  describe("url", () => {
    it("should call fetch", () => {
      webdriver.url;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/url`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("title", () => {
    it("should call fetch", () => {
      webdriver.title;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/title`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("window", () => {
    it("should call fetch", () => {
      webdriver.window;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("windows", () => {
    it("should call fetch", () => {
      webdriver.windows;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/handles`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("rect", () => {
    it("should call fetch", () => {
      webdriver.rect;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/rect`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("activeElement", () => {
    it("should call fetch", () => {
      webdriver.activeElement;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/active`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("source", () => {
    it("should call fetch", () => {
      webdriver.source;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/source`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("cookies", () => {
    it("should call fetch", () => {
      webdriver.cookies;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("cookie", () => {
    it("should call fetch", () => {
      webdriver.cookie("foobar");

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie/foobar`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("alertText", () => {
    it("should call fetch", () => {
      webdriver.alertText;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/alert/text`,
        {
          method: "GET"
        }
      ]);
    });
  });

  describe("screenshot", () => {
    it("should call fetch", () => {
      webdriver.screenshot;

      expect(fetch.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/screenshot`,
        {
          method: "GET"
        }
      ]);
    });
  });
});
