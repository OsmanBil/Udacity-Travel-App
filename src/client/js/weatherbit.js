const https = require('https');

let tripCity = '';
let weatherTemp = '';
let weatherDetails = '';
let highestTemp = null;
let lowestTemp = null;
let weatherDescriptionCounts = {};
let mostCommonWeatherDescription = '';

function weatherbit(latitude, longitude, startDate, endDate) {
  fetch('http://localhost:8091/api/weatherbitKey')
    .then(response => response.json())
    .then(data => {
      const weatherbitKey = data.weatherbitKey;
      const apiKey = weatherbitKey;
      
      const baseUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}`;

      const url = baseUrl;

      const request = https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          const weatherData = JSON.parse(data);

          console.log('Wetterdaten:', weatherData.city_name);
          console.log('Wetterdaten:', weatherData.data);

          tripCity = weatherData.city_name;
          weatherTemp = weatherData.data[0].temp;
          weatherDetails = weatherData.data[0].weather.description;


          Client.pixabay(tripCity);

          // Find highest and lowest temperature within the specified date range
          weatherData.data.forEach(day => {
            const currentDate = new Date(day.valid_date);
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);
            
            if (currentDate >= startDateObj && currentDate <= endDateObj) {
              if (highestTemp === null || day.max_temp > highestTemp) {
                highestTemp = day.max_temp;
                console.log('highestTemp:', highestTemp);
              }
              if (lowestTemp === null || day.min_temp < lowestTemp) {
                lowestTemp = day.min_temp;
                console.log('lowestTemp:', lowestTemp); 
              }

              const description = day.weather.description;
              if (weatherDescriptionCounts[description]) {
                weatherDescriptionCounts[description]++;
              } else {
                weatherDescriptionCounts[description] = 1;
              }
            }
          });

          // Find the most common weather description
          
          let maxCount = 0;
          for (const [description, count] of Object.entries(weatherDescriptionCounts)) {
            if (count > maxCount) {
              mostCommonWeatherDescription = description;
              maxCount = count;
            }
          }

          console.log('Am häufigsten vorkommende Wetterbeschreibung:', mostCommonWeatherDescription);

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

export { weatherbit, tripCity, weatherTemp, weatherDetails, highestTemp, lowestTemp, mostCommonWeatherDescription };
