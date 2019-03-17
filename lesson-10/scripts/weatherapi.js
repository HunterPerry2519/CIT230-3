
var requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fc0587bc76f9c5a27585b00097149b4f&units=imperial ';
let request = new XMLHttpRequest();
request.open('GET', requestURL, true);
    request.responseType = 'json';
request.send();
request.onload = function() {
   
    var Main = request.response;
  populateHeader(Main);

    function populateHeader(jsonObj) {
        
    var main = jsonObj['main']
    document.getElementById("main").innerHTML = main;
    document.getElementById("temp_max").innerHTML = main[temp];
    document.getElementById("humidity").innerHTML = temp;
    document.getElementById("wind").innerHTML = main.temp;
    }


}