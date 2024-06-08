const basicConfig = {
  //   baseUrl: 'http://127.0.0.1:3000/', // Is PatternLab Server, or could be our own site.
  baseUrl: './public/', // Paths are relative to curent working directory.
  projectId: 'tachyons-sass-haru', // Replace the value "sample project" by the id of your project. It can be any string (e.g., "my-website").
  viewports: [
    { key: 'small', width: 240, height: 500 },
    { key: 'medium', width: 500, height: 800 },
    { key: 'large', width: 800, height: 1280 }
    // { key: '1080v', width: 1920, height: 1080 },
    // { key: '1440v', width: 2560, height: 1440 }
  ],
  relativeUrls: [
    ...require('./paths/baseTypography'),
    ...require('./paths/baseLayout'),
    ...require('./paths/baseTheming'),
    ...require('./paths/baseElements')
  ]
}
module.exports = basicConfig
