import fetch from "node-fetch";
import { command } from "./command";

export class WebDriver {
  constructor(remoteUrl, session) {
    this.remoteUrl = remoteUrl;
    this.session = session;
  }

  get sessionUrl() {
    return `${this.remoteUrl}/session/${this.session}`;
  }

  go(url) {
    return command(`${this.sessionUrl}/url`, "POST", { url });
  }

  get url() {
    return command(`${this.sessionUrl}/url`, "GET");
  }

  get title() {
    return command(`${this.sessionUrl}/title`, "GET");
  }

  get window() {
    return command(`${this.sessionUrl}/window`, "GET");
  }

  get windows() {
    return command(`${this.sessionUrl}/window/handles`, "GET");
  }

  get rect() {
    return command(`${this.sessionUrl}/window/rect`, "GET");
  }

  get activeElement() {
    return command(`${this.sessionUrl}/element/active`, "GET");
  }

  get source() {
    return command(`${this.sessionUrl}/source`, "GET");
  }

  get cookies() {
    return command(`${this.sessionUrl}/cookie`, "GET");
  }

  cookie(name) {
    return command(`${this.sessionUrl}/cookie/${name}`, "GET");
  }

  get alertText() {
    return command(`${this.sessionUrl}/alert/text`, "GET");
  }

  get screenshot() {
    return command(`${this.sessionUrl}/screenshot`, "GET");
  }
}
