const mf = require("../dist/mindflayer");

(async () => {
  const desiredCapabilities = new mf.CapabilityOptions({
    browserName: "chrome"
  });

  const driver = new mf.WebDriver(`http://localhost:9515`, desiredCapabilities);

  await driver.start();
  await driver.go("http://google.com");

  const title = await driver.title;
  console.log(title);

  try {
    const body = await driver.$$(mf.By.xpath("#body1"));
    console.log(body);
  } catch (e) {
    console.log(`Error getting body: ${e}`);
  }

  await driver.close();
})();
