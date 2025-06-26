async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "8e59e23f199683f1707cc00251fc3c15"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const weather = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].main}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
    document.getElementById("weatherInfo").innerHTML = weather;
  } else {
    document.getElementById("weatherInfo").innerHTML = `<p>City not found!</p>`;
  }
}
