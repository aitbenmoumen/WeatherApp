let api_key = "a8e71c9932b20c4ceb0aed183e6a83bb";
    let api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(api_url + city + `&appid=${api_key}`);
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
    }
    searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value);
    })
