const https = require('https');

//const apiKey = 'abc9199e2f814178b9acc277dad5380c'; // Füge hier deinen Weatherbit API-Schlüssel ein
let tripCity = '';
let weatherTemp = '';
let weatherDetails = '';

// Setze baseUrl mit den aktuellen Werten von latitude und longitude


function weatherbit(latitude, longitude) {

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
          console.log('Wetterdaten:', weatherData.data[0].city_name);

          console.log('Wetterdaten:', weatherData.data);

          Client.pixabay(weatherData.data[0].city_name);


          tripCity = weatherData.data[0].city_name;
          weatherTemp = weatherData.data[0].temp;
          weatherDetails = weatherData.data[0].weather.description;
          // wait 2 seconds
          setTimeout(function() {
            Client.trip();
          }, 2000);

         

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


export { weatherbit, tripCity, weatherTemp, weatherDetails };