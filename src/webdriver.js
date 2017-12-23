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
    return command(`${this.sessionUrl}/url`);
  }

  get title() {
    return command(`${this.sessionUrl}/title`);
  }

  get window() {
    return command(`${this.sessionUrl}/window`);
  }

  get windows() {
    return command(`${this.sessionUrl}/window/handles`);
  }

  get rect() {
    return command(`${this.sessionUrl}/window/rect`);
  }

  get activeElement() {
    return command(`${this.sessionUrl}/element/active`);
  }

  get source() {
    return command(`${this.sessionUrl}/source`);
  }

  get cookies() {
    return command(`${this.sessionUrl}/cookie`);
  }

  cookie(name) {
    return command(`${this.sessionUrl}/cookie/${name}`);
  }

  get alertText() {
    return command(`${this.sessionUrl}/alert/text`);
  }

  get screenshot() {
    return command(`${this.sessionUrl}/screenshot`);
  }
}
