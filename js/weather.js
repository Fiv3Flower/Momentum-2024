const API_KEY = "25e0348d29ed852e59ef72bd5a92db24";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then((data) => {
        const degree = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        degree.innerText = `/ ${data.main.temp}°C /`;
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
    alert("Please approve location permission");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);