const https = require('https');

let tripCity = '';
let mostCommonWeatherDescription = '';
let highestTemp = null;
let lowestTemp = null;

async function weatherbit(latitude, longitude, startDate, endDate) {
  try {
    const responseKey = await fetch('http://localhost:8091/api/weatherbitKey');
    const data = await responseKey.json();
    const weatherbitKey = data.weatherbitKey;
    const apiKey = weatherbitKey;

    const baseUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${apiKey}&lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}`;

    const url = baseUrl;

    const responseData = await new Promise((resolve, reject) => {
      const request = https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          resolve(data);
        });
      });

      request.on('error', (error) => {
        reject(error);
      });
    });

    const weatherData = JSON.parse(responseData);
    tripCity = weatherData.city_name;

    await Client.pixabay(tripCity);

    // Reset highestTemp and lowestTemp before processing the weather data
    highestTemp = null;
    lowestTemp = null;

    // Find highest and lowest temperature within the specified date range
    let weatherDescriptionCounts = {};
    weatherData.data.forEach(day => {
      const currentDate = new Date(day.valid_date);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      if (currentDate >= startDateObj && currentDate <= endDateObj) {
        if (highestTemp === null || day.max_temp > highestTemp) {
          highestTemp = day.max_temp;
        }
        if (lowestTemp === null || day.min_temp < lowestTemp) {
          lowestTemp = day.min_temp;
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

    await Client.trip(highestTemp, lowestTemp);
    return { highestTemp, lowestTemp };
  } catch (error) {
    console.error('Error:', error);
  }
}

export { weatherbit, tripCity, mostCommonWeatherDescription };
