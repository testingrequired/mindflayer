const mf = require("../dist/mindflayer");

const desiredCapabilities = new mf.CapabilityOptions();
desiredCapabilities.browserName = "chrome";

(async () => {
  const response = await mf.command(`http://localhost:9515/session`, "POST", {
    desiredCapabilities
  });

  const status = await response.status;

  const body = await response.json();

  const sessionId = body.sessionId;

  console.log(sessionId);
})();
