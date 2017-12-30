const mf = require("../dist/mindflayer");

(async () => {
  const desiredCapabilities = new mf.CapabilityOptions({
    browserName: "chrome"
  });

  const driver = new mf.WebDriver(`http://localhost:9515`, desiredCapabilities);

  await driver.start();
  await driver.go("http://google.com");

  const title = await driver.title;
  console.log("Title:", title);

  const screenshot = await driver.screenshot;
  console.log("Screenshot:", screenshot);

  await driver.close();
})();
