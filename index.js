const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "b1d654dd6c97dd18bc55a3232be341a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        const temp = Math.round(weatherData.main.temp) - 273;
        temperature.innerHTML = `${temp} °C`;
        description.innerHTML = weatherData.weather[0].description;
        humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
        wind_speed.innerHTML = `Wind Speed: ${weatherDaata.wind.speed} m/s`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
