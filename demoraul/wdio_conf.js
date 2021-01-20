const { join } = require('path');
exports.config = {
    beforeSession () {
        require('expect-webdriverio');
    },
    afterScenario: function () {
    },
    baseUrl: 'https://demo.aplazame.com/',
    runner: 'local',
    headers: [
    ],
    specs: [
        './tests/features/*.feature'
    ],
    suites: {
        checkout: [
          './tests/features/checkout.feature'
        ]
    },
    exclude: [
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          'incognito'
        ],
      }
    },
  ],
    services: [
        ['selenium-standalone',
        ],
        ['devtools']
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./tests/steps/checkoutSteps.js'],
        backtrace: true,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
  reporters: ['spec']
}


