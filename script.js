//define all html static selectors
var cityEl= document.querySelector("#city")
var cityFormEl= document.querySelector("#city-form")
var cityHeaderEl= document.querySelector("#city-header")
var tempEl= document.querySelector("#temp")
var windEl= document.querySelector("#wind")
var humidityEl= document.querySelector("#humidity")
var uviEl= document.querySelector("#uvi")

var dayEl= document.querySelector("#day")
var tempDayEl= document.querySelector("#temp-day")
var windDayEl= document.querySelector("#wind-day")
var humidityDayEl= document.querySelector("#humidity-day")

var api="1b653f94bddf254b414b6bf02b4be622"


//definition of functions

function displayWeather(event){
    event.preventDefeault()
    var cityName=cityEl.value
    var urlCurrent=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`

    fetch(urlCurrent)
    .then(function(response){
        return response.json()
    })
    .then(function(currentDatea){

        console.log(currentDatea)
    })
}


//Add Event Listeners/Global Function Call

cityFormEl.addEventListener("submit", displayWeather)