const mf = require("../dist/mindflayer");

(async () => {
  const desiredCapabilities = new mf.CapabilityOptions({
    browserName: "chrome"
  });

  const driver = new mf.WebDriver(`http://localhost:9515`, desiredCapabilities);

  await driver.start();
  await driver.go("http://google.com");
  await driver.close();
})();
