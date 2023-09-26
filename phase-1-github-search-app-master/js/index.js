let address = params.get("https://apigithub.com/search/users?q=ocat"); // Fix typo: "outcat" should be "ocat"

// Retrieve URL
let url = new URL("https://apigithub.com/search/users?q=ocat"); // Add closing quotation mark

let params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from a URL object
let params1a = url.searchParams;

// Pass in a string literal
let params2 = new URLSearchParams("foo=16&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });