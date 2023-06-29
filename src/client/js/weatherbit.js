const https = require('https');

const apiKey = 'DEIN_API_SCHLÜSSEL'; // Füge hier deinen Weatherbit API-Schlüssel ein

function fetchWeatherData(city) {
  const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${encodeURIComponent(city)}`;

  const request = https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const weatherData = JSON.parse(data);

      // Hier kannst du mit den Wetterdaten arbeiten
      console.log('Wetterdaten:', weatherData);
    });
  });

  request.on('error', (error) => {
    console.error('Fehler beim Abrufen der Wetterdaten:', error.message);
  });
}

// Beispielaufruf der Funktion
const city = 'Berlin'; // Die gewünschte Stadt
fetchWeatherData(city);
