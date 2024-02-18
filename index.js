const inputContainer = document.getElementById('input');
const searchbarBtn = document.getElementById('submit');

const searchForecastData = () => {
  const value = inputContainer.querySelector('input').value;

  if (!value) {
    alert('Please enter a zipcode!');
  } else {
    console.log(value);
  }
};

searchbarBtn.addEventListener('click', searchForecastData);