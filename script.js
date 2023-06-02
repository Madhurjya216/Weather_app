const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '155d0a77c5mshb96d5310eeb4c1dp193ac6jsnc848c51dcbd9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const Weather = (city) => {
	cityName.innerText = city;
	const response = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then((res) => res.json())
    .then((res) => {

		feels_like.innerText = res.feels_like
		humid.innerText = res.humidity
		humidity.innerText = res.humidity
		max_temp.innerText = res.max_temp
		min_temp.innerText = res.min_temp
		sunrise.innerText = res.sunrise
		sunset.innerText = res.sunset
		temperature.innerText = res.temp
		temp.innerText = res.temp
		wind_degrees.innerText = res.wind_degrees
		wind_speed.innerText = res.wind_speed
		wind_speedd.innerText = res.wind_speed

        console.log(res);

		if(city === ''){
			alert('Please Enter the location!')
		}
    })
}


	submit.addEventListener('click', (e) => {
		e.preventDefault();
		Weather(city.value)
	})