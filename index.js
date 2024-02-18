const inputContainer = document.getElementById('input');
const searchbarBtn = document.getElementById('submit');

const searchForecastData = () => {
  const value = inputContainer.querySelector('input').value;

  if (!value) {
    alert('Please enter a zipcode!');
  } else {
    console.log(`Your input: ${value}`);
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=2c6c88c58eda4929b59212226241702&q=${value}`)
      .then(function(response) {
        const output = response.json();
        console.log(output);
      });
  }
};

searchbarBtn.addEventListener('click', searchForecastData);