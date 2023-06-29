const https = require('https');
const querystring = require('querystring');

function getGeonamesData(query) {
  const username = 'relax61'; // Fügen Sie hier Ihren GeoNames Benutzernamen ein
  const baseUrl = 'https://secure.geonames.org/searchJSON';

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
        console.log('Breitengrad (Latitude):', geoname.lat);
        console.log('Längengrad (Longitude):', geoname.lng);
        console.log('Land (Country):', geoname.countryName);
      } else {
        console.log('Keine Ergebnisse gefunden.');
      }
    });
  }).on('error', error => {
    console.log('Fehler beim API-Aufruf:', error.message);
  });
}

// Beispielaufruf
const query = 'großbottwar'; // Geben Sie hier den Namen der Stadt oder die Postleitzahl an
getGeonamesData(query);

