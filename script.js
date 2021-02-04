getTemperatureDetails("dhaka");
document.getElementById("search-btn").addEventListener("click",()=>{
   let cityName = document.getElementById("inputCityName").value;
   if(!(cityName)){
    showWarning("Input a city name.");
   }
   else{
    getTemperatureDetails(cityName);
   }
    
})

function getTemperatureDetails(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=33fb7809e8fbae3a84694a71c98f9ad5`)
        .then(res => res.json())
        .then(data => {
            let temperature = data.main.temp;
            let weatherDescription = data.weather[0].description;
            let weatherIcon = data.weather[0].icon;
            let checkCityName = data.name;

            let iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            document.getElementById("weather-icon").src = iconUrl;
            
            setValue("displayCityName", checkCityName);
            setValue("displayTemperature", temperature);
            setValue("displayDescription", weatherDescription);
            
            document.getElementById("inputCityName").value="";
            showWarning(" ");
        })
        .catch(err =>{
            showWarning("City Not Found. Try Again.");
        })
}

function showWarning(text){
    document.getElementById("errorNote").innerText = text;
}

function setValue(id, value) {
    document.getElementById(id).innerText = value;
}