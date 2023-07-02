let tripTimer = '';
import jsPDF from 'jspdf';

function trip(highestTemp, lowestTemp) {
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

    // Create trip-end-date-div
    const tripEndDateDiv = document.createElement('div');
    tripEndDateDiv.setAttribute('class', 'trip-end-date');
    const tripEndDateParagraph = document.createElement('p');
    tripEndDateParagraph.setAttribute('id', 'tripEndDate');
    tripEndDateDiv.appendChild(tripEndDateParagraph);

    // Create trip-length-div 
    const tripLengthDiv = document.createElement('div');
    tripLengthDiv.setAttribute('class', 'trip-length');
    const tripLengthParagraph = document.createElement('p');
    tripLengthParagraph.setAttribute('id', 'tripLength');
    tripLengthDiv.appendChild(tripLengthParagraph);


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

    // Create Button
    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.setAttribute('id', 'buttonContainer');

    const button = document.createElement('button');
    button.textContent = 'Create PDF';
    button.addEventListener('click', createPDF);
    buttonContainerDiv.appendChild(button);

    // Add the created elements to the tripDataDiv
    tripDataDiv.appendChild(tripTitleDiv);
    tripDataDiv.appendChild(tripDepartingTimeDiv);
    tripDataDiv.appendChild(tripTimerDiv);
    tripDataDiv.appendChild(tripEndDateDiv);
    tripDataDiv.appendChild(tripLengthDiv);
    tripDataDiv.appendChild(tripWeatherDiv);
    tripDataDiv.appendChild(buttonContainerDiv);
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
    Client.timer();

    // Calculate trip length
    let tripLength = Math.ceil((new Date(Client.tripEndDate) - new Date(Client.tripStartDate)) / (1000 * 60 * 60 * 24) + 1);

    // Format the date in dd/mm/yyyy format
    function formatDate(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Add the trip data to the trip section
    document.getElementById("tripImg").innerHTML = imageHTML;
    document.getElementById("city").innerHTML = "My trip to: " + Client.tripCity;
    document.getElementById("tripDepartingTime").innerHTML = "Departing: " + formatDate(new Date(Client.tripStartDate));
    document.getElementById("tripTimer").innerHTML = Client.tripCity + " is " + tripTimer + " days away";
    document.getElementById("tripEndDate").innerHTML = "Return: " + formatDate(new Date(Client.tripEndDate));
    document.getElementById("tripLength").innerHTML = "Trip length: " + tripLength + " days";

    // Update weather data for the new trip
    Client.updateWeatherData(highestTemp, lowestTemp);
}

function timer() {
    // Create trip timer
    let today = new Date();
    let selectedDate = new Date(Client.tripStartDate);
    let timeDifference = selectedDate.getTime() - today.getTime();
    tripTimer = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

function updateWeatherData(highestTemp, lowestTemp) {
    // Update weather data for the new trip
    document.getElementById("tripWeatherDataDegree").innerHTML = "High: " + highestTemp + ", Low:" + lowestTemp;
    document.getElementById("tripWeatherDataDetails").innerHTML = Client.mostCommonWeatherDescription;
}


function createPDF() {
    const doc = new jsPDF();
     // Get trip data
    const city = document.getElementById("city").innerHTML.replace("My trip to: ", "");
    const tripDepartingTime = document.getElementById("tripDepartingTime").innerHTML.replace("Departing: ", "");
    const tripTimer = document.getElementById("tripTimer").innerHTML;
    const tripEndDate = document.getElementById("tripEndDate").innerHTML.replace("Return: ", "");
    const tripLength = document.getElementById("tripLength").innerHTML.replace("Trip length: ", "");
    const tripWeatherDegree = document.getElementById("tripWeatherDataDegree").innerHTML.replace("High: ", "").replace(", Low:", "");
    const tripWeatherDetails = document.getElementById("tripWeatherDataDetails").innerHTML;
  
    // Add trip data to the PDF
    doc.setFontSize(16);
    doc.text(`Your trip Data:`, 10, 10);
    doc.setFontSize(12);
    doc.text(`City: ${city}`, 10, 20);
    doc.text(`Departing: ${tripDepartingTime}`, 10, 30);
    doc.text(`Trip Timer: ${tripTimer}`, 10, 40);
    doc.text(`Return: ${tripEndDate}`, 10, 50);
    doc.text(`Trip Length: ${tripLength}`, 10, 60);
    doc.text(`Weather: High: ${tripWeatherDegree}, ${tripWeatherDetails}`, 10, 70);
    
    // Save the PDF
    doc.save('trip.pdf');
  }
 
export { trip, timer, updateWeatherData };
