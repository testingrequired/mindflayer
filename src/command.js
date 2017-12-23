import fetch, { Headers } from "node-fetch";

export function encodeQueryString(params) {
  const keys = Object.keys(params);

  if (keys.length === 0) {
    return "";
  }

  return (
    "?" +
    keys
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&")
  );
}

export const command = (url, method = "GET", params = {}, fetch = fetch) => {
  const options = { method, headers: new Headers() };

  if (method === "POST") {
    options.body = JSON.stringify(params);
    options.headers.append("Content-Type", "application/json");
  } else {
    url += encodeQueryString(params);
  }

  return fetch(url, options);
};
