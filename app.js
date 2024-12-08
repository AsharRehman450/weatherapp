



const API_KEY = `743090e3418240565bad01c59c92919e`;
const inputdata = document.getElementById("inputfield");
const showWeather = document.getElementById("showWheather");

const searchData = async () => {
    showWeather.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;

    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();

    console.log(response);
    return showData(response);
};

const showData = (data) => {

    
        showWeather.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.main.temp}°C</h1>
            <h2>${data.weather[0].main}</h2>
            <h3>Humidity:${data.main.humidity}%</h3> 
            <h3>Perciption:${data.main.pressure}</h3> 
            <h3>Feels_like:${data.main.feels_like}</h3> `


    }
