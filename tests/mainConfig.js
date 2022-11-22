const basicConfig = require("./basicConfig");

const THREE_SECONDS_IN_MS = 3000;
const scenarios = [];
const viewports = [];

basicConfig.relativeUrls.map((relativeUrl) => {
  scenarios.push({
    label: relativeUrl,
    url: `${basicConfig.baseUrl}${relativeUrl}`,
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: THREE_SECONDS_IN_MS,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: false,
  });
});

basicConfig.viewports.map((viewport) => {
  if (viewport === "small") {
    pushViewport(viewport, 240, 500);
  }
  if (viewport === "medium") {
    pushViewport(viewport, 500, 800);
  }
  if (viewport === "large") {
    pushViewport(viewport, 800, 1280);
  }
  if (viewport === "1080v") {
    pushViewport(viewport, 1920, 1080);
  }
  if (viewport === "4Kv") {
    pushViewport(viewport, 2560, 1440);
  }
});

function pushViewport(viewport, width, height) {
  viewports.push({
    name: viewport,
    width,
    height,
  });
}

module.exports = {
  id: basicConfig.projectId,
  viewports,
  scenarios,
  paths: {
    bitmaps_reference: "tests/backstop_data/bitmaps_reference",
    bitmaps_test: "tests/backstop_data/bitmaps_test",
    engine_scripts: "tests/backstop_data/engine_scripts",
    html_report: "tests/backstop_data/html_report",
    ci_report: "tests/backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
