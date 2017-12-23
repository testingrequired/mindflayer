import "isomorphic-fetch";

function encodeQueryString(params) {
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

export const command = (url, method = "GET", params = {}) => {
  const options = { method };

  if (method === "POST") {
    options.body = JSON.stringify(params);
    options.headers = new Headers();
    headers.append("Content-Type", "application/json");
  } else if (method === "GET") {
    url += encodeQueryString(params);
  }

  return fetch(url, options);
};
