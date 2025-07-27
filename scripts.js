        async function getWeather() {
            const location = document.getElementById("Location").value;
            const apiKey = process.env.API_KEY;
            if (!location) {
                alert("Please enter a valid location!");
                return;
            }

            try {const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
            ); 

            if (!response.ok) {
                throw new Error("No weather found...");
            }

            const weatherInfo = await response.json();
            console.log(weatherInfo);

            document.getElementById('output').innerText = `In ${weatherInfo.name}, it is ${weatherInfo.main.temp}°F with ${weatherInfo.weather[0].description}.`;
        } catch (error){
            console.log("Error:", error);
            document.getElementById('output').innerText = "Could not obtain weather.";
         }
        }
        window.getWeather = getWeather;