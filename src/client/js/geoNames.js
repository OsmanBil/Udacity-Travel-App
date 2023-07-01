const https = require('https');
const querystring = require('querystring');

const baseUrl = 'https://secure.geonames.org/searchJSON';

function getGeonamesData(query) {

  fetch('http://localhost:8091/api/geonamesUserName')
    .then(response => response.json())
    .then(data => {

      const geoUsername = data.geo; // get API-Key 
      const username = geoUsername; 


      // API-params
      const params = {
        username: username,
        q: query,
        maxRows: 1
      };

      const url = `${baseUrl}?${querystring.stringify(params)}`;

      // Send API-Get to GeoNames
      https.get(url, response => {
        let data = '';

        response.on('data', chunk => {
          data += chunk;
        });

        response.on('end', () => {
          const result = JSON.parse(data);
          if (result.geonames && result.geonames.length > 0) {
            const geoname = result.geonames[0];
            
            const latitude = geoname.lat;  
            const longitude = geoname.lng; 

            Client.weatherbit(latitude, longitude, Client.tripStartDate, Client.tripEndDate);

          } else {
            // console.log('No results found.');
          }
        });
      }).on('error', error => {
        console.log('Fehler beim API-Aufruf:', error.message);
      });



    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export { getGeonamesData };



