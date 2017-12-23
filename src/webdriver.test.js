import { WebDriver } from "./webdriver";

describe("WebDriver", () => {
  let webdriver, remoteUrl, session, commandMock;

  beforeEach(() => {
    remoteUrl = "http://localhost:4000";
    session = "foobar";
    commandMock = jest.fn();

    webdriver = new WebDriver(remoteUrl, session, commandMock);
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
    it("should call command", () => {
      webdriver.url;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/url`,
        "GET"
      ]);
    });
  });

  describe("title", () => {
    it("should call command", () => {
      webdriver.title;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/title`,
        "GET"
      ]);
    });
  });

  describe("window", () => {
    it("should call command", () => {
      webdriver.window;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window`,
        "GET"
      ]);
    });
  });

  describe("windows", () => {
    it("should call command", () => {
      webdriver.windows;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/handles`,
        "GET"
      ]);
    });
  });

  describe("rect", () => {
    it("should call command", () => {
      webdriver.rect;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/rect`,
        "GET"
      ]);
    });
  });

  describe("activeElement", () => {
    it("should call command", () => {
      webdriver.activeElement;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/active`,
        "GET"
      ]);
    });
  });

  describe("source", () => {
    it("should call command", () => {
      webdriver.source;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/source`,
        "GET"
      ]);
    });
  });

  describe("cookies", () => {
    it("should call command", () => {
      webdriver.cookies;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie`,
        "GET"
      ]);
    });
  });

  describe("cookie", () => {
    it("should call command", () => {
      webdriver.cookie("foobar");

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie/foobar`,
        "GET"
      ]);
    });
  });

  describe("alertText", () => {
    it("should call command", () => {
      webdriver.alertText;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/alert/text`,
        "GET"
      ]);
    });
  });

  describe("screenshot", () => {
    it("should call command", () => {
      webdriver.screenshot;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/screenshot`,
        "GET"
      ]);
    });
  });
});
