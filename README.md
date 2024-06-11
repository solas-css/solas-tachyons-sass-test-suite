<!-- markdownlint-disable MD033 MD041 -->
<pre aria-hidden="true">
 ________       ______                                 __  __
 ___  __/___ ______  /_____  ___________________      / / / /___  _______  __
 __  / / __ `/ ___/ __ \  / / / __ \  __ \  ___/_____/ /_/ / __ `/ ___/ / / /
 _  / / /_/ / /__/ / / / /_/ / /_/ / / / (__  )_____/ __  / /_/ / /  / /_/ /
 /_/  \__,_/\___/_/ /_/\__, /\____/_/ /_/____/     /_/ /_/\__,_/_/   \__,_/
                       ____/
</pre>
<!-- markdownlint-enable MD033 MD041 -->

# Tachyons-Haru Test Suite

A visual regression test suite for [Tachyons-Haru](https://github.com/tachyons-haru/tachyons-sass-haru) built using [Pattern Lab](https://patternlab.io/) and [BackstopJS](https://github.com/garris/BackstopJS).

The primary goal of this test suite is to test possible regressions against the last major Tachyons build [v4.12.0](https://github.com/tachyons-css/tachyons/)

- Tachyons on Unpkg: <https://unpkg.com/tachyons@4.12.0/css/tachyons.css>
- Tachyons on NPM: <https://www.npmjs.com/package/tachyons>

This suite is largely a subset of the Tachyons documentation. Eventually, as Tachyons-Haru diverges from the parent project, we will expand this into a more comprehensive documentation source.

## Getting Started

To build the suite:

```bash
git clone https://github.com/tachyons-haru/tachyons-sass-haru-test-suite.git
cd tachyons-sass-haru-test-suite
npm install
npm run setup
```

### Available commands

```bash
npm run setup               # runs tachyons:build, patternlab:setup, patternlab:build
npm run tests               # runs the backstopjs test suite
npm run tests:approve       # approve the backstopjs test results from the last run
npm run tests:clean         # remove all backstopjs test results from test/backstop_data/bitmaps_test/*
npm run tests:report        # open the backstopjs test report
npm run tachyons:build      # build Tachyons scss partials
npm run patternlab:build    # build Pattern Lab patterns library in ./public
npm run paternlab:start     # start the Pattern Lab server, and view the component library.
npm run patternlab:setup    # Setup Pattern Lab
npm run patternlab:help     # Pattern Lab help
npm run patternlab:version  # Pattern Lab version
```

### Settings

PatternLab: `./paternlab-config.json`
BackstopJS: `./tests/basicConfig.js`,`./tests/mainConfig.js`

### Changing Tachyons versions

The template `source/_meta/_head.hbs` contains hard links to Tachyons v4.12.0. via unpkg.com, as well as the local build of Tachyons-Haru in `./source/css/vendor/tachyons-haru.css`. Simply comment out the one that you wish to run the project against.

The script `npm run tachyons:build` builds the latest main branch of tachyons-sass-haru, installed as a dependancy, and built automatically via `npm run setup`.
If you want to run this project against other builds you can npm install different tagged branches of Tachyons-Haru by running:

```bash
npm i git+https://github.com/tachyons-haru/tachyons-sass-haru.git#<tag or branch>
npm run tachyons:build
```

### Adding patterns and tests

New patterns can be created by adding new handlebars `.hbs` template files, with markdown sidecar files for metadata, in `source/_patterns/*`. See [PatternLab documentation](https://patternlab.io/docs/adding-new-patterns/) for details. Once a new pattern is added, run `npm run patternlab:build` to generate the static HTML output in `public/patterns/*`.

New patterns can be added to BackstopJS by adding relative paths to the newly generated html files in `test/baseConfig.js`. Collections of relative paths can be found in `./tests/paths/*`. See [BackstopJS documentation](https://github.com/garris/BackstopJS/blob/master/docs/adding-tests.md) for details.

### Breakpoints

Breakpoints for BackstopJs visual regression tests can be added in `tests/basicConfig.js`. Note that if you want these added to the PatternLab UI, you must add them to the `ishViewportRange` array in `./patternlab-config.json`. See [Tachyons-Haru docs](https://github.com/tachyons-haru/tachyons-sass-haru/blob/master/docs/adding-new-breakpoints.md) for details on adding breakpoints to your compiled css.

## Shoulders of Giants

Tachyons by [@mrmrs\_](https://twitter.com/mrmrs_) & [@4lpine](https://twitter.com/4lpine)
