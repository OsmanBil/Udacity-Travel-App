// Import pixabay datas
import { pixabay } from './js/pixabay';
import { tripImage } from './js/pixabay';

// Import weatherbit datas
import { weatherbit } from './js/weatherbit';
import { tripCity } from './js/weatherbit';
import { mostCommonWeatherDescription } from './js/weatherbit';

// Import geonames datas
import { getGeonamesData } from './js/geoNames';
import { fetchData } from './js/geoNames';


// Import formHandler datas
import { handleSubmit } from './js/formHandler';
import { tripStartDate } from './js/formHandler';
import { tripEndDate } from './js/formHandler';


// Import trip datas
import { trip } from './js/trip';
import { timer } from './js/trip';
import { updateWeatherData } from './js/trip';

// Import sccs files
import './styles/body.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';
import './styles/trip.scss';


// Export all datas
export {
    fetchData,
    mostCommonWeatherDescription,
    handleSubmit,
    getGeonamesData,
    trip,
    pixabay,
    weatherbit,
    tripCity,
    tripImage,
    tripStartDate,
    tripEndDate,
    timer,
    updateWeatherData
}