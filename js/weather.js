const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "5a9e419df4779b572d79fad27d8968f3"; // API Key from OpenWeatherApp

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  // const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) //make an HTTP request
    // .then = to handle the response of the fetch request
    .then((response) => response.json()) // Returns a promise that resolves with the parsed JSON data.
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // API Response
}
function onGeoError() {
  alert("Can't find you. No weather info.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);