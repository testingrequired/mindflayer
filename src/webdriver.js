import { command } from "./command";

export class WebDriver {
  constructor(remoteUrl, session, command = command) {
    this.remoteUrl = remoteUrl;
    this.session = session;
    this.command = command;
  }

  get sessionUrl() {
    return `${this.remoteUrl}/session/${this.session}`;
  }

  go(url) {
    return this.command(`${this.sessionUrl}/url`, "POST", { url });
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

  get windows() {
    return this.command(`${this.sessionUrl}/window/handles`, "GET");
  }

  get rect() {
    return this.command(`${this.sessionUrl}/window/rect`, "GET");
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

  get alertText() {
    return this.command(`${this.sessionUrl}/alert/text`, "GET");
  }

  get screenshot() {
    return this.command(`${this.sessionUrl}/screenshot`, "GET");
  }
}
