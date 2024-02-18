const inputContainer = document.getElementById('input');
const searchbarBtn = document.getElementById('submit');

function handleLocationData(locationDataObj) {
  console.log(locationDataObj);
  const locationName = document.getElementById('location');
  locationName.textContent = `Location: ${locationDataObj.name}`;
}

function handleWeatherData(currentDataObj) {
  console.log(currentDataObj);
  const weatherCondition = document.getElementById('current');
  const weatherTempFahrenheit = document.getElementById('temperature');
  const weatherPerceived = document.getElementById('perceived');

  weatherCondition.textContent = `Currently: ${currentDataObj.condition.text}`;
  weatherTempFahrenheit.innerHTML = `Temperature: ${currentDataObj.temp_f}&deg;F`;
  weatherPerceived.innerHTML = `Feels like: ${currentDataObj.feelslike_f}&deg;F`;
}

const searchForecastData = () => {
  const value = inputContainer.querySelector('input').value;

  if (!value) {
    alert('Please enter a zipcode!');
  } else {
    console.log(`Your input: ${value}`);
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=2c6c88c58eda4929b59212226241702&q=${value}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        handleLocationData(response.location);
        handleWeatherData(response.current);
      });
  }
};

searchbarBtn.addEventListener('click', searchForecastData);