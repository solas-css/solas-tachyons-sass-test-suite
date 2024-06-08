# Tachyons-Haru Test Suite

A visual regression test suite for Tachyons-Haru built using [Pattern Lab](https://patternlab.io/) and [BackstopJS](https://github.com/garris/BackstopJS).

The primary goal of this test suite is to test possible regressions against the last major Tachyons build [v4.12.0](https://github.com/tachyons-css/tachyons/), released on [npm](https://www.npmjs.com/package/tachyons).

This suite is largely a subset of the Tachyons documentation. Eventually, as Tachyons-Haru diverges from the parent project, we will expand this into a more comprehensive documentation source for Tachyons-Haru.

## Getting Started

To build the suite:

```bash
git clone https://github.com/tachyons-haru/tachyons-sass-haru-test-suite.git
cd tachyons-sass-haru-test-suite
npm install
npm run setup
```

Avaliable commands

```bash
npm run setup               # runs tachyons:build, patternlab:setup, patternlab:build
npm run tests               # runs the backstopjs test suite
npm run tests:approve       # approve the backstopjs test results from the last run
npm run tests:clean         # remove all backstopjs test results from test/backstop_data/bitmaps_test/*
npm run tests:report        # open the backstopjs test report
npm run tachyons:build      # build tachyons scss parials
npm run patternlab:build    # build patternlab patterns library in ./public
npm run paternlab:start     # start the patternlab server
npm run patternlab:setup    # setup patternlab
npm run patternlab:help     # patternlab help
npm run patternlab:version  # patternlab version
```

### Base Settings

PatternLab: `./paternlab-config.json`
BackstopJS: `./tests/basicConfig.js`,`./tests/mainConfig.js`

### Changing Tachyons version

`source/_meta/_head.hbs` contains hard links to Tachyons v4.12.0. via unpkg.com.
Comment out this link and uncomment the link to the local build of Tachyons-haru instead.
Run `npm run tachyons:build` to build the latest main branch of tachyons-sass-haru, this will already be installed via npm run setup.

### Adding new patterns and tests

New patterns can be created by adding new handlebars `.hbs` template files, with markdown sidecar files for metadata, in `source/_patterns/*`. See [PatternLab documentation](https://patternlab.io/docs/adding-new-patterns/) for details. Once a new pattern is added, run `npm run patternlab:build` to generate the static HTML output in `public/patterns/*`.

New patterns can be added to BackstopJS by adding relative paths to the newly generated html files in `test/baseConfig.js`. Collections of relative paths can be found in `./tests/paths/*`. See [BackstopJS documentation](https://github.com/garris/BackstopJS/blob/master/docs/adding-tests.md) for details.

## Adding new breakpoints

Breakpoints for BackstopJs visual regression tests can be added in `tests/basicConfig.js`. Note that if you want these added to the PatternLab UI, you must add them to the `ishViewportRange` array in `./patternlab-config.json`.
