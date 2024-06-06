const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '92952a612cmsh5ace0a9d9283241p1f4f3ajsne964818c68dd',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	CityName.innerHTML = city

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
(async () => {
	try {
		// Sending the GET request to the weather API
		const response = await fetch(url, options);
		
		// Parsing the response as JSON
		const result = await response.json();
		
		// Extracting specific weather data fields
		//cloud_pct.innerHTML = result.cloud_pct;
		temp.innerHTML = result.temp;
		temp2.innerHTML = result.temp;
		feels_like.innerHTML = result.feels_like;
		humidity.innerHTML = result.humidity;
		humidity2.innerHTML = result.humidity;
		min_temp.innerHTML = result.min_temp;
		max_temp.innerHTML = result.max_temp;
		wind_speed.innerHTML = result.wind_speed;
		wind_speed2.innerHTML = result.wind_speed;
		wind_degrees.innerHTML = result.wind_degrees;
		sunrise.innerHTML = result.sunrise;
		sunset.innerHTML = result.sunset;
		
		// Logging the extracted weather data
		console.log('Cloud Percentage:', cloud_pct);
		console.log('Temperature:', temp);
		console.log('Feels Like:', feels_like);
		console.log('Humidity:', humidity);
		console.log('Min Temperature:', min_temp);
		console.log('Max Temperature:', max_temp);
		console.log('Wind Speed:', wind_speed);
		console.log('Wind Degrees:', wind_degrees);
		console.log('Sunrise:', sunrise);
		console.log('Sunset:', sunset);
		
	} catch (error) {
		// Logging any errors that occur during the fetch request
		console.error(error);
	}
})();
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)

})
getWeather("Visakhapatnam")

const cities = ['Tokyo', 'Shibuya', 'Seoul', 'Hyderabad'];

const getWeather2 = async (city) => {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

	try {
		// Sending the GET request to the weather API
		const response = await fetch(url, options);
		// Parsing the response as JSON
		const result = await response.json();
		
		// Updating HTML elements for the specific city
		document.getElementById(`${city.toLowerCase()}_temp`).innerHTML = result.temp;
		document.getElementById(`${city.toLowerCase()}_feels_like`).innerHTML = result.feels_like;
		document.getElementById(`${city.toLowerCase()}_humidity`).innerHTML = result.humidity;
		document.getElementById(`${city.toLowerCase()}_min_temp`).innerHTML = result.min_temp;
		document.getElementById(`${city.toLowerCase()}_max_temp`).innerHTML = result.max_temp;
		document.getElementById(`${city.toLowerCase()}_wind_speed`).innerHTML = result.wind_speed;
		document.getElementById(`${city.toLowerCase()}_wind_degrees`).innerHTML = result.wind_degrees;
		document.getElementById(`${city.toLowerCase()}_sunrise`).innerHTML = result.sunrise;
		document.getElementById(`${city.toLowerCase()}_sunset`).innerHTML = result.sunset;
		
		console.log(`Weather data for ${city}:`, result);
	} catch (error) {
		console.error(`Error fetching weather data for ${city}:`, error);
	}
};

const updateWeatherForAllCities = () => {
	cities.forEach(city => getWeather2(city));
};

updateWeatherForAllCities();
