var cityEl = document.querySelector("#city")
var cityFormEl = document.querySelector("#city-form")
var cityHeaderEl = document.querySelector("#city-header")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")

var api = "1b653f94bddf254b414b6bf02b4be622"

var currentInput = localStorage.getItem("city");

function displayWeather(event) {
    var cityName = cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`

    fetch(urlCurrent)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {

            console.log(currentData)
            var currentDate = moment.unix(currentData.dt).format("MM/DD/YYYY")
            var iconImage = document.createElement("img")
            iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
            cityHeaderEl.innerHTML = currentData.name + "  " + currentDate
            cityHeaderEl.appendChild(iconImage)

            tempEl.textContent = currentData.main.temp
            windEl.textContent = currentData.wind.speed
            humidityEl.textContent = currentData.main.humidity

        })

}

cityFormEl.addEventListener("submit", displayWeather)