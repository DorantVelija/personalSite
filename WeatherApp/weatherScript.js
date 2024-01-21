const apiKey = 'd6cad16fd259c3486ee5d0f4b0110551'


const search = document.querySelector('.searchbox button');
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const citySearch = document.querySelector('#citySearch');
const searchBtn = document.querySelector('#searchBtn');

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

  //  console.log(data);

    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp);
    document.querySelector('#feelLike').innerHTML = Math.round(data.main.feels_like);
}
searchBtn.addEventListener('click', () => {
    getWeather(citySearch.value);
})

citySearch.addEventListener('keydown', () => {
    if (event.key === "Enter")
     { getWeather(citySearch.value);
    }
})



