import { ProxyOptions } from "./proxyoptions";

describe("ProxyOptions", () => {
  let proxyOptions;

  beforeEach(() => {
    proxyOptions = new ProxyOptions();
  });

  describe("proxyType", () => {
    it("should have proxyType", () => {
      expect(proxyOptions).toHaveProperty("proxyType");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.proxyType).toBe("string");
    });
  });

  describe("proxyAutoconfigUrl", () => {
    it("should have proxyAutoconfigUrl", () => {
      expect(proxyOptions).toHaveProperty("proxyAutoconfigUrl");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.proxyAutoconfigUrl).toBe("string");
    });
  });

  describe("ftpProxy", () => {
    it("should have ftpProxy", () => {
      expect(proxyOptions).toHaveProperty("ftpProxy");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.ftpProxy).toBe("string");
    });
  });

  describe("ftpProxyPort", () => {
    it("should have ftpProxyPort", () => {
      expect(proxyOptions).toHaveProperty("ftpProxyPort");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.ftpProxyPort).toBe("number");
    });
  });

  describe("httpProxy", () => {
    it("should have httpProxy", () => {
      expect(proxyOptions).toHaveProperty("httpProxy");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.httpProxy).toBe("string");
    });
  });

  describe("httpProxyPort", () => {
    it("should have httpProxyPort", () => {
      expect(proxyOptions).toHaveProperty("httpProxyPort");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.httpProxyPort).toBe("number");
    });
  });

  describe("sslProxy", () => {
    it("should have sslProxy", () => {
      expect(proxyOptions).toHaveProperty("sslProxy");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.sslProxy).toBe("string");
    });
  });

  describe("sslProxyPort", () => {
    it("should have sslProxyPort", () => {
      expect(proxyOptions).toHaveProperty("sslProxyPort");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.sslProxyPort).toBe("number");
    });
  });

  describe("socksProxy", () => {
    it("should have socksProxy", () => {
      expect(proxyOptions).toHaveProperty("socksProxy");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.socksProxy).toBe("string");
    });
  });

  describe("socksProxyPort", () => {
    it("should have socksProxyPort", () => {
      expect(proxyOptions).toHaveProperty("socksProxyPort");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.socksProxyPort).toBe("number");
    });
  });

  describe("socksVersion", () => {
    it("should have socksVersion", () => {
      expect(proxyOptions).toHaveProperty("socksVersion");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.socksVersion).toBe("number");
    });
  });

  describe("socksUsername", () => {
    it("should have socksUsername", () => {
      expect(proxyOptions).toHaveProperty("socksUsername");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.socksUsername).toBe("string");
    });
  });

  describe("socksPassword", () => {
    it("should have socksPassword", () => {
      expect(proxyOptions).toHaveProperty("socksPassword");
    });

    it("should be a string", () => {
      expect(typeof proxyOptions.socksPassword).toBe("string");
    });
  });
});
