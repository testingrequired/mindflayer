export class WebElement {
  constructor(id, driver) {
    this.id = id;
    this.driver = driver;
  }

  click() {
    this.driver.click(this.id);
  }

  clear() {
    this.driver.clear(this.id);
  }

  get screenshot() {
    return this.driver.screenshotElement(this.id);
  }
}
