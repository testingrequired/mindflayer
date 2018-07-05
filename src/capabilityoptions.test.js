import { CapabilityOptions } from "./capabilityoptions";

describe("CapabilityOptions", () => {
  let capabilityOptions;

  beforeEach(() => {
    capabilityOptions = new CapabilityOptions();
  });

  describe("browserName", () => {
    it("should have browserName", () => {
      expect(capabilityOptions).toHaveProperty("browserName");
    });
  });

  describe("browserVersion", () => {
    it("should have browserVersion", () => {
      expect(capabilityOptions).toHaveProperty("browserVersion");
    });
  });

  describe("platformName", () => {
    it("should have platformName", () => {
      expect(capabilityOptions).toHaveProperty("platformName");
    });
  });

  describe("acceptInsecureCerts", () => {
    it("should have acceptInsecureCerts", () => {
      expect(capabilityOptions).toHaveProperty("acceptInsecureCerts");
    });
  });

  describe("pageLoadStrategy", () => {
    it("should have pageLoadStrategy", () => {
      expect(capabilityOptions).toHaveProperty("pageLoadStrategy");
    });
  });

  describe("proxy", () => {
    it("should have proxy", () => {
      expect(capabilityOptions).toHaveProperty("proxy");
    });
  });

  describe("setWindowRect", () => {
    it("should have setWindowRect", () => {
      expect(capabilityOptions).toHaveProperty("setWindowRect");
    });
  });

  describe("timeouts", () => {
    it("should have timeouts", () => {
      expect(capabilityOptions).toHaveProperty("timeouts");
    });
  });

  describe("unhandledPromptBehavior", () => {
    it("should have unhandledPromptBehavior", () => {
      expect(capabilityOptions).toHaveProperty("unhandledPromptBehavior");
    });
  });
});
