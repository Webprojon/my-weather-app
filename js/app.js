// WEATHER APP
const datas = {
  key: "47f3e6c698f48f28f8fb87e45d8f060f",
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
};

// Selectors & Events & Functions
const input = document.querySelector("#search");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", enterCity);
function enterCity() {
  let city = input.value;
  getRequest(city);
}

async function getRequest(location) {
  let response = await fetch(
    `${datas.url} ${location}&units=metric&APPID=${datas.key}`
  );
  let json = await response.json();
  console.log(json);
  renderHTML(json);
}

function renderHTML(data) {
  let currentData = datee();
  const place = `<h2>${data.name}, <span>${data.sys.country}</span></h2>
     <p class="date">${currentData}</p>`;
  document.querySelector(".location").innerHTML = place;

  const temprature = `<h2 class="temp">${Math.round(
    data.main.temp
  )} <spam>°C</spam></h2>
        <p class="situation">${data.weather[0].main}</p>
        <p class="high_low">${Math.round(data.main.temp_min)}°C / ${Math.round(
    data.main.temp_max
  )}°C</p>`;
  document.querySelector(".temp_box").innerHTML = temprature;
}

// Creating Date
function datee() {
  let time = new Date(),
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  return `${days[time.getDay()]} ${time.getDate()} ${
    months[time.getMonth()]
  } ${time.getFullYear()}`;
}
