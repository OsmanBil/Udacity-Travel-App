import { stgtImage } from '../index';

function tripData() {
    var imageHTML = '<img src="' + stgtImage + '" alt="Trip Image">';

    const tripCity = "Berlin, Germany";
    const tripDepartingTime = "27.06.2023";
    const tripTimer = "222";
    const tripWeatherDataDegreeHigh = "28";
    const tripWeatherDataDegreeLow = "21";
    const tripWeatherDataDetails = "Mostly cloudy throughout the day"

    document.getElementById("tripImg").innerHTML = imageHTML;
    document.getElementById("city").innerHTML = "My trip to: " + tripCity;
    document.getElementById("tripDepartingTime").innerHTML = "Departing: " + tripDepartingTime;
    document.getElementById("tripTimer").innerHTML = tripCity + " is " + tripTimer + " days away";
    document.getElementById("tripWeatherDataDegree").innerHTML = "High: " + tripWeatherDataDegreeHigh + ", Low:" + tripWeatherDataDegreeLow;
    document.getElementById("tripWeatherDataDetails").innerHTML = tripWeatherDataDetails;
}

window.onload = tripData;