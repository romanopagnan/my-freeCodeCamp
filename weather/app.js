const coord = {
  lat: 0,
  lon: 0
};
let weather; // data from OpenWeather

const getWeather = () => {
  // parameters for JSONP request
  const url = 'http://api.openweathermap.org/data/2.5/weather?';
  const data = {
    APPID: 'd931aceea21eb4832329f45673a512cf',
    lat: coord.lat,
    lon: coord.lon
  };
  const callback = (res) => {
    weather = res;
    console.log(weather);
  };

  $.getJSON(url, data, callback);
} // end getWeather


//get current coordinates
navigator.geolocation.getCurrentPosition(function(position) {
  coord.lat = position.coords.latitude;
  coord.lon = position.coords.longitude;
  getWeather();
});
