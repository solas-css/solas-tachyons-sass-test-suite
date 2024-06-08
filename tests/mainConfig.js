const basicConfig = require('./basicConfig.js')

const THREE_SECONDS_IN_MS = 3000
const scenarios = []
const viewports = []

// Add relativeUrls from basicConfig
basicConfig.relativeUrls.map((relativeUrl) => {
  return scenarios.push({
    label: relativeUrl,
    url: `${basicConfig.baseUrl}${relativeUrl}`,
    referenceUrl: '',
    readyEvent: '',
    readySelector: '',
    delay: THREE_SECONDS_IN_MS,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: '',
    clickSelector: '',
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: false
  })
})

// Add viewports from basicConfig
basicConfig.viewports.map((vp) => pushViewport(vp.key, vp.height, vp.width))

function pushViewport(viewport, width, height) {
  viewports.push({
    name: viewport,
    width,
    height
  })
}

module.exports = {
  id: basicConfig.projectId,
  viewports,
  scenarios,
  paths: {
    bitmaps_reference: 'tests/backstop_data/bitmaps_reference',
    bitmaps_test: 'tests/backstop_data/bitmaps_test',
    engine_scripts: 'tests/backstop_data/engine_scripts',
    html_report: 'tests/backstop_data/html_report',
    ci_report: 'tests/backstop_data/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}
