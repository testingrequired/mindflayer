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

    it("should be a string", () => {
      expect(typeof capabilityOptions.browserName).toBe("string");
    });
  });

  describe("browserVersion", () => {
    it("should have browserVersion", () => {
      expect(capabilityOptions).toHaveProperty("browserVersion");
    });

    it("should be a string", () => {
      expect(typeof capabilityOptions.browserVersion).toBe("string");
    });
  });

  describe("platformName", () => {
    it("should have platformName", () => {
      expect(capabilityOptions).toHaveProperty("platformName");
    });

    it("should be a string", () => {
      expect(typeof capabilityOptions.platformName).toBe("string");
    });
  });

  describe("acceptInsecureCerts", () => {
    it("should have acceptInsecureCerts", () => {
      expect(capabilityOptions).toHaveProperty("acceptInsecureCerts");
    });

    it("should be a boolean", () => {
      expect(typeof capabilityOptions.acceptInsecureCerts).toBe("boolean");
    });
  });

  describe("pageLoadStrategy", () => {
    it("should have pageLoadStrategy", () => {
      expect(capabilityOptions).toHaveProperty("pageLoadStrategy");
    });

    it("should be a string", () => {
      expect(typeof capabilityOptions.pageLoadStrategy).toBe("string");
    });
  });

  describe("proxy", () => {
    it("should have proxy", () => {
      expect(capabilityOptions).toHaveProperty("proxy");
    });

    it("should be an object", () => {
      expect(typeof capabilityOptions.proxy).toBe("object");
    });
  });

  describe("setWindowRect", () => {
    it("should have setWindowRect", () => {
      expect(capabilityOptions).toHaveProperty("setWindowRect");
    });

    it("should be a boolean", () => {
      expect(typeof capabilityOptions.setWindowRect).toBe("boolean");
    });
  });

  describe("timeouts", () => {
    it("should have timeouts", () => {
      expect(capabilityOptions).toHaveProperty("timeouts");
    });

    it("should be an object", () => {
      expect(typeof capabilityOptions.timeouts).toBe("object");
    });
  });

  describe("unhandledPromptBehavior", () => {
    it("should have unhandledPromptBehavior", () => {
      expect(capabilityOptions).toHaveProperty("unhandledPromptBehavior");
    });

    it("should be a string", () => {
      expect(typeof capabilityOptions.unhandledPromptBehavior).toBe("string");
    });
  });
});
