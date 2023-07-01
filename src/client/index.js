
import { counter } from './js/counter';
import { pixabay } from './js/pixabay';
import { tripImage } from './js/pixabay';
import { weatherbit } from './js/weatherbit';
import { tripCity } from './js/weatherbit';
import { weatherTemp } from './js/weatherbit';
import { weatherDetails } from './js/weatherbit';
import { highestTemp } from './js/weatherbit';
import { lowestTemp } from './js/weatherbit';
import { mostCommonWeatherDescription } from './js/weatherbit';

import { getGeonamesData } from './js/geoNames';

import { handleSubmit } from './js/formHandler';
import { tripStartDate } from './js/formHandler';
import { tripEndDate } from './js/formHandler';




import { trip } from './js/trip';


import './styles/body.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';
import './styles/trip.scss';


import img from './media/stgt.png';


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
    weatherTemp,
    weatherDetails,
    tripImage,
    tripStartDate,
    tripEndDate,
    
}

export const stgtImage = img;