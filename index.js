const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const express = require('express')
const app = express()

var Countly = require('countly-sdk-nodejs')

Countly.init({
    app_key: '341db5ce6121d1d5ea9f69075cdf9897a35ecf37',
    url: 'https://mbenchmarking-countly.herokuapp.com',
    debug: true
})
Countly.begin_session()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/metric', (req, res) => {

    const data = req.body
    console.log(data)

    Countly.add_event({
        "key": "eventB",
        "buildTime": data.buildTime,
        "startTime": data.startTime
    })
    res.send('success');
});

app.get('/metric', (req, res) => {
    res.send('Benchmarking');
});
app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(port, () => console.log(`Benchmarking is listening on port ${port}!`))
