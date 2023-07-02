let tripImage = '';

// Funktion zum Abrufen der Bilder von der Pixabay API
async function pixabay(city) {
  try {
    const response = await fetch('http://localhost:8091/api/pixabayKey');
    const data = await response.json();
    const pixabayApiKey = data.pixabayKey;
    const apiKey = pixabayApiKey;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(city)}&category=places`;

    const imageResponse = await fetch(apiUrl);
    const imageData = await imageResponse.json();

    if (imageData.hits.length > 0) {
      const image = imageData.hits[0].largeImageURL;
      tripImage = image;
      console.log('Bild-URL:', image);
      // Hier kannst du das Bild in deiner Anwendung verwenden
    } else {
      //console.log('Keine Bilder gefunden.');
    }
  } catch (error) {
    console.error('Fehler beim Abrufen des Bildes:', error);
  }
}

// Aufruf der Funktion zum Abrufen des Bildes
export { pixabay, tripImage };
