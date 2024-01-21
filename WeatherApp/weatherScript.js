const apiKey = 'd6cad16fd259c3486ee5d0f4b0110551'


const search = document.querySelector('.searchbox button');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const citySearch = document.querySelector('#citySearch');
const searchBtn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('.weatherIconC');

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp);
    document.querySelector('#feelLike').innerHTML = Math.round(data.main.feels_like)
    document.querySelector('.condition').innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/WeatherApp/icons/weathericons/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/WeatherApp/icons/weathericons/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/WeatherApp/icons/weathericons/raincloud.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/WeatherApp/icons/weathericons/raincloud.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/WeatherApp/icons/weathericons/cloud.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "WeatherApp/icons/weathericons/snow.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "WeatherApp/icons/weathericons/lightning.png";
    }

    
}
searchBtn.addEventListener('click', () => {
    getWeather(citySearch.value);
})

citySearch.addEventListener('keydown', () => {
    if (event.key === "Enter")
     { getWeather(citySearch.value);
    }
})



