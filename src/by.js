export class By {
  static css(value) {
    return {
      using: "css selector",
      value
    };
  }

  static xpath(value) {
    return {
      using: "xpath",
      value
    };
  }

  static tagName(value) {
    return {
      using: "tag name",
      value
    };
  }

  static linkText(value) {
    return {
      using: "link text",
      value
    };
  }

  static partialLinkText(value) {
    return {
      using: "partial link text",
      value
    };
  }
}
