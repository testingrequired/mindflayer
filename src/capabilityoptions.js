export class CapabilityOptions {
  constructor() {
    this.browserName = "";
    this.browserVersion = "";
    this.platformName = "";
    this.acceptInsecureCerts = false;
    this.pageLoadStrategy = "";
    this.proxy = {};
    this.setWindowRect = false;
    this.timeouts = {};
    this.unhandledPromptBehavior = "";
  }
}
