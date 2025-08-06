document.addEventListener("DOMContentLoaded",() =>{
    const cityInput=document.getElementById("city-input")
    const GetWeatherBtn=document.getElementById("get-weather-btn")
    const weatherInfo=document.getElementById("weather-info")
    const cityNameDisplay=document.getElementById("city-name")
    const temperatureDisplay=document.getElementById("temperature")
    const descriptionDisplay=document.getElementById("description")
    const errorMessage=document.getElementById("error-message")
    const API_KEY = "3fd03dc55a40876bfa3f0bced015e6d5"  //env variable

    GetWeatherBtn.addEventListener('click',async ()=>{
        const city  = cityInput.value.trim()
        if(!city) return
        // it may throw an error
        // server/database  is always in another country

        try {
            //using await because the server is never in fast it delays so await keyword is using
           const weatherdata= await fetchWeatherdata(city)
           displayWeatherdata(weatherdata)
        } catch (error) {
            showError()
            
        }


    })


    async function fetchWeatherdata(city){
        //gets the data
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response= await fetch(url)

        if(!response.ok){
            throw new Error("City Not Found");
            
        }
        const data = await response.json()
        return data
        

    }

    function displayWeatherdata(data){
        console.log(data);
        const{name,main,weather} = data
        cityNameDisplay.textContent = name
        temperatureDisplay.textContent=`Temperature : ${main.temp} °C`
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`

        //Remove all teh weather related body classes first
        document.body.className =""

        //Add class based on the weatehr condition
        const weatherType = weather[0].main.toLowerCase()
        document.body.classList.add(weatherType)

        //unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add("hidden")
        
    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')

    }
})