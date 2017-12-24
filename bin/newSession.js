const mf = require("../dist/mindflayer");

const desiredCapabilities = new mf.CapabilityOptions();
desiredCapabilities.browserName = "chrome";

(async () => {
  let sessionResponse, sessionId, driver;

  try {
    sessionResponse = await mf.command(
      `http://localhost:9515/session`,
      "POST",
      {
        desiredCapabilities
      }
    );
  } catch (e) {
    console.error(`Error starting session: ${e}`);
  }

  try {
    sessionId = sessionResponse.sessionId;
  } catch (e) {
    console.error(`Error getting session id: ${e}`);
  }

  driver = new mf.WebDriver(`http://localhost:9515`, sessionId);

  try {
    await driver.go("http://google.com");
  } catch (e) {
    console.error(`Error going to url: ${e}`);
  }

  try {
    const title = await driver.title;
    console.log(title);
  } catch (e) {
    console.error(`Error getting title: ${e}`);
  }
})();
