const https = require('https');

//const apiKey = 'abc9199e2f814178b9acc277dad5380c'; // Füge hier deinen Weatherbit API-Schlüssel ein



// Setze baseUrl mit den aktuellen Werten von latitude und longitude


function fetchWeatherData(latitude, longitude) {

  fetch('http://localhost:8091/api/weatherbitKey')
    .then(response => response.json())
    .then(data => {

      const weatherbitKey = data.weatherbitKey; // get API-Key 
      const apiKey = weatherbitKey; // Fügen Sie hier Ihren GeoNames Benutzernamen ein


      let baseUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;



      const url = baseUrl;

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


    })
    .catch(error => {
      console.error('Error:', error);
    });
}


//export { fetchWeatherData };

