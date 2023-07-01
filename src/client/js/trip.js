//import { stgtImage } from '../index';

function trip() {
    var imageHTML = '<img src="' + Client.tripImage + '" alt="Trip Image">';


    let today = new Date();
    let selectedDate = new Date(Client.tripStartDate);
    let timeDifference = selectedDate.getTime() - today.getTime();
    let tripTimer = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    




    const tripWeatherDataDegreeHigh = "28";
    const tripWeatherDataDegreeLow = "21";

    document.getElementById("tripImg").innerHTML = imageHTML;
    document.getElementById("city").innerHTML = "My trip to: " + Client.tripCity;

    console.log("tripCity: " + Client.tripCity);
    document.getElementById("tripDepartingTime").innerHTML = "Departing: " + Client.tripStartDate;
    document.getElementById("tripTimer").innerHTML = Client.tripCity + " is " + tripTimer + " days away";
    document.getElementById("tripWeatherDataDegree").innerHTML = "High: " + Client.weatherTemp + ", Low:" + tripWeatherDataDegreeLow;
    document.getElementById("tripWeatherDataDetails").innerHTML = Client.weatherDetails;
}

export { trip };