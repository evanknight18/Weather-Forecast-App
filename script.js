function displayCurrentWeather(data) {
    const currentCity = document.getElementById("currentCity");
    currentCity.textContent = `${data.name} (${new Date().toLocaleDateString()}) `;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
    currentCity.appendChild(weatherIcon);
    
    const tempInFahrenheit = ((data.main.temp * 9) / 5 + 32).toFixed(1);
    document.getElementById("currentTemperature").textContent = tempInFahrenheit;
    
    document.getElementById("currentHumidity").textContent = data.main.humidity;
    document.getElementById("currentWindSpeed").textContent = data.wind.speed.toFixed(1);
}


function displayForecast(forecastData) {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    for (let i = 0; i < forecastData.list.length; i += 8) {
        const forecast = forecastData.list[i];
        const forecastDate = new Date(forecast.dt * 1000);
        const forecastCard = document.createElement("div");
        forecastCard.className = "card";
        forecastCard.innerHTML = `
            <div class="card-body">
                <h6>${forecastDate.toLocaleDateString()}</h6>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
                <p>Temp: ${((forecast.main.temp * 9) / 5 + 32).toFixed(1)} °F</p>
                <p>Wind: ${forecast.wind.speed.toFixed(1)} m/s</p>
                <p>Humidity: ${forecast.main.humidity} %</p>
            </div>
        `;
        forecastContainer.appendChild(forecastCard);
    }
}

function addToSearchHistory(city) {
    const searchHistory = document.getElementById("searchHistory");
    const listItem = document.createElement("li");
    listItem.textContent = city;
    listItem.className = "list-group-item";
    listItem.addEventListener("click", () => {
        searchCity(city);
    });
    searchHistory.appendChild(listItem);
}

function searchCity(city) {
    const apiKey = "9a0e91aa954a12ce88cf12f938a18272";
    const citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(citySearchUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching city data");
            }
            return response.json();
        })
        .then((data) => {
            displayCurrentWeather(data);

            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

            return fetch(forecastUrl);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching forecast data");
            }
            return response.json();
        })
        .then((forecastData) => {
            displayForecast(forecastData);
            addToSearchHistory(city);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

function searchCityHandler() {
    const cityInput = document.getElementById("cityInput").value;
    searchCity(cityInput);
    document.getElementById("cityInput").value = "";
}

document.getElementById("searchBtn").addEventListener("click", searchCityHandler);

document.getElementById("cityInput").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchCityHandler();
    }
});

