const mf = require("../dist/mindflayer");

(async () => {
  const desiredCapabilities = new mf.CapabilityOptions({
    browserName: "chrome"
  });

  const driver = new mf.WebDriver(`http://localhost:9515`, desiredCapabilities);

  await driver.start();
  await driver.go("http://example.com");

  const title = await driver.title;
  console.log("Title:", title);

  const link = await driver.findElement(mf.By.linkText("More information..."));

  await driver.click(link.id);

  await driver.quit();

  console.log(driver.sessionId);
})();
