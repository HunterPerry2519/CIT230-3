
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fc0587bc76f9c5a27585b00097149b4f&units=imperial' , true);
request.send();
request.onload = function() {
   
    var Main = JSON.parse(request.responseText);     
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;

 
    }


