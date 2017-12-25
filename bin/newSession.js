const mf = require("../dist/mindflayer");

(async () => {
  const desiredCapabilities = new mf.CapabilityOptions();
  desiredCapabilities.browserName = "chrome";

  const driver = new mf.WebDriver(`http://localhost:9515`, desiredCapabilities);

  try {
    await driver.start();
    await driver.go("http://google.com");
  } catch (e) {
    console.error(`Error going to url: ${e}`);
  }
})();
