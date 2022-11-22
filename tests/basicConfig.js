const baseUrl = "http://127.0.0.1:3000"; // Replace the value "http://example.com" by the base URL of the website you want to test.
const projectId = "tachyons-sass-haru"; // Replace the value "sample project" by the id of your project. It can be any string (e.g., "my-website").

const viewports = ["small", "medium", "large", "full"];

basicConfig.relativeUrls = [
  ...require("./baseTypography"),
  ...require("./baseLayout"),
  ...require("./baseThemeing"),
  ...require("./baseElements"),
];
