# mindflayer

## Installation

```bash
$ npm install mindflayer@0.1.0-alpha.2
```

## Usage

```javascript
const { CapabilityOptions, WebDriver } = require("mindflayer");

(async () => {
  const desiredCapabilities = new CapabilityOptions({
    browserName: "chome"
  });

  const driver = new WebDriver(`http://localhost:9515`, desiredCapabilities);

  await driver.start();
  await driver.go("http://google.com");
  await driver.close();
})();
```
