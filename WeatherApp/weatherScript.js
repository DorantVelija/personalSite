const apiKey = 'd6cad16fd259c3486ee5d0f4b0110551'


const search = document.querySelector('.searchbox button');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const citySearch = document.querySelector('#citySearch');
const searchBtn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('.weatherIconC');

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('#error').style.display = 'block';
        document.querySelector(".box").style.display = 'none'
    }
    else if(response.status != 404)
    {   
        var data = await response.json();

        document.querySelector('.cityName').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp);
        document.querySelector('#feelLike').innerHTML = Math.round(data.main.feels_like);
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s';
        document.querySelector('.condition').innerHTML = data.weather[0].main;
        document.querySelector('.country').innerHTML = data.sys.country;
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/cloud.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/raincloud.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/raincloud.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/cloud.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/snow.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "./WeatherApp/icons/weatherIcons/lightning.png";
        }

        document.querySelector(".box").style.display = 'flex'
        document.querySelector('#error').style.display = 'none';
    }

    console.log(data);
    
}
searchBtn.addEventListener('click', () => {
    getWeather(citySearch.value);
})

citySearch.addEventListener('keydown', () => {
    if (event.key === "Enter")
     { getWeather(citySearch.value);
    }
})




