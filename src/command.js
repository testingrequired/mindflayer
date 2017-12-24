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

export const command = async (
  url,
  method = "GET",
  params = {},
  fetchFn = fetch
) => {
  const options = { method, headers: new Headers() };

  options.headers.append("Accept", "application/json");

  if (method === "POST") {
    options.body = JSON.stringify(params);
    options.headers.append("Content-Type", "application/json");
  } else {
    url += encodeQueryString(params);
  }

  const response = await fetchFn(url, options);
  const body = await response.json();

  return body;
};
