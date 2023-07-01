

const https = require('https');
const querystring = require('querystring');

const baseUrl = 'https://secure.geonames.org/searchJSON';

function getGeonamesData(query) {

  fetch('http://localhost:8091/api/geonamesUserName')
    .then(response => response.json())
    .then(data => {

      const geoUsername = data.geo; // get API-Key 
      const username = geoUsername; // Fügen Sie hier Ihren GeoNames Benutzernamen ein


      // Definieren der Parameter für den API-Aufruf
      const params = {
        username: username,
        q: query,
        maxRows: 1
      };

      const url = `${baseUrl}?${querystring.stringify(params)}`;

      // Senden Sie den API-Aufruf an GeoNames
      https.get(url, response => {
        let data = '';

        response.on('data', chunk => {
          data += chunk;
        });

        response.on('end', () => {
          const result = JSON.parse(data);
          if (result.geonames && result.geonames.length > 0) {
            const geoname = result.geonames[0];
            
            const latitude = geoname.lat; // Breitengrad der gewünschten Position
            const longitude = geoname.lng; // Längengrad der gewünschten Position

            Client.weatherbit(latitude, longitude);

            //console.log('Breitengrad (Latitude):', geoname.lat);
            // console.log('Längengrad (Longitude):', geoname.lng);
            // console.log('Land (Country):', geoname.countryName);
          } else {
            // console.log('Keine Ergebnisse gefunden.');
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



