
// Import counter datas
import { counter } from './js/counter';

// Import pixabay datas
import { pixabay } from './js/pixabay';
import { tripImage } from './js/pixabay';

// Import weatherbit datas
import { weatherbit } from './js/weatherbit';
import { tripCity } from './js/weatherbit';
import { highestTemp } from './js/weatherbit';
import { lowestTemp } from './js/weatherbit';
import { mostCommonWeatherDescription } from './js/weatherbit';

// Import geonames datas
import { getGeonamesData } from './js/geoNames';

// Import formHandler datas
import { handleSubmit } from './js/formHandler';
import { tripStartDate } from './js/formHandler';
import { tripEndDate } from './js/formHandler';

// Import trip datas
import { trip } from './js/trip';

// Import sccs files
import './styles/body.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';
import './styles/trip.scss';


// Export all datas
export {
    lowestTemp,
    highestTemp,
    mostCommonWeatherDescription,
    handleSubmit,
    getGeonamesData,
    trip,
    counter,
    pixabay,
    weatherbit,
    tripCity,
    tripImage,
    tripStartDate,
    tripEndDate,
}