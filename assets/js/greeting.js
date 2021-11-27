"use strict";
// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
/* global CONFIG */
// Get the hour
const today = new Date();
const hour = today.getHours();
// Here you can change your name
const { name: userName } = CONFIG;
// Here you can change your greetings
const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;
// Define the hours of the greetings
if (hour >= 23 || hour < 5) {
    document.getElementById("greetings").innerText = gree1 + userName;
}
else if (hour >= 6 && hour < 12) {
    document.getElementById("greetings").innerText = gree2 + userName;
}
else if (hour >= 12 && hour < 17) {
    document.getElementById("greetings").innerText = gree3 + userName;
}
else {
    document.getElementById("greetings").innerText = gree4 + userName;
}
