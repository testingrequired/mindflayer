import { command } from "./command";

export class WebDriver {
  constructor(remoteUrl, session, commandFn = command) {
    this.remoteUrl = remoteUrl;
    this.session = session;
    this.command = commandFn;
  }

  get sessionUrl() {
    return `${this.remoteUrl}/session/${this.session}`;
  }

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

  get timeouts() {
    return this.command(`${this.sessionUrl}/timeouts`, "GET");
  }

  get url() {
    return this.command(`${this.sessionUrl}/url`, "GET");
  }

  get title() {
    return this.command(`${this.sessionUrl}/title`, "GET");
  }

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

  switchFrame(handle) {
    return this.command(`${this.sessionUrl}/frame`, "POST", { handle });
  }

  switchToParentFrame() {
    return this.command(`${this.sessionUrl}/frame/parent`, "POST");
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

  get activeElement() {
    return this.command(`${this.sessionUrl}/element/active`, "GET");
  }

  get source() {
    return this.command(`${this.sessionUrl}/source`, "GET");
  }

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

  dismissAlert() {
    return this.command(`${this.sessionUrl}/alert/dismiss`, "POST");
  }

  acceptAlert() {
    return this.command(`${this.sessionUrl}/alert/accept`, "POST");
  }

  get alertText() {
    return this.command(`${this.sessionUrl}/alert/text`, "GET");
  }

  get screenshot() {
    return this.command(`${this.sessionUrl}/screenshot`, "GET");
  }
}
