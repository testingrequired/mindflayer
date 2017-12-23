import { command, encodeQueryString } from "./command";

describe("encodeQueryString", () => {
  describe("object with key", () => {
    it("should encode correctly", () => {
      expect(encodeQueryString({ foo: "bar" })).toEqual("?foo=bar");
    });
  });

  describe("object with keys", () => {
    it("should encode correctly", () => {
      expect(encodeQueryString({ foo: "bar", baz: "que" })).toEqual(
        "?foo=bar&baz=que"
      );
    });
  });

  describe("object with no keys", () => {
    it("should encode correctly", () => {
      expect(encodeQueryString({})).toEqual("");
    });
  });
});

describe("command", () => {
  let url, method, params, fetchStub;

  beforeEach(() => {
    url = "someurl";
    fetchStub = jest.fn();
  });

  describe("GET", () => {
    beforeEach(() => {
      command(url, "GET", {}, fetchStub);
    });

    it("calls fetch", () => {
      expect(fetchStub.mock.calls[0]).toEqual([
        url,
        {
          method: "GET",
          headers: {
            _headers: {}
          }
        }
      ]);
    });
  });

  describe("POST", () => {
    beforeEach(() => {
      command(url, "POST", { foo: "bar" }, fetchStub);
    });

    it("should call fetch", () => {
      expect(fetchStub.mock.calls[0]).toEqual([
        url,
        {
          method: "POST",
          body: '{"foo":"bar"}',
          headers: {
            _headers: {
              "content-type": ["application/json"]
            }
          }
        }
      ]);
    });
  });
});
