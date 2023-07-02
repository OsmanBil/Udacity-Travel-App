// Dotenv is a package for Node.js applications that makes it easy to use environment variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8091, function () {
    console.log('App listening on port 8091!')
})


const geoUsername = {
  geoUser: process.env.GEO_USERNAME
};

const weatherbitApiKey = {
  apiKey: process.env.WEATHERBIT_API_KEY
};

const pixabayApiKey = {
  apiKey: process.env.PIXABAY_API_KEY
};

app.get('/api/geonamesUserName', (req, res) => {
  // Send geonamesUserName-API key to frontend
  res.json({ geo: geoUsername.geoUser });
});

app.get('/api/weatherbitKey', (req, res) => {
  // Send weatherbitKey-API key to frontend
  res.json({ weatherbitKey: weatherbitApiKey.apiKey });
});

app.get('/api/pixabayKey', (req, res) => {
  // Send pixabayKey-API key to frontend
  res.json({ pixabayKey: pixabayApiKey.apiKey });
});

module.exports = {
  app // Hier exportieren wir `app`
};