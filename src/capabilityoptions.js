export class CapabilityOptions {
  constructor(capabilities = {}) {
    this.browserName = capabilities.browserName;
    this.browserVersion = capabilities.browserVersion;
    this.platformName = capabilities.platformName;
    this.acceptInsecureCerts = capabilities.acceptInsecureCerts;
    this.pageLoadStrategy = capabilities.pageLoadStrategy;
    this.proxy = capabilities.proxy;
    this.setWindowRect = capabilities.setWindowRect;
    this.timeouts = capabilities.timeouts;
    this.unhandledPromptBehavior = capabilities.unhandledPromptBehavior;
  }
}
