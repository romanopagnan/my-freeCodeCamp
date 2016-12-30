const coord = {
  lat: 0,
  lon: 0
};
let weather; // Object from OpenWeather

const getWeather = () => {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?',{
    APPID: 'd931aceea21eb4832329f45673a512cf',
    lat: coord.lat,
    lon: coord.lon,
    units: 'imperial'
    }, // end data
    (res) => { // CALLBACK
    weather = res;
    console.log(weather); // dev

    $('.weather').text(weather.weather[0].main);
    $('.location').text(weather.name);
    $('.temperature').text(weather.main.temp + '° F');
    $('.toggle-temp').click(() => {
      const temp = $('.temperature').text();
      if  (temp.charAt(temp.length - 1) == 'F')
        $('.temperature').text(((weather.main.temp - 32) / 1.8).toFixed(2) + '° C');
      else
        $('.temperature').text(weather.main.temp + '° F');
    }) //end click
  }); //end getJSON
} // end getWeather


//get current coordinates
navigator.geolocation.getCurrentPosition(function(position) {
  coord.lat = position.coords.latitude;
  coord.lon = position.coords.longitude;
  getWeather();
}); // end navigator
