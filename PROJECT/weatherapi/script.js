function getWeather(){
    const apiKey = 'c835d5a4ff15f3e9a2fdce40c6fdbcd6';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
     .then(response => response.json())
     .then(data => {
        displayWeather(data);
     })
     .catch(error=>{
        console.error('Error fetching current weather',error);
        alert('Error Fetching current weather try again later');
     });

     fetch(forecastUrl)
     .then(response => response.json())
     .then(data => {
        displayForecast(data.list);
     })
     .catch(error=>{
        console.error('Error fetching hourly forecast',error);
        alert('Error Fetching hourly forecast try again later');
     });

     function displayWeather(data){
        const tempDivInfo = document.getElementById('container');
        const weatherInfo = document.getElementById('info');
        const weatherIcon = document.getElementById('icon');
        const hourlyForecast = document.getElementById('forecast');

        weatherInfo.innerHTML = '';
        hourlyForecast.innerHTML = '';
        tempDivInfo.innerHTML = '';

        if (data.cod == '404'){
            weatherInfo.innerHTML = `<p>${data.message}</p>`;
        }
        else{
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            const temperatureHTML = `<p>${temperature}</p>`;
            const weatherHTML = `<p>${cityName}</p>
            <p>${description}</p>`;

            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfo.innerHTML = weatherHTML;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = description;

            showImage()
        }
     }

     function displayForecast(data){
        const hourlyForecastdiv = document.getElementById('forecast');
        const next24Hours = data.slice(0,8);

        next24Hours.forEach(item =>{
            const dateTime = new Date(item.dt * 1000);
            const hour = dateTime.getHours();
            const temperature = Math.round(item.main.temp - 273.15);
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            const hourlyItemHtml = `<div class= "hourly-item">
            <span>${hour}:00</span>
            <img src = "${iconUrl}" alt = "Hourly weather icon">
            <span>${temperature}</span>
            </div>`;

            hourlyForecastdiv.innerHTML += hourlyItemHtml;
        })

        function showImage(){
            const weatherIcon = document.getElementById('icon');
            weatherIcon.style.display = 'block';
        }
     }
}