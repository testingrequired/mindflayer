import { command } from "./command";
import { WebElement } from "./webelement";
import { By } from "./by";
import { NoSuchElementError } from "./errors";

export class WebDriver {
  constructor(remoteUrl, desiredCapabilities, commandFn = command) {
    this.remoteUrl = remoteUrl;
    this.desiredCapabilities = desiredCapabilities;
    this.sessionId = undefined;
    this.command = commandFn;
  }

  get url() {
    return (async () => {
      const response = await this.command(`${this.sessionUrl}/url`, "GET");
      const data = await response.json();
      return data.url;
    })();
  }

  get title() {
    return (async () => {
      const response = await this.command(`${this.sessionUrl}/title`, "GET");
      const data = await response.json();
      return data.value;
    })();
  }

  get source() {
    return (async () => {
      const response = await this.command(`${this.sessionUrl}/source`, "GET");
      const data = await response.json();
      return data.source;
    })();
  }

  get screenshot() {
    return (async () => {
      const response = await this.command(
        `${this.sessionUrl}/screenshot`,
        "GET"
      );
      const data = await response.json();
      return data.value;
    })();
  }

  screenshotElement(elementId) {
    return (async () => {
      const response = await this.command(
        `${this.sessionUrl}/element/${elementId}/screenshot`,
        "GET"
      );
      const data = await response.json();
      return data.value;
    })();
  }

  // Session

  async start() {
    let sessionResponse, responseData, sessionId, driver;

    sessionResponse = await this.command(`${this.remoteUrl}/session`, "POST", {
      desiredCapabilities: this.desiredCapabilities
    });

    responseData = await sessionResponse.json();
    sessionId = responseData.sessionId;
    this.sessionId = sessionId;
  }

  async quit() {
    const response = await this.command(`${this.sessionUrl}`, "DELETE");
    this.sessionId = undefined;
    return await response.json();
  }

  get sessionUrl() {
    return `${this.remoteUrl}/session/${this.sessionId}`;
  }

  get timeouts() {
    return (async () => {
      const response = await this.command(`${this.sessionUrl}/timeouts`, "GET");
      const data = await response.json();
      return data;
    })();
  }

  // Navigation

  go(url) {
    return this.command(`${this.sessionUrl}/url`, "POST", { url });
  }

  back(url) {
    return this.command(`${this.sessionUrl}/back`, "POST");
  }

  forward(url) {
    return this.command(`${this.sessionUrl}/forward`, "POST");
  }

  refresh(url) {
    return this.command(`${this.sessionUrl}/refresh`, "POST");
  }

  // Windows

  get window() {
    return this.command(`${this.sessionUrl}/window`, "GET");
  }

  close(handle) {
    return this.command(`${this.sessionUrl}/window`, "DELETE");
  }

  switchWindow(handle) {
    return this.command(`${this.sessionUrl}/window`, "POST", { handle });
  }

  get windows() {
    return this.command(`${this.sessionUrl}/window/handles`, "GET");
  }

  get rect() {
    return this.command(`${this.sessionUrl}/window/rect`, "GET");
  }

  setRect(rect) {
    return this.command(`${this.sessionUrl}/window/rect`, "POST", rect);
  }

  maximize() {
    return this.command(`${this.sessionUrl}/window/maximize`, "POST");
  }

  minimize() {
    return this.command(`${this.sessionUrl}/window/minimize`, "POST");
  }

  fullscreen() {
    return this.command(`${this.sessionUrl}/window/fullscreen`, "POST");
  }

  // Frames

  switchFrame(handle) {
    return this.command(`${this.sessionUrl}/frame`, "POST", { handle });
  }

  switchToParentFrame() {
    return this.command(`${this.sessionUrl}/frame/parent`, "POST");
  }

  // Elements

  get activeElement() {
    return this.command(`${this.sessionUrl}/element/active`, "GET");
  }

  async findElement(by, webElementClass = WebElement) {
    const response = await this.command(
      `${this.sessionUrl}/element`,
      "POST",
      by
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new NoSuchElementError(data.value.message);
    }

    return new webElementClass(data.value.ELEMENT, this);
  }

  async findElements(by, webElementClass = WebElement) {
    const response = await this.command(
      `${this.sessionUrl}/elements`,
      "POST",
      by
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new Error(data.value.message);
    }

    return data.value.map(v => new webElementClass(v.ELEMENT, this));
  }

  async findElementFromElement(
    fromElementId,
    by,
    webElementClass = WebElement
  ) {
    const response = await this.command(
      `${this.sessionUrl}/element/${fromElementId}/element`,
      "POST",
      by
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new NoSuchElementError(data.value.message);
    }

    return new webElementClass(data.value.ELEMENT, this);
  }

  async findElementsFromElement(
    fromElementId,
    by,
    webElementClass = WebElement
  ) {
    const response = await this.command(
      `${this.sessionUrl}/element/${fromElementId}/elements`,
      "POST",
      by
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new Error(data.value.message);
    }

    return data.value.map(v => new webElementClass(v.ELEMENT, this));
  }

  async $(cssSelector, webElementClass) {
    return this.findElement(By.css(cssSelector), webElementClass);
  }

  async $$(cssSelector, webElementClass) {
    return this.findElements(By.css(cssSelector), webElementClass);
  }

  async $x(xpathSelector, webElementClass) {
    return this.findElements(By.xpath(xpathSelector), webElementClass);
  }

  async click(elementId) {
    const response = await this.command(
      `${this.sessionUrl}/element/${elementId}/click`,
      "POST"
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new Error(data.value.message);
    }

    return data.value;
  }

  async clear(elementId) {
    const response = await this.command(
      `${this.sessionUrl}/element/${elementId}/clear`,
      "POST"
    );

    const data = await response.json();

    if (data.status > 0) {
      throw new Error(data.value.message);
    }

    return data.value;
  }

  // Cookies

  get cookies() {
    return this.command(`${this.sessionUrl}/cookie`, "GET");
  }

  cookie(name) {
    return this.command(`${this.sessionUrl}/cookie/${name}`, "GET");
  }

  addCookie(cookie) {
    return this.command(`${this.sessionUrl}/cookie`, "POST", {
      cookie
    });
  }

  deleteCookie(name) {
    return this.command(`${this.sessionUrl}/cookie/${name}`, "DELETE");
  }

  deleteCookies() {
    return this.command(`${this.sessionUrl}/cookie`, "DELETE");
  }

  // Alerts

  dismissAlert() {
    return this.command(`${this.sessionUrl}/alert/dismiss`, "POST");
  }

  acceptAlert() {
    return this.command(`${this.sessionUrl}/alert/accept`, "POST");
  }

  get alertText() {
    return this.command(`${this.sessionUrl}/alert/text`, "GET");
  }
}
