const apiKey = "4b37b16b488040b3bb1170722262404"
let cityName = "hyderabad";

let elements = {
  city : document.getElementById('cityName'),
  temp : document.getElementById('temp'),
  input: document.querySelector('.input'),
  todayForecast : document.getElementById('todayForecast'),
  rainChance : document.getElementById('rainChance'),
  cardContainer : document.getElementById('cardContainer'),
  toggleContainer : document.querySelector('.toggleContainer'),
  windInfo : document.getElementById('windInfo'),
  humidInfo : document.getElementById('humidityInfo'),
  tempText : document.getElementById('tempText'),
  weatherSvg : document.getElementById('weatherSvg'),
  uvCircle : document.getElementById("uvProgress"),
  uvCardTitle : document.getElementById('uvCardTitle'),
  uvCardLabel : document.getElementById('uvCardLabel'),
  uvCardDesc : document.getElementById('uvCardDesc'),
  airCircle : document.getElementById('airProgress'),
  airCardTitle : document.getElementById('airCardTitle'),
  airCardLabel : document.getElementById('airCardLabel'),
  airCardDesc : document.getElementById('airCardDesc'),
  sunrise: document.getElementById('sunriseTime'),
  sunset : document.getElementById('sunsetTime'),
  miniFeelsLike : document.getElementById('miniFeelsLike'),
  feelsLikeDesc : document.getElementById('feelsLikeDesc'),
  humidCardDesc : document.getElementById('humidCardDesc'),
  circle : document.getElementById("humidityProgressCircle"),
  text : document.getElementById("percentage"),
  miniCardPressure : document.getElementById('pressureTitle'),
  pressureDesc : document.getElementById("pressureDesc"),
  weather : document.getElementById('weather'),
  detailTemp : document.querySelector('.detail-temp'),
  detailDay : document.querySelector('.detail-day'),
  detailFull : document.querySelector('.detail-full-date'),
  detailDesc : document.querySelector('.detail-desc'),
  detailHilo : document.querySelector(".detail-hilo"),
  detailCity : document.querySelector(".detail-city"),
  highTemp :document.getElementById('highTemp'),
  lowTemp : document.getElementById('lowTemp'),
  statPillWindVal : document.getElementById('statPillWindVal'),
  statPillHumiVal : document.getElementById('statPillHumiVal'),
  statPillUvVal : document.getElementById('statPillUvVal'),
  statPillRainVal : document.getElementById('statPillRainVal'),
  detailImg : document.getElementById('detailImg'),
  detailBigIcon : document.querySelector('.detail-big-icon'),
  rightCard : document.querySelectorAll('.right-card'),
  rightRowWind : document.getElementById('right-row-wind'),
  rightRowPressure : document.getElementById('right-row-pressure'),
  rightRowHumidity : document.getElementById('right-row-humidity'),
  rightRowRain : document.getElementById('right-row-rain'),
  rightRowFeels : document.getElementById('right-row-feels'),
  rightRowUvProgress : document.getElementById('rightRowUvProgress'),
  rightRowUv : document.getElementById('rightRowUv'),
  rightRowUvDesc: document.getElementById('rightRowUvDesc'),
  uvDivider : document.getElementById('uvDivider'),
  rightRowSunrise : document.getElementById('rightRowSunrise'),
  rightRowSunset : document.getElementById('rightRowSunset'),
  detailCard : document.querySelector(".detail-card"),
  hourlyCardsContainer : document.querySelector('.hourlyCardsContainer')
}

const svgs = {
  day: {
    sunny: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 191, 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    rain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(185, 235, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-rain-icon lucide-cloud-rain"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>`,
    cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="whitesmoke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloudy-icon lucide-cloudy"><path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"/><path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"/></svg>`,
    storm: `<svg fill="lightskyblue" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M453.6,156.34c-6.928,0-13.837,1.252-20.319,3.653c-7.062-11.157-17.011-20.253-28.763-26.273 c-2.33-72.42-61.969-130.614-134.945-130.614c-29.968,0-58.346,9.618-82.064,27.816c-21.731,16.671-38.102,39.923-46.459,65.855 c-31.465,7.255-56.688,31.255-65.662,62.072c-5.469-1.667-11.155-2.508-16.989-2.508C26.198,156.34,0,182.538,0,214.739 s26.198,58.399,58.4,58.399H207.84l-38.152,100.839c-0.871,2.303-0.556,4.886,0.843,6.91c1.399,2.025,3.703,3.234,6.165,3.234 h79.821L204.374,498.29c-1.538,3.369-0.386,7.355,2.712,9.383c1.259,0.823,2.684,1.224,4.1,1.224c2.07,0,4.117-0.855,5.584-2.494 l152.87-170.659c1.972-2.201,2.466-5.357,1.26-8.055c-1.206-2.698-3.885-4.436-6.841-4.436h-82.078l18.036-50.114h153.585 c32.201,0,58.4-26.198,58.4-58.399S485.802,156.34,453.6,156.34z M264.271,328.207c-0.826,2.296-0.483,4.849,0.92,6.846 s3.689,3.185,6.13,3.185h75.967l-108.83,121.494l36.533-79.988c1.06-2.32,0.866-5.018-0.512-7.164 c-1.379-2.146-3.753-3.442-6.304-3.442H187.54l36.32-95.999h60.229L264.271,328.207z M453.6,258.153H58.4 c-23.939,0-43.415-19.476-43.415-43.414c0-23.939,19.476-43.415,43.415-43.415c6.66,0,13.053,1.472,19.001,4.372 c2.106,1.028,4.572,1.012,6.663-0.046c2.092-1.057,3.568-3.031,3.991-5.337c5.569-30.376,29.747-54.37,60.164-59.706 c2.83-0.497,5.128-2.568,5.913-5.334c14.577-51.333,62.049-87.184,115.443-87.184c66.162,0,119.992,53.81,120.031,119.963 c-0.005,0.129-0.009,0.259-0.01,0.39c-0.023,3.016,1.764,5.75,4.533,6.941c12.664,5.443,23.069,15.234,29.297,27.57 c0.903,1.789,2.484,3.142,4.393,3.756c1.905,0.613,3.98,0.438,5.758-0.488c6.237-3.25,12.974-4.897,20.024-4.897 c23.939,0,43.415,19.476,43.415,43.415C497.015,238.677,477.539,258.153,453.6,258.153z"></path> </g> </g> <g> <g> <path d="M364.708,121.803c-12.878-45.347-54.812-77.018-101.977-77.018c-4.139,0-7.492,3.354-7.492,7.492s3.354,7.492,7.492,7.492 c40.498,0,76.505,27.193,87.561,66.127c0.937,3.297,3.938,5.448,7.204,5.448c0.677,0,1.367-0.093,2.051-0.287 C363.527,129.927,365.839,125.784,364.708,121.803z"></path> </g> </g> </g></svg>`,
    mist: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="mistyrose" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-fog-icon lucide-cloud-fog"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg>`
  },
  night: {
    sunny: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`,
    rain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(185, 235, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-moon-rain-icon lucide-cloud-moon-rain"><path d="M11 20v2"/><path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"/><path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"/><path d="M7 19v2"/></svg>`,
    cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="whitesmoke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloudy-icon lucide-cloudy"><path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"/><path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"/></svg>`,
    storm: `<svg fill="lightskyblue" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M453.6,156.34c-6.928,0-13.837,1.252-20.319,3.653c-7.062-11.157-17.011-20.253-28.763-26.273 c-2.33-72.42-61.969-130.614-134.945-130.614c-29.968,0-58.346,9.618-82.064,27.816c-21.731,16.671-38.102,39.923-46.459,65.855 c-31.465,7.255-56.688,31.255-65.662,62.072c-5.469-1.667-11.155-2.508-16.989-2.508C26.198,156.34,0,182.538,0,214.739 s26.198,58.399,58.4,58.399H207.84l-38.152,100.839c-0.871,2.303-0.556,4.886,0.843,6.91c1.399,2.025,3.703,3.234,6.165,3.234 h79.821L204.374,498.29c-1.538,3.369-0.386,7.355,2.712,9.383c1.259,0.823,2.684,1.224,4.1,1.224c2.07,0,4.117-0.855,5.584-2.494 l152.87-170.659c1.972-2.201,2.466-5.357,1.26-8.055c-1.206-2.698-3.885-4.436-6.841-4.436h-82.078l18.036-50.114h153.585 c32.201,0,58.4-26.198,58.4-58.399S485.802,156.34,453.6,156.34z M264.271,328.207c-0.826,2.296-0.483,4.849,0.92,6.846 s3.689,3.185,6.13,3.185h75.967l-108.83,121.494l36.533-79.988c1.06-2.32,0.866-5.018-0.512-7.164 c-1.379-2.146-3.753-3.442-6.304-3.442H187.54l36.32-95.999h60.229L264.271,328.207z M453.6,258.153H58.4 c-23.939,0-43.415-19.476-43.415-43.414c0-23.939,19.476-43.415,43.415-43.415c6.66,0,13.053,1.472,19.001,4.372 c2.106,1.028,4.572,1.012,6.663-0.046c2.092-1.057,3.568-3.031,3.991-5.337c5.569-30.376,29.747-54.37,60.164-59.706 c2.83-0.497,5.128-2.568,5.913-5.334c14.577-51.333,62.049-87.184,115.443-87.184c66.162,0,119.992,53.81,120.031,119.963 c-0.005,0.129-0.009,0.259-0.01,0.39c-0.023,3.016,1.764,5.75,4.533,6.941c12.664,5.443,23.069,15.234,29.297,27.57 c0.903,1.789,2.484,3.142,4.393,3.756c1.905,0.613,3.98,0.438,5.758-0.488c6.237-3.25,12.974-4.897,20.024-4.897 c23.939,0,43.415,19.476,43.415,43.415C497.015,238.677,477.539,258.153,453.6,258.153z"></path> </g> </g> <g> <g> <path d="M364.708,121.803c-12.878-45.347-54.812-77.018-101.977-77.018c-4.139,0-7.492,3.354-7.492,7.492s3.354,7.492,7.492,7.492 c40.498,0,76.505,27.193,87.561,66.127c0.937,3.297,3.938,5.448,7.204,5.448c0.677,0,1.367-0.093,2.051-0.287 C363.527,129.927,365.839,125.784,364.708,121.803z"></path> </g> </g> </g></svg>`,
    mist: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="mistyrose" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-fog-icon lucide-cloud-fog"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg>`
  }
}

function setLoader(element){
  element.classList.add("loader");
}

function hideLoader(element){
  element.classList.remove("loader");
}

function saveToCache(key, data){
  const cacheObj = {
    data: data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cacheObj));
}

function getFromCache(key, maxAge = 30 * 60 * 1000){
  const cached = localStorage.getItem(key);
  if(!cached) return null;

  try {
    const parsed = JSON.parse(cached);

    const isExpired = Date.now() - parsed.timestamp > maxAge;

    if(isExpired){
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch (e) {
    console.error("Cache parse error:", e);
    localStorage.removeItem(key);
    return null;
  }
}

function getSvg(condition, is_day){
    if(is_day == 1){
      if(condition.includes("sunny") || condition.includes("clear")){
        return svgs.day.sunny;
      } else if(condition.includes("rain")){
        return svgs.day.rain;
      } else if(condition.includes("cloud")){
        return svgs.day.cloud;
      } else if(condition.includes("storm") || condition.includes("thunder")){
        return svgs.day.storm;
      } else if(condition.includes("mist") || condition.includes("fog")){
        return svgs.day.mist;
      } else{
        return svgs.day.sunny;
      }
    } else if (is_day == 0){
      if(condition.includes("sunny") || condition.includes("clear")){
        return svgs.night.sunny;
      } else if(condition.includes("rain")){
        return svgs.night.rain;
      } else if(condition.includes("cloud")){
        return svgs.night.cloud;
      } else if(condition.includes("storm") || condition.includes("thunder")){
        return svgs.night.storm;
      } else if(condition.includes("mist") || condition.includes("fog")){
        return svgs.night.mist;
      } else{
        return svgs.night.sunny;
      }
    } else{
      return svgs.day.sunny;
    }
}

function getBg(condition, is_day){
  let bg = "";
  if (is_day == 1){
    if (condition.includes("clear") || condition.includes("sunny")){
      return "url('images/sunny-day-bg.png')";
    } else if(condition.includes("rain")){
      return "url('images/rain-day-bg.png')";
    } else if(condition.includes("cloud")){
      return "url('images/cloudy-day-bg.jpg')";
    } else if(condition.includes("storm") || condition.includes("thunder")){
      return "url('images/stormy-day-bg.jpg')";
    } else if(condition.includes("mist") || condition.includes("fog")){
      return "url('images/mist-day-bg.jpeg')";
    } else{
      return "url('images/sunny-day-bg.png')";
    }
  } else if(is_day == 0){
    if (condition.includes("clear") || condition.includes("sunny")){
      return "url('images/clear-night-bg.jpg')";
    } else if(condition.includes("rain")){
      return "url('images/rainy-night-bg.png')";
    } else if(condition.includes("cloud")){
      return "url('images/cloud-night-bg.jpg')";
    } else if(condition.includes("storm") || condition.includes("thunder")){
      return "url('images/stormy-night-bg.jpg')";
    } else if(condition.includes("mist") || condition.includes("fog")){
      return "url('images/mist-night-bg.png')";
    } else{
      return "url('images/clear-night-bg.jpg')";
    }
  } else{
    return "url('images/sunny-day-bg.png')";
  }
}

function pressureStyle(pressure){
  if (pressure < 995) {
    return {
      text: "Very Low Pressure",
      color: "orangered"
    }
  } else if (pressure >= 995 && pressure < 1000) {
    return {
      text: "Low Pressure",
      color: "#ff6b6b"
    }  
  } else if (pressure >= 1000 && pressure <= 1020) {
    return {
      text: "Normal Pressure",
      color: "#2ecc71"
    }
  } else if (pressure > 1020 && pressure <= 1025) {
    return {
      text: "High Pressure",
      color: "#3498db"
    }
  } else {
    return {
      text: "Very High Pressure",
      color: "#1e90ff"
    }
  }
}

function humidityStyle(progress){
    if (progress >= 0 && progress <= 20){
    return "Dry";
  }
  else if (progress >= 21 && progress <= 40){
    return "Comfortable";
  }
  else if (progress >= 41 && progress <= 60){
    return "Pleasant";
  }
  else if (progress >= 61 && progress <= 75){
    return "Humid";
  }
  else if (progress >= 76 && progress <= 100){
    return "Muggy";
  }
}

function airProgressUi(airProgress){
  if (airProgress === 1) {
    return {
      label: "Good",
      color: "rgb(0, 200, 83)",
      text: "Excellent air quality outdoors."
    }
  } 
  else if (airProgress === 2) {
    return{
      label: "Moderate",
      color: "rgb(214, 197, 0)",
      text: "Acceptable air, minor concerns.",
    }
  } 
  else if (airProgress === 3) {
    return{
      label: "Sensitive",
      color: "rgb(255, 152, 0)",
      text: "Unhealthy for sensitive people."
    }
  } 
  else if (airProgress === 4) {
    return{
      label: "Unhealthy",
      color: "rgb(244, 67, 54)",
      text: "Poor air, limit outdoor activity."
    }
  } 
  else if (airProgress === 5) {
    return{
      label: "Very Unhealthy",
      color: "rgb(156, 39, 176)",
      text: "Stay indoors, reduce activity."
    }
  } 
  else if (airProgress === 6) {
    return{
      label: "Hazardous",
      color: "rgb(96, 0, 0)",
      text: "Dangerous air, avoid going outside."
    }
  } 
  else {
    return{
      label: "Unknown",
      color: "rgb(255, 152, 0)",
      text: "Air quality data unavailable."
    }
  }
}

function uvProgressUi(uvProgress){
  if(uvProgress <= 2){
    return{
      label: "Safe",
      text: "Low UV. Safe to go outside with minimal protection.",
      color: "rgb(76, 175, 80)"
    }
  } 
  else if(uvProgress >= 3 && uvProgress <= 5){
    return{
      label: "Moderate",
      text: "Wear sunglasses and use sunscreen when outdoors.",
      color: "rgb(255, 193, 7)"
    }
  } 
  else if(uvProgress >= 6 && uvProgress <= 7){
    return{
      label: "Strong",
      text: "Use sunscreen, wear a hat, and seek shade during midday.",
      color: "rgb(255, 152, 0)"
    }
  } 
  else if(uvProgress >= 8 && uvProgress <= 10){
    return{
      label: "Very Strong",
      text: "High risk of harm. Avoid direct sunlight and use full protection.",
      color: "rgb(244, 67, 54)"
    }
  } 
  else if(uvProgress >= 11){
    return{
      label: "Extreme",
      text: "Extreme UV levels. Stay indoors and avoid sun exposure.",
      color: "rgb(156, 39, 176)"
    }
  }
}

function updateHeroSection(data, forecastData){
  console.log(data);
  
  const condition = data.current.condition.text.toLowerCase();
  const is_sun_up = data.current.is_day;
  
  const todayHour = forecastData.forecast.forecastday[0].hour;
  let svgIcon = getSvg(condition, is_sun_up);
  let tempValue = Math.round(data.current.temp_c);
  elements.city.textContent=`${data.location.name}`;
  elements.temp.innerHTML=`${tempValue}<span id="centigrade">°C</span>`;
  elements.tempText.textContent= condition;
  elements.weatherSvg.innerHTML= `${svgIcon}`;
  elements.windInfo.innerHTML=`${data.current.wind_kph} km/h`;
  elements.humidInfo.innerHTML=`${data.current.humidity}%`;
  elements.rainChance.innerHTML=`${todayHour[0].chance_of_rain}%`

  let bg = getBg(condition, is_sun_up);

  elements.weather.style.backgroundImage = bg;
  localStorage.setItem("bgImage", bg);
}

function createMiniCards(item){
    const time = new Date(item.time).toLocaleTimeString([],{
      hour: "2-digit",
      minute: "2-digit"
    })
    const temp = Math.round(item.temp_c)
    const condition_icon = item.condition.icon;
    return `<div class="forecastCard glass-card">
                      <div class="loaderWrapper">
                        <div class="time"><span>${time}</span></div>
                        <div class="forecastDetailSvg"><img src="${condition_icon}"/></div>
                        <div class="forecastTemp"><span>${temp}°C</span></div>
                      </div>
                  </div>`
}

function updateAirQuality(data){
  // Air Data
  let airProgress = data.current.air_quality["us-epa-index"] ?? 0;
  let length = 251;
  let aqiPercent = Math.round((airProgress / 6) * 100);
  let airData = airProgressUi(airProgress);
  elements.airCardTitle.textContent=aqiPercent;
  elements.airCardLabel.textContent = airData.label;
  elements.airCardLabel.style.fill = airData.color;
  elements.airCardDesc.textContent = airData.text;
  elements.airCircle.style.strokeDasharray = length;

  elements.airCircle.style.strokeDashoffset =
    length - (length * aqiPercent) / 100;
}

function updateUv(data){
  let uvProgress = Math.round(data.current.uv);
  let uvData = uvProgressUi(uvProgress);
  elements.uvCardLabel.textContent = uvData.label;
  elements.uvCardDesc.textContent = uvData.text;
  elements.uvCardLabel.style.fill = uvData.color;
  let length = 251;
  let maxUv = 11;

  if(elements.uvCircle){
      elements.uvCircle.style.strokeDasharray = length;

      elements.uvCircle.style.strokeDashoffset =
        length - (length * uvProgress) / maxUv;
  }
  elements.uvCardTitle.textContent=uvProgress;
}

function updatePressure(data){
  let pressure = data.current.pressure_mb;
  // normalize pressure (clamp range)
  let minP = 950;
  let maxP = 1050;

  let normalized = (pressure - minP) / (maxP - minP);

  // convert pressure into 0–1 scale
  normalized = Math.min(Math.max(normalized, 0), 1);

  normalized = 1 - normalized;

  let amplitude = 10 + normalized * 80;

  let baseY = 80;

  let path = `
  M 0 ${baseY}
  Q 20 ${baseY - amplitude} 40 ${baseY}
  Q 60 ${baseY + amplitude} 80 ${baseY}
  Q 100 ${baseY - amplitude} 120 ${baseY}
  Q 140 ${baseY + amplitude} 160 ${baseY}
  Q 180 ${baseY - amplitude} 200 ${baseY}
  Q 220 ${baseY + amplitude} 240 ${baseY}
  Q 260 ${baseY - amplitude} 280 ${baseY}
  Q 300 ${baseY} 300 ${baseY}
  `;

  const pathEl = document.querySelector(".path");
  if(pathEl){
    pathEl.setAttribute("d", path);
  }

  let pressureData = pressureStyle(pressure);
  elements.pressureDesc.textContent = pressureData.text;
  elements.pressureDesc.style.color = pressureData.color;
  elements.miniCardPressure.textContent = Math.round(pressure);
}

function updateSuntime(forecastData){

  const astro = forecastData?.forecast?.forecastday?.[0]?.astro;

  if (astro?.sunrise && astro?.sunset) {
    elements.sunrise.textContent = astro.sunrise;
    elements.sunset.textContent = astro.sunset;
  } else {
    elements.sunrise.textContent = "06:12 AM";
    elements.sunset.textContent = "07:05 PM";
  }
}

function updateHumidity(data){
  let progress = data.current.humidity;
  // Humidity Progress Circle

  let humidData = humidityStyle(progress);

  let radius = 50;
  let circumference = 2 * Math.PI * radius;

  elements.circle.style.strokeDasharray = circumference;

  let offset = circumference - (progress / 100) * circumference;

  elements.circle.style.strokeDashoffset = offset;

  elements.text.innerHTML = `${progress}<span id="humidPercent">%</span>`;
  elements.humidCardDesc.textContent = humidData;
}

function updateFeelsLike(data){
  let feelsLikeValue = Math.round(data.current.feelslike_c);
  let tempValue = Math.round(data.current.temp_c);

  // Feels Like Data
  elements.miniFeelsLike.innerHTML = `${feelsLikeValue}<span id="feelsLikeC">°C</span>`;
  if (feelsLikeValue > tempValue){
    elements.feelsLikeDesc.textContent = "Feels hotter than the actual temperature";
  }
  else if (feelsLikeValue < tempValue){
    elements.feelsLikeDesc.textContent = "Feels cooler than the actual temperature";
  }
  else if (feelsLikeValue == tempValue){
    elements.feelsLikeDesc.textContent = "Feels same as the actual temperature";
  }
}

function getHourData(day){
  const currentHour = new Date().getHours();
  return day.hour[currentHour] || day.hour[0];
}

function getUvLevel(uv){
  if (uv <= 2) return { level: "Very Low", color: "#4CAF50" };
  if (uv <= 5) return { level: "Low", color: "#8BC34A" };
  if (uv <= 7) return { level: "High", color: "#FFC107" };
  if (uv <= 10) return { level: "Very High", color: "#FF5722" };
  return { level: "Extreme", color: "#D50000" };
}

function updateHomeUI(data, forecastData){
  updateHeroSection(data, forecastData);
  updateAirQuality(data);
  updateUv(data);
  updatePressure(data);
  updateSuntime(forecastData);
  updateHumidity(data);
  updateFeelsLike(data);
  const todayHour = forecastData.forecast.forecastday[0].hour;
  const nextHour = forecastData?.forecast?.forecastday?.[1]?.hour || [];
  const allHour = [...todayHour, ...nextHour]
  const now = forecastData.current.last_updated;
  const currentHour = new Date(now).getHours();
  const hourIndex = currentHour;

  const next12 = allHour.slice(hourIndex, hourIndex + 12)
  let html = "";
  next12.forEach(item=>{
    html += createMiniCards(item);
  })
  elements.todayForecast.innerHTML = html;

  const cards = document.querySelectorAll(".forecastCard");

  cards.forEach((card, index) => {

    setTimeout(() => {
      card.classList.add("card-animate");
    }, index * 80);

  });

  const miniCards = document.querySelectorAll(".miniCards");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  miniCards.forEach(card => observer.observe(card));
}

function updateForecastUI(dailyforecast){
  const toggleBtn = document.querySelector(".leftCardToggle");
  toggleBtn.addEventListener('click', (e)=>{
    console.log(toggleBtn);
    e.preventDefault();
    elements.cardContainer.classList.add("toggle");
  })
  document.addEventListener('click', (e)=>{
    if(!toggleBtn.contains(e.target) && !elements.cardContainer.contains(e.target)){
      elements.cardContainer.classList.remove("toggle");      
    }
  })

  console.log(dailyforecast);
  
  elements.cardContainer.innerHTML="";
  const localTime = new Date(dailyforecast.location.localtime);
  const forecastDays = dailyforecast.forecast.forecastday;
  updateMainCard(forecastDays[0]);
  updateHourly(forecastDays[0], localTime);
  
  forecastDays.forEach(day=>{
    const hourData = getHourData(day);
    
    const date = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" });
    const day_month = new Date(day.date);
    const day_date = `${day_month.toLocaleString('en-US', { month: 'short' })} ${day_month.getDate()}`;
    const condition = day.day.condition.text.toLowerCase();
    const is_day = hourData.is_day;
    const iconSvg = getSvg(condition, is_day);
    

    const leftCard = document.createElement('div');
    leftCard.classList.add("leftCard", "forecast-glass-card", "forecast-glass-card-hover");
    leftCard.innerHTML = `<div class="timeDetails">
                            <div class="dayName">${date}</div>
                            <div class="day-date">${day_date}</div>
                        </div>
                        <div class="dayTempDetailWithSvg">
                          <div class="cardSvg">${iconSvg}</div>
                          <div class="dayTempDetail"><span class="dayTemp">${Math.round(hourData.temp_c)}°</span><span class="tempFeelsLike">${Math.round(hourData.feelslike_c)}°</span></div>
                        </div>`

    elements.cardContainer.appendChild(leftCard);

    leftCard.addEventListener('click', (e)=>{
      document.querySelectorAll(".leftCard").forEach((card)=>{
        card.classList.remove("active");
      })
      leftCard.classList.add("active");
      e.preventDefault();
      updateMainCard(day);
      updateHourly(day, localTime);
    })
  })
  const firstCard = document.querySelector(".leftCard");
  if (firstCard) {
    firstCard.classList.add("active");
  }
}

function updateMainCard(day){
  console.log("Day", day);
  
  const hourData = getHourData(day);
  const uv = getUvLevel(hourData.uv);

  const currentDay = new Date(day.date);

  if (day?.astro?.sunrise && day?.astro?.sunset) {    
    elements.rightRowSunrise.textContent = day.astro.sunrise;
    elements.rightRowSunset.textContent = day.astro.sunset;
  } else {
    console.warn("Astro data missing for day:", day);
    elements.rightRowSunrise.textContent = "06:12 AM";
    elements.rightRowSunset.textContent = "07:05 PM";
  }

  const condition = day.day.condition.text.toLowerCase();
  const is_day = hourData.is_day;  
  const iconSvg = getSvg(condition, is_day);
  

  let rightRowUvVal = Math.round(hourData.uv);
  let start = 11;
  let totalWidth = 70;
  let end = start + (totalWidth * rightRowUvVal / 11);

  elements.detailDay.textContent = currentDay.toLocaleDateString("en-US", { weekday: "short" });
  elements.detailFull.textContent = `${currentDay.toLocaleDateString("en-US", { weekday: "long" })}, ${currentDay.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).replace(",","")}`;
  elements.detailTemp.innerHTML = `${Math.round(hourData.temp_c)}<span id="detailTempUnit">°C</span>`;
  elements.detailDesc.textContent = day.day.condition.text;
  elements.detailHilo.innerHTML = `High <b id="highTemp">${Math.round(day.day.maxtemp_c)}°C</b> &nbsp;·&nbsp; Low <b id="lowTemp">${Math.round(day.day.mintemp_c)}°C</b>`;
  elements.detailCity.innerHTML = ``;
  elements.statPillWindVal.textContent = Math.round(hourData.wind_kph);
  elements.statPillHumiVal.textContent = Math.round(hourData.humidity);
  elements.statPillUvVal.innerHTML = `${Math.round(hourData.uv)}`;
  elements.statPillRainVal.textContent = Math.round(hourData.chance_of_rain);
  elements.detailBigIcon.innerHTML = iconSvg;
  
  elements.rightRowWind.innerHTML = `${Math.round(hourData.wind_kph)} km/h`;
  elements.rightRowPressure.innerHTML = `${Math.round(hourData.pressure_mb)} hPa`;
  elements.rightRowHumidity.innerHTML = `${Math.round(hourData.humidity)}%`;
  elements.rightRowRain.innerHTML = `${Math.round(hourData.chance_of_rain)}%`;
  elements.rightRowFeels.innerHTML = `${Math.round(hourData.feelslike_c)}°C`;
  elements.rightRowUv.textContent = rightRowUvVal;
  elements.rightRowUv.style.color = uv.color;
  elements.rightRowUvDesc.textContent = uv.level;
  elements.rightRowUvDesc.style.color = uv.color;
  elements.rightRowUvProgress.setAttribute("x2", end);
  elements.rightRowUvProgress.setAttribute("stroke", uv.color);
  elements.uvDivider.style.backgroundColor = uv.color;
}

function updateHourly(day){
  const hours = day.hour;
  let html = "";
  hours.forEach((perHour) => {    
    html += createHourlyCards(perHour);
  })
  elements.hourlyCardsContainer.innerHTML = html;
}

function createHourlyCards(hour, localTime){  
  const hourlyCondition = hour.condition.text;
  const hourlyIsDay = hour.is_day;
  const hourlyTemp = Math.round(hour.temp_c);
  const hourlyWind = Math.round(hour.wind_kph);
  const hourlyHumidity = Math.round(hour.humidity);

  const time = new Date(hour.time).toLocaleTimeString([],{
    hour: "numeric",
    hour12: true
  });
  const hourlySvg = getSvg(hourlyCondition, hourlyIsDay)
  return `<div class="hourlyCard">
            <div class="leftHourly">
              <div class="hourlySvg">${hourlySvg}</div>
              <div class="time_condition">
                <div class="hourlyTime">${time}</div>
                <div class="hourlyCondition">${hourlyCondition}</div>
              </div>
            </div>
            <div class="rightHourly">
              <div class="hourlyTemp"><span class="hourlyTempValue">${hourlyTemp}</span><span class="tempUnit">°C</span></div>
              <div class="wind_humidity">
                <div class="hourlyWind">Wind: ${hourlyWind}km</div>
                <div class="hourlyHumidity">Humidity: ${hourlyHumidity}%</div>
              </div>
            </div>
          </div>
          <hr class="detail-divider">`;
}

document.addEventListener("DOMContentLoaded", async ()=>{
  await loadToggle();  
  
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".navLink");
  navLinks.forEach((link)=>{
    if(link.dataset.page === page){
      link.classList.add("activeNav");
    }
  })

  if(page==="home"){
    const savedBg = localStorage.getItem("bgImage");
    if(savedBg){
      elements.weather.style.backgroundImage= savedBg;
    }
    loadCurrentWeather(cityName);
  } else if(page==="forecast"){
    loadForecastWeather(cityName);
  }
})

async function fetchWeather(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return null;
  }
}

async function loadToggle(){
  const toggleData = await fetch("components/toggle.html");
  const toggleRes = await toggleData.text();
  elements.toggleContainer.innerHTML = toggleRes;
  setNavbarEvents();
}

async function setNavbarEvents(){
  const hamburger = document.querySelector('.hamburger');
  const cancel = document.getElementById('toggleCancel');
  const searchBtn = document.querySelector('.searchBtn');

  if(hamburger){
    hamburger.addEventListener('click', (e)=>{
      e.preventDefault();
      const ham = document.getElementById('toggleBar');
      elements.toggleContainer.style.display = "flex";
    })

    document.addEventListener('click', (e) => {
      if(!hamburger.contains(e.target) && !elements.toggleContainer.contains(e.target)){
        elements.toggleContainer.style.display = "none";
      }
    })

    cancel.addEventListener('click', (e)=>{
      e.preventDefault();
      elements.toggleContainer.style.display = "none";
    })
  }

  window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 822){
      elements.toggleContainer.style.display = "none";
    }
  })

  if (searchBtn && !searchBtn.dataset.bound) {
    searchBtn.dataset.bound = "true";
    searchBtn.addEventListener('click', async(e)=>{
      e.preventDefault();
      triggerSearch();
    })
    elements.input.addEventListener("keydown", (event)=>{
      if(event.key === "Enter"){
        triggerSearch()
      }
    })
  }
}

function triggerSearch(){
  const city = elements.input.value.trim();
  if(city){
    handleSearch(city);
    elements.input.value ="";
    elements.input.blur();
  }
}

async function handleSearch(city){
  const page = document.body.dataset.page;

  if(page === "home"){
    loadCurrentWeather(city);
  }
  else if(page === "forecast"){
    loadForecastWeather(city);
  }
}

async function loadCurrentWeather(cityName) {
  try{
    const cached = getFromCache(cityName);
    if (cached?.current && cached?.forecast){
      console.log("Using cached Data", cached);
      const data = cached.current;
      const forecastData = cached.forecast;
      updateHomeUI(data, forecastData);
      return
    }
  
    const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName},PK&days=1&aqi=yes&alerts=no`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName},PK&days=2&aqi=no&alerts=no`;
  
    const [currentData, forecastData] = await Promise.all([
      fetchWeather(currentUrl),
      fetchWeather(forecastUrl)
    ]);

    if (!currentData || !forecastData) {
      console.warn("API failed, not caching invalid data");
      return;
    }
  
    console.log("Fresh API Data!!");

    const finalData = {
      current: currentData,
      forecast: forecastData
    };
    console.log("Current Data: ", currentData)
    console.log("Forecast:", forecastData);
  
    saveToCache(cityName, finalData);
    updateHomeUI(currentData, forecastData);
  } catch(error){
    console.error(error);
  } finally{
    const cards = document.querySelectorAll(".forecastCard");
    cards.forEach(card =>{      
      const wrapper = card.querySelector(".loaderWrapper");
      if (wrapper) {
        hideLoader(wrapper);
      }
    })
  }
}

async function loadForecastWeather(cityName) {
  try{
    const cacheKey = `${cityName}_forecast`;
    const cached = getFromCache(cacheKey);
    if(cached){
      console.log("Using Forecast cached Data");
      updateForecastUI(cached);
      return
    }

    const dailyForecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName},PK&days=14&aqi=yes&alerts=no`;  
    
    const forecastData = await fetchWeather(dailyForecastUrl);
    console.log("Fresh Data");
    console.log(forecastData)
    saveToCache(cacheKey, forecastData);

    updateForecastUI(forecastData)
  } catch(error){
    console.error(error);
  } finally{    
    elements.rightCard.forEach(card =>{
      hideLoader(card);
    })
    hideLoader(elements.detailCard);
  }
}