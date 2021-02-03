const weather = document.querySelector(".js-weather");
const API_KEY= "9d7182ca6d4642bf83cc37f7be13b460";
const COORDS = 'coords';

function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();}
        ).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            const query_weather = json.weather[0].main;
            weather.innerText = `${temperature} 'C AT ${place} & Current Weather: ${query_weather}`;
            console.log(json);}
            );
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}
function handleGeoError(){
    console.log("Can't Access Geo Location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();