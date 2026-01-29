const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
const error = document.querySelector('.weather-error');

function clearWeather() {
  weatherIcon.className = "weather-icon owf";
  temperature.textContent = '';
  weatherDescription.textContent = '';
  wind.textContent = '';
  humidity.textContent = '';
}

function saveCity() {
  const city = cityInput.value.trim();
  if (city) {
    localStorage.setItem('city', city);
  }
}

function loadCity() {
  const savedCity = localStorage.getItem('city');
  if (savedCity) {
    cityInput.value = savedCity;
  } else {
    cityInput.value = 'Волгоград';
  }
}

async function getWeather() {

  const city = cityInput.value.trim();

  error.textContent = '';
  clearWeather();

  if(!city) {
    error.textContent = `Введите название города`;
    clearWeather();
    return;
  }
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);


  if (res.status === 404 || res.status === 400) {
    error.textContent = `Город ${city} не существует`;
    clearWeather();
    return;
  }

  if (!res.ok) {
    error.textContent = `Ошибка сервера: ${res.status}`;
    clearWeather();
    return;
  }

  const data = await res.json();

  error.textContent = '';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Ветер: ${data.wind.speed} м/с`;
  humidity.textContent = `Влажность: ${data.main.humidity}%`;

}

export function initWeather() {
  loadCity();
  getWeather();
  cityInput.addEventListener('change', () => {
    saveCity();
    getWeather();
  });
}
