var Countly = require('countly-sdk-nodejs')

Countly.init({
    app_key: '341db5ce6121d1d5ea9f69075cdf9897a35ecf37',
    url: 'http://localhost:80',
    debug: true
})
Countly.begin_session()

Countly.add_event({
    "key": "trialEvent",
    "buildTime": 2500,
    "compileTime": 1800,
    "duration": 1000
})

