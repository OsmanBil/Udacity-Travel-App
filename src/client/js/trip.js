let tripTimer = '';

function trip() {
    // Create trip-section
    const section = document.createElement('section');
    section.setAttribute('class', 'trip-section');

    // Create trip-container-div
    const tripImgDiv = document.createElement('div');
    tripImgDiv.setAttribute('class', 'trip-img');
    tripImgDiv.setAttribute('id', 'tripImg');

    // Create trip-data-div
    const tripDataDiv = document.createElement('div');
    tripDataDiv.setAttribute('class', 'trip-data');

    // Create trip-title-div
    const tripTitleDiv = document.createElement('div');
    tripTitleDiv.setAttribute('class', 'trip-title');
    const cityParagraph = document.createElement('p');
    cityParagraph.setAttribute('id', 'city');
    tripTitleDiv.appendChild(cityParagraph);

    // Create trip-departing-time-div
    const tripDepartingTimeDiv = document.createElement('div');
    tripDepartingTimeDiv.setAttribute('class', 'trip-departing-time');
    const tripDepartingTimeParagraph = document.createElement('p');
    tripDepartingTimeParagraph.setAttribute('id', 'tripDepartingTime');
    tripDepartingTimeDiv.appendChild(tripDepartingTimeParagraph);

    // Create trip-timer-div
    const tripTimerDiv = document.createElement('div');
    tripTimerDiv.setAttribute('class', 'trip-timer');
    const tripTimerParagraph = document.createElement('p');
    tripTimerParagraph.setAttribute('id', 'tripTimer');
    tripTimerDiv.appendChild(tripTimerParagraph);

    // Create trip-weather-div
    const tripWeatherDiv = document.createElement('div');
    tripWeatherDiv.setAttribute('class', 'trip-weather');
    const weatherParagraph = document.createElement('p');
    weatherParagraph.textContent = 'Typical weather for then is:';
    const tripWeatherDataDegreeDiv = document.createElement('div');
    tripWeatherDataDegreeDiv.setAttribute('class', 'trip-weather-data-degree');
    tripWeatherDataDegreeDiv.setAttribute('id', 'tripWeatherDataDegree');
    const tripWeatherDataDetailsDiv = document.createElement('div');
    tripWeatherDataDetailsDiv.setAttribute('class', 'trip-weather-data-details');
    tripWeatherDataDetailsDiv.setAttribute('id', 'tripWeatherDataDetails');
    tripWeatherDiv.appendChild(weatherParagraph);
    tripWeatherDiv.appendChild(tripWeatherDataDegreeDiv);
    tripWeatherDiv.appendChild(tripWeatherDataDetailsDiv);

    // Add the created elements to the tripDataDiv
    tripDataDiv.appendChild(tripTitleDiv);
    tripDataDiv.appendChild(tripDepartingTimeDiv);
    tripDataDiv.appendChild(tripTimerDiv);
    tripDataDiv.appendChild(tripWeatherDiv);

    // Add the tripImgDiv and tripDataDiv to the section element
    section.appendChild(tripImgDiv);
    section.appendChild(tripDataDiv);

    // Clear the tripSectionContainer before adding the new trip section
    const tripSectionContainer = document.getElementById('tripSectionContainer');
    tripSectionContainer.innerHTML = '';
    tripSectionContainer.appendChild(section);

    // Create trip image
    const imageHTML = '<img src="' + Client.tripImage + '" alt="Trip Image">';

    // Call timer
    timer();

    // Add the trip data to the trip section
    document.getElementById("tripImg").innerHTML = imageHTML;
    document.getElementById("city").innerHTML = "My trip to: " + Client.tripCity;
    document.getElementById("tripDepartingTime").innerHTML = "Departing: " + Client.tripStartDate;
    document.getElementById("tripTimer").innerHTML = Client.tripCity + " is " + tripTimer + " days away";

    // Update weather data for the new trip

        updateWeatherData();

    
}

function timer() {
    // Create trip timer
    let today = new Date();
    let selectedDate = new Date(Client.tripStartDate);
    let timeDifference = selectedDate.getTime() - today.getTime();
    tripTimer = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

function updateWeatherData() {
    // Update weather data for the new trip
    document.getElementById("tripWeatherDataDegree").innerHTML = "High: " + Client.highestTemp + ", Low:" + Client.lowestTemp;
    document.getElementById("tripWeatherDataDetails").innerHTML = Client.mostCommonWeatherDescription;
}

export { trip, timer };
