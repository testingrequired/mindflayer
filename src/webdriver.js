import { command } from "./command";

export class WebDriver {
  constructor(remoteUrl, desiredCapabilities, commandFn = command) {
    this.remoteUrl = remoteUrl;
    this.desiredCapabilities = desiredCapabilities;
    this.sessionId = undefined;
    this.command = commandFn;
  }

  get url() {
    return this.command(`${this.sessionUrl}/url`, "GET");
  }

  get title() {
    return (async () => {
      const response = await this.command(`${this.sessionUrl}/title`, "GET");
      const data = await response.json();
      return data.value;
    })();
  }

  get source() {
    return this.command(`${this.sessionUrl}/source`, "GET");
  }

  get screenshot() {
    return this.command(`${this.sessionUrl}/screenshot`, "GET");
  }

  // Session

  async start() {
    let sessionResponse, responseData, sessionId, driver;

    try {
      sessionResponse = await this.command(
        `${this.remoteUrl}/session`,
        "POST",
        {
          desiredCapabilities: this.desiredCapabilities
        }
      );
    } catch (e) {
      console.error(`Error starting session: ${e}`);
    }

    try {
      responseData = await sessionResponse.json();
    } catch (e) {
      console.error(`Error getting session response data: ${e}`);
    }

    try {
      sessionId = responseData.sessionId;
      this.sessionId = sessionId;
      console.info(`Session ID: ${this.sessionId}`);
      console.info(`Session URL: ${this.sessionUrl}`);
    } catch (e) {
      console.error(`Error getting session id: ${e}`);
    }
  }

  get sessionUrl() {
    return `${this.remoteUrl}/session/${this.sessionId}`;
  }

  get timeouts() {
    return this.command(`${this.sessionUrl}/timeouts`, "GET");
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
