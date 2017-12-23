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

  describe("timeouts", () => {
    it("should call command", () => {
      webdriver.timeouts;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/timeouts`,
        "GET"
      ]);
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

  describe("go", () => {
    it("should call command", () => {
      const url = "someurl";

      webdriver.go(url);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/url`,
        "POST",
        { url }
      ]);
    });
  });

  describe("back", () => {
    it("should call command", () => {
      webdriver.back();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/back`,
        "POST"
      ]);
    });
  });

  describe("forward", () => {
    it("should call command", () => {
      webdriver.forward();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/forward`,
        "POST"
      ]);
    });
  });

  describe("refresh", () => {
    it("should call command", () => {
      webdriver.refresh();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/refresh`,
        "POST"
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

  describe("close", () => {
    it("should call command", () => {
      const handle = "widowhandle";

      webdriver.close(handle);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window`,
        "DELETE"
      ]);
    });
  });

  describe("switchWindow", () => {
    it("should call command", () => {
      const handle = "widowhandle";

      webdriver.switchWindow(handle);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window`,
        "POST",
        { handle }
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

  describe("switchFrame", () => {
    it("should call command", () => {
      const handle = "framehandle";

      webdriver.switchFrame(handle);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/frame`,
        "POST",
        { handle }
      ]);
    });
  });

  describe("switchToParentFrame", () => {
    it("should call command", () => {
      const handle = "framehandle";

      webdriver.switchToParentFrame();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/frame/parent`,
        "POST"
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

  describe("setRect", () => {
    it("should call command", () => {
      const width = 1920;
      const height = 1080;
      const x = 0;
      const y = 0;

      webdriver.setRect({ width, height, x, y });

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/rect`,
        "POST",
        { width, height, x, y }
      ]);
    });
  });

  describe("maximize", () => {
    it("should call command", () => {
      webdriver.maximize();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/maximize`,
        "POST"
      ]);
    });
  });

  describe("minimize", () => {
    it("should call command", () => {
      webdriver.minimize();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/minimize`,
        "POST"
      ]);
    });
  });

  describe("fullscreen", () => {
    it("should call command", () => {
      webdriver.fullscreen();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window/fullscreen`,
        "POST"
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

  describe("addCookie", () => {
    it("should call command", () => {
      const cookie = {
        name: "cookiename",
        value: "cookievalue",
        path: "cookiepath",
        domain: "cookiedomain",
        secure: "cookiesecure",
        httpOnly: "cookiehttponly",
        expiry: "cookieexpiry"
      };

      webdriver.addCookie(cookie);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie`,
        "POST",
        { cookie }
      ]);
    });
  });

  describe("deleteCookie", () => {
    it("should call command", () => {
      const name = "cookiename";

      webdriver.deleteCookie(name);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie/${name}`,
        "DELETE"
      ]);
    });
  });

  describe("deleteCookies", () => {
    it("should call command", () => {
      webdriver.deleteCookies();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie`,
        "DELETE"
      ]);
    });
  });

  describe("dismissAlert", () => {
    it("should call command", () => {
      webdriver.dismissAlert();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/alert/dismiss`,
        "POST"
      ]);
    });
  });

  describe("acceptAlert", () => {
    it("should call command", () => {
      webdriver.acceptAlert();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/alert/accept`,
        "POST"
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
