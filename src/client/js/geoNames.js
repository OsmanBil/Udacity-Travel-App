const https = require('https');
const querystring = require('querystring');

const baseUrl = 'https://secure.geonames.org/searchJSON';

async function getGeonamesData(query) {
  try {
    const response = await fetch('http://localhost:8091/api/geonamesUserName');
    const data = await response.json();

    const geoUsername = data.geo; // get API-Key 
    const username = geoUsername;

    // API-params
    const params = {
      username: username,
      q: query,
      maxRows: 1
    };

    const url = `${baseUrl}?${querystring.stringify(params)}`;

    const result = await Client.fetchData(url);
    if (result.geonames && result.geonames.length > 0) {
      const geoname = result.geonames[0];

      const latitude = geoname.lat;
      const longitude = geoname.lng;

      await Client.weatherbit(latitude, longitude, Client.tripStartDate, Client.tripEndDate);
    } else {
      // console.log('No results found.');
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      let data = '';

      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', error => {
      reject(error);
    });
  });
}

export { getGeonamesData, fetchData };
