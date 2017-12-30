import { WebDriver } from "./webdriver";
import { By } from "../dist/mindflayer";

describe("WebDriver", () => {
  let webdriver, remoteUrl, desiredCapabilities, commandMock, responseJsonMock;

  beforeEach(() => {
    remoteUrl = chance.url();
    desiredCapabilities = { browserName: "chrome" };
    commandMock = jest.fn();
    responseJsonMock = jest.fn();
    commandMock.mockReturnValue(
      Promise.resolve({
        json: responseJsonMock
      })
    );

    webdriver = new WebDriver(remoteUrl, desiredCapabilities, commandMock);
  });

  describe("remoteUrl", () => {
    it("should have remoteUrl", () => {
      expect(webdriver).toHaveProperty("remoteUrl");
      expect(webdriver.remoteUrl).toEqual(remoteUrl);
    });
  });

  describe("desiredCapabilities", () => {
    it("should have desiredCapabilities", () => {
      expect(webdriver).toHaveProperty("desiredCapabilities");
      expect(webdriver.desiredCapabilities).toEqual(desiredCapabilities);
    });
  });

  describe("url", () => {
    let url;

    beforeEach(() => {
      url = chance.url();
      responseJsonMock.mockReturnValue(Promise.resolve({ url }));
    });

    it("should call command", () => {
      webdriver.url;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/url`,
        "GET"
      ]);
    });

    it("should return correct url", async () => {
      expect(await webdriver.url).toEqual(url);
    });
  });

  describe("title", () => {
    let value;

    beforeEach(() => {
      value = chance.guid();
      responseJsonMock.mockReturnValue(Promise.resolve({ value }));
    });

    it("should call command", () => {
      webdriver.title;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/title`,
        "GET"
      ]);
    });

    it("should return correct title", async () => {
      expect(await webdriver.title).toEqual(value);
    });
  });

  describe("source", () => {
    let source;

    beforeEach(() => {
      source = chance.string();
      responseJsonMock.mockReturnValue(Promise.resolve({ source }));
    });

    it("should call command", () => {
      webdriver.source;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/source`,
        "GET"
      ]);
    });

    it("should return correct source", async () => {
      expect(await webdriver.source).toEqual(source);
    });
  });

  describe("screenshot", () => {
    let value;

    beforeEach(() => {
      value = chance.guid();
      responseJsonMock.mockReturnValue(Promise.resolve({ value }));
    });

    it("should call command", () => {
      webdriver.screenshot;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/screenshot`,
        "GET"
      ]);
    });

    it("should return correct value", async () => {
      expect(await webdriver.screenshot).toEqual(value);
    });
  });

  describe("screenshotElement", () => {
    let elementId, value;

    beforeEach(() => {
      elementId = chance.guid();
      value = chance.guid();
      responseJsonMock.mockReturnValue(Promise.resolve({ value }));
    });

    it("should call command", async () => {
      await webdriver.screenshotElement(elementId);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/${elementId}/screenshot`,
        "GET"
      ]);
    });

    it("should return correct value", async () => {
      expect(await webdriver.screenshotElement(elementId)).toEqual(value);
    });
  });

  // Session

  describe("start", () => {
    let sessionId;

    beforeEach(() => {
      sessionId = chance.guid();
      responseJsonMock.mockReturnValue(Promise.resolve({ sessionId }));
      webdriver.start();
    });

    it("should set webdriver session id", () => {
      expect(webdriver.sessionId).toEqual(sessionId);
    });
  });

  describe("quit", () => {
    beforeEach(() => {
      webdriver.quit();
    });

    it("should call command", () => {
      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}`,
        "DELETE"
      ]);
    });

    it("should set sessionId to undefined", () => {
      expect(webdriver.sessionId).toBeUndefined();
    });
  });

  describe("timeouts", () => {
    let script, pageLoad, implicit;

    beforeEach(() => {
      script = chance.d10();
      pageLoad = chance.d10();
      implicit = chance.d10();
      responseJsonMock.mockReturnValue(
        Promise.resolve({ script, pageLoad, implicit })
      );
    });

    it("should call command", () => {
      webdriver.timeouts;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/timeouts`,
        "GET"
      ]);
    });

    it("should return correct title", async () => {
      expect(await webdriver.timeouts).toEqual({ script, pageLoad, implicit });
    });
  });

  // Navigation

  describe("go", () => {
    it("should call command", () => {
      const url = chance.url();

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

  // Windows

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
      const handle = chance.guid();

      webdriver.close(handle);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/window`,
        "DELETE"
      ]);
    });
  });

  describe("switchWindow", () => {
    it("should call command", () => {
      const handle = chance.guid();

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
      const width = chance.integer();
      const height = chance.integer();
      const x = chance.d10();
      const y = chance.d10();

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

  // Frames

  describe("switchFrame", () => {
    it("should call command", () => {
      const handle = chance.guid();

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
      const handle = chance.guid();

      webdriver.switchToParentFrame();

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/frame/parent`,
        "POST"
      ]);
    });
  });

  // Elements

  describe("activeElement", () => {
    it("should call command", () => {
      webdriver.activeElement;

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/active`,
        "GET"
      ]);
    });
  });

  describe("findElement", () => {
    let by;

    beforeEach(() => {
      by = By.css("html");

      responseJsonMock.mockReturnValue(
        Promise.resolve({
          status: 0,
          value: {
            ELEMENT: chance.guid()
          }
        })
      );
    });

    it("should call command", async () => {
      await webdriver.findElement(by);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element`,
        "POST",
        by
      ]);
    });

    describe("when element found", () => {
      let elementId;

      beforeEach(() => {
        elementId = chance.guid();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: 0,
            value: {
              ELEMENT: elementId
            }
          })
        );
      });

      it("should return WebElement with found element's id", async () => {
        const element = await webdriver.findElement(by);
        expect(element.id).toEqual(elementId);
      });
    });

    describe("when element is not found", () => {
      let message;

      beforeEach(() => {
        message = chance.string();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: chance.d10(),
            value: { message }
          })
        );
      });

      it("should raise NoSuchElementError", async () => {
        try {
          await webdriver.findElement(by);
          jest.fail("no error thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  describe("findElementFromElement", () => {
    let by, fromElementId;

    beforeEach(() => {
      by = By.css("html");
      fromElementId = chance.guid();

      responseJsonMock.mockReturnValue(
        Promise.resolve({
          status: 0,
          value: {
            ELEMENT: chance.guid()
          }
        })
      );
    });

    it("should call command", async () => {
      await webdriver.findElementFromElement(fromElementId, by);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/${fromElementId}/element`,
        "POST",
        by
      ]);
    });

    describe("when element found", () => {
      let elementId;

      beforeEach(() => {
        elementId = chance.guid();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: 0,
            value: {
              ELEMENT: elementId
            }
          })
        );
      });

      it("should return WebElement with found element's id", async () => {
        const element = await webdriver.findElementFromElement(
          fromElementId,
          by
        );
        expect(element.id).toEqual(elementId);
      });
    });

    describe("when element is not found", () => {
      let message;

      beforeEach(() => {
        message = chance.string();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: chance.d10(),
            value: { message }
          })
        );
      });

      it("should raise NoSuchElementError", async () => {
        try {
          await webdriver.findElementFromElement(fromElementId, by);
          jest.fail("no error thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  describe("$", () => {
    it("should call findElement with css selector strategy");
  });

  describe("findElements", () => {
    let by;

    beforeEach(() => {
      by = By.css("html");

      responseJsonMock.mockReturnValue(
        Promise.resolve({
          status: 0,
          value: [
            {
              ELEMENT: chance.guid()
            }
          ]
        })
      );
    });

    it("should call command", async () => {
      await webdriver.findElements(by);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/elements`,
        "POST",
        by
      ]);
    });

    describe("when one or more elements are found", () => {
      let expectedElementIds;

      beforeEach(() => {
        expectedElementIds = chance.n(chance.guid, chance.d10());

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: 0,
            value: expectedElementIds.map(elementId => ({
              ELEMENT: elementId
            }))
          })
        );
      });

      it("should return WebElement with found element's id", async () => {
        const elements = await webdriver.findElements(By.css("html"));
        const elementIds = elements.map(element => element.id);
        expect(elementIds).toEqual(expectedElementIds);
      });

      it("should return an array WebElements with found elements' ids");
    });

    describe("when zero elements are found", () => {
      beforeEach(() => {
        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: 0,
            value: []
          })
        );
      });

      it("should return an empty array", async () => {
        const elements = await webdriver.findElements(By.css("html"));
        expect(elements).toEqual([]);
      });
    });

    describe("when non zero status is returned", () => {
      let message;

      beforeEach(() => {
        message = chance.string();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: chance.d10(),
            value: {
              message
            }
          })
        );
      });

      it("should throw error with response error message", async () => {
        try {
          await webdriver.findElements(By.css("html"));
          jest.fail("no error thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  describe("findElementsFromElement", () => {
    let by, fromElementId;

    beforeEach(() => {
      by = By.css("html");
      fromElementId = chance.guid();

      responseJsonMock.mockReturnValue(
        Promise.resolve({
          status: 0,
          value: chance.n(chance.guid, chance.d10()).map(elementId => ({
            ELEMENT: elementId
          }))
        })
      );
    });

    it("should call command", async () => {
      await webdriver.findElementsFromElement(fromElementId, by);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/${fromElementId}/elements`,
        "POST",
        by
      ]);
    });

    describe("when element found", () => {
      let expectedElementIds;

      beforeEach(() => {
        expectedElementIds = chance.n(chance.guid, chance.d10());

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: 0,
            value: expectedElementIds.map(elementId => ({
              ELEMENT: elementId
            }))
          })
        );
      });

      it("should return WebElement with found element's id", async () => {
        const elements = await webdriver.findElementsFromElement(
          fromElementId,
          by
        );
        const elementIds = elements.map(element => element.id);
        expect(elementIds).toEqual(expectedElementIds);
      });
    });

    describe("when element is not found", () => {
      let message;

      beforeEach(() => {
        message = chance.string();

        responseJsonMock.mockReturnValue(
          Promise.resolve({
            status: chance.d10(),
            value: { message }
          })
        );
      });

      it("should raise NoSuchElementError", async () => {
        try {
          await webdriver.findElementFromElement(fromElementId, by);
          jest.fail("no error thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  describe("$$", () => {
    it("should call findElements with css selector strategy");
  });

  describe("$x", () => {
    it("should call findElements with xpath strategy");
  });

  describe("click", () => {
    let elementId, clickResponse;

    beforeEach(() => {
      elementId = chance.guid();
      clickResponse = {
        status: 0,
        value: null
      };
      responseJsonMock.mockReturnValue(Promise.resolve(clickResponse));
    });

    it("should call command", () => {
      webdriver.click(elementId);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/${elementId}/click`,
        "POST"
      ]);
    });

    describe("when element is clickable", () => {
      it("should return null on success", async () => {
        expect(await webdriver.click(elementId)).toBeNull();
      });
    });

    describe("when element is blocked by another element", () => {
      const message = "click intercepted";

      beforeEach(() => {
        clickResponse.status = chance.d10();
        clickResponse.value = { message };
      });

      it("should throw click intercepted error", async () => {
        try {
          await webdriver.click(elementId);
          jest.fn("error not thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });

    describe("when element is outside viewport", () => {
      const message = "element not interactable";

      beforeEach(() => {
        clickResponse.status = chance.d10();
        clickResponse.value = { message };
      });

      it("should throw element not interactable error", async () => {
        try {
          await webdriver.click(elementId);
          jest.fn("error not thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  describe("clear", () => {
    let elementId, clearResponse;

    beforeEach(() => {
      elementId = chance.guid();
      clearResponse = {
        status: 0,
        value: null
      };
      responseJsonMock.mockReturnValue(Promise.resolve(clearResponse));
    });

    it("should call command", () => {
      webdriver.clear(elementId);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/element/${elementId}/clear`,
        "POST"
      ]);
    });

    describe("when element is clearable", () => {
      it("should return null on success", async () => {
        expect(await webdriver.clear(elementId)).toBeNull();
      });
    });

    describe("when error is returned", () => {
      const message = chance.string();

      beforeEach(() => {
        clearResponse.status = chance.d10();
        clearResponse.value = { message };
      });

      it("should throw error", async () => {
        try {
          await webdriver.clear(elementId);
          jest.fn("error not thrown");
        } catch (e) {
          expect(e).toEqual(new Error(message));
        }
      });
    });
  });

  // Cookies

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
    let cookieName;

    beforeEach(() => {
      cookieName = chance.guid();
    });

    it("should call command", () => {
      webdriver.cookie(cookieName);

      expect(commandMock.mock.calls[0]).toEqual([
        `${webdriver.sessionUrl}/cookie/${cookieName}`,
        "GET"
      ]);
    });
  });

  describe("addCookie", () => {
    it("should call command", () => {
      const cookie = {
        name: chance.guid(),
        value: chance.guid(),
        path: chance.guid(),
        domain: chance.guid(),
        secure: chance.guid(),
        httpOnly: chance.guid(),
        expiry: chance.guid()
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
      const name = chance.guid();

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

  // Alerts

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
});
