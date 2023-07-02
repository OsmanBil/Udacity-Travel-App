let tripImage = '';
import myImage from '../media/stgt.png';

// Function to get the images from the Pixabay API
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
    } else {
      alert("No image found for this location.");
    }
  } catch (error) {
    // If an error occurs, a default image is used
    tripImage = myImage;
  }
}

export { pixabay, tripImage };
