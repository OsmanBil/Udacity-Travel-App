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
app.listen(8090, function () {
    console.log('App listening on port 8090!')
})

app.get('/test', function (req, res) {
  const testVar = req.query.testVar; // Zugriff auf den Wert von testVar aus den Abfrageparametern

  const responseData = testVar; // Hier kannst du deine gewünschten Backend-Daten erstellen oder abrufen

  // Senden der Daten als Antwort
  res.send(responseData);
  //console.log(testVar);
  //console.log(responseData);
});


app.get('/api/geonamesUserName', (req, res) => {
  // API-Schlüssel an das Frontend senden
  res.json({ apiKey: "test" });

  console.log('TEST');
});