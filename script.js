 const apiKey="9005343825ad9a0712a2d604c88c99d6";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox=document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");
        
        async function checkWeather(city){
           const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);
           if(response.status===404){
              document.querySelector(".error").style.display="block";
              document.querySelector(".weather").style.display = "none";
           }
           else{
             document.querySelector(".error").style.display = "none";
            let data = await response.json();

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            if (data.weather[0].main === "Clouds") {
              weatherIcon.src = "images/clouds.png";
            }
            else if (data.weather[0].main === "Clear") {
              weatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main === "Rain") {
              weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main === "Drizzle") {
              weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main === "Mist") {
              weatherIcon.src = "images/Mist.png";
            }

            document.querySelector(".weather").style.display = "block";
          }
        }
          searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
          })