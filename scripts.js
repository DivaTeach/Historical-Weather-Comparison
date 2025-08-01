        async function getWeather() {
            const location = document.getElementById("Location").value;
            const apiKey = process.env.API_KEY;
            if (!location) {
                alert("Please enter a valid location!");
                return;
            }

            try {const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?zip=${location},us&units=imperial&appid=${apiKey}`
            ); 

            if (!response.ok) {
                throw new Error("No weather found...");
            }

            const weatherInfo = await response.json();
            console.log(weatherInfo);

            document.getElementById('output').innerText = `In ${weatherInfo.name}, it is ${Math.floor(weatherInfo.main.temp)}°F with ${weatherInfo.weather[0].description}.`;
        } catch (error){
            console.log("Error:", error);
            document.getElementById('output').innerText = "Could not obtain weather.";
         }
        }
        window.getWeather = getWeather;


        async function getForecast() {
            const location = document.getElementById("Location").value;
            const apiKey = process.env.API_KEY;
            if (!location) {
        alert("Please enter a valid location!");
        return;
    }

            try {const response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?zip=${location},us&units=imperial&appid=${apiKey}`
            );

            if (!response.ok) {
                throw new Error("No forecast found...");
            }

            const forecastData = await response.json();
            console.log(forecastData);

            const forecast = forecastData.list[0];
            const forecastIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

            
            document.getElementById('output').innerHTML = `
                Forecast for ${forecastData.city.name}:<br>
                <img src="${forecastIcon}" alt="${forecast.weather[0].description}"/><br>
                ${forecast.dt_txt} will be ${Math.floor(forecast.main.temp)}°F with ${forecast.weather[0].description}.`;
            } catch (error) {
            console.log("Error:", error);
            document.getElementById('output').innerText = "Could not obtain forecast.";
            }
        }
        window.getForecast = getForecast;