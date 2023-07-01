const https = require('https');

const apiKey = 'abc9199e2f814178b9acc277dad5380c'; // Füge hier deinen Weatherbit API-Schlüssel ein

function fetchWeatherData(latitude, longitude) {
  const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;

  const request = https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const weatherData = JSON.parse(data);

      // Hier kannst du mit den Wetterdaten arbeiten
      //console.log('Wetterdaten:', weatherData);
    });
  });

  request.on('error', (error) => {
    console.error('Fehler beim Abrufen der Wetterdaten:', error.message);
  });
}

// Beispielaufruf der Funktion mit Latitude und Longitude
const latitude = 52.5200; // Breitengrad der gewünschten Position
const longitude = 13.4050; // Längengrad der gewünschten Position
fetchWeatherData(latitude, longitude);
