# Weather-Forecast-App# Weather Dashboard

This is a simple weather dashboard that allows users to search for the current weather and a 5-day forecast for any city using the OpenWeather API. The app displays the temperature, humidity, and wind speed for both current weather and future forecasts. Additionally, a search history feature enables users to quickly revisit previous searches.

## Features
- Search for a city's current weather data (temperature, humidity, and wind speed)
- Display a 5-day weather forecast for the searched city
- Weather icons representing current and forecast conditions
- Search history with clickable entries to quickly load past searches
- Uses Bootstrap 5 for responsive layout and styling

## Technologies Used
- HTML5
- CSS3 (Bootstrap 5 for layout)
- JavaScript (ES6+)
- OpenWeather API

## How to Use
1. Clone the repository to your local machine:
   git clone https://github.com/[your-username]/weather-dashboard.git
2. Navigate into the project directory:
   cd weather-dashboard
3. Install dependencies (none are required beyond the included HTML/CSS/JavaScript files)
4. Open the index.html file in your web browser
5. Type the name of the city in the search bar and click "Search" to view the current weather and the 5-day forecast
6. Click on a previously searched city in the search history to view its weather data again

## API Integration

This application uses the OpenWeather API to fetch weather data. You will need an API key to make requests to this API.

1. Sign up on the OpenWeather website to obtain an API key
2. Replace the placeholder API key in the script.js file with your own key:
   const apiKey = "YOUR_API_KEY_HERE"

## Project Structure

index.html         Main HTML file  
style.css          Custom styles  
script.js          JavaScript logic for weather fetching and DOM manipulation  
README.md          Documentation (this file)

## Future Improvements
- Improve error handling and provide user feedback when the city is not found
- Add unit conversion options (°C to °F)
- Enhance the styling and UI for a better user experience

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
