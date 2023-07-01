//const apiKey = '37971621-47c92db90eb2ccf7be00b5931';
//const city = 'Berlin';

let tripImage = '';
// Funktion zum Abrufen der Bilder von der Pixabay API
function pixabay(city) {


  fetch('http://localhost:8091/api/pixabayKey')
    .then(response => response.json())
    .then(data => {

      const pixabayApiKey = data.pixabayKey; // get API-Key 
      const apiKey = pixabayApiKey; // Fügen Sie hier Ihren GeoNames Benutzernamen ein
      // API-Endpunkt für die Suche nach Bildern
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(city)}&category=places`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.hits.length > 0) {
            const image = data.hits[0].largeImageURL;
            tripImage = image;
            console.log('Bild-URL:', image);
            // Hier kannst du das Bild in deiner Anwendung verwenden
          } else {
            //console.log('Keine Bilder gefunden.');
          }
        })
        .catch(error => {
          //console.log('Fehler beim Abrufen des Bildes:', error);
        });

    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Aufruf der Funktion zum Abrufen des Bildes
export { pixabay , tripImage};
