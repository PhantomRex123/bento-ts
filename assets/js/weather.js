"use strict";
// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
/* global CONFIG */
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
// App data
const weather = {};
weather.temperature = {
    unit: "celsius",
};
const tempUnit = CONFIG.weatherUnit;
const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = `${CONFIG.weatherKey}`;
// Display Weather info
function displayWeather() {
    iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
    descElement.innerHTML = weather.description;
}
// Get the Weather data
function getWeather(latitude, longitude) {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;
    fetch(api)
        .then((response) => {
        const data = response.json();
        return data;
    })
        .then((data) => {
        const celsius = Math.floor(data.main.temp - KELVIN);
        weather.temperature.value =
            tempUnit === "C" ? celsius : (celsius * 9) / 5 + 32;
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
    })
        .then(() => {
        displayWeather();
    });
}
function setPosition() {
    if (!CONFIG.trackLocation || !navigator.geolocation) {
        if (CONFIG.trackLocation) {
            console.error("Geolocation not available");
        }
        getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
        return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
        getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
    }, (err) => {
        console.error(err);
        getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
    });
}
// Set Position function
setPosition();
