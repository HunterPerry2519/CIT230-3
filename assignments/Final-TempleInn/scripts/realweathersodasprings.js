
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=fc0587bc76f9c5a27585b00097149b4f&units=imperial' , true);
request.send();
request.onload = function() {
   
    var Main = JSON.parse(request.responseText);     
    document.getElementById('temp_max').innerHTML = Main.main.temp_max;
    document.getElementById('main').innerHTML = Main.weather[0].main;
    document.getElementById('humidity').innerHTML = Main.main.humidity;
    document.getElementById('wind').innerHTML = Main.wind.speed;
    }

    var request2 = new XMLHttpRequest();
request2.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=fc0587bc76f9c5a27585b00097149b4f&units=imperial' , true);
request2.send();
request2.onload = function() {
   
    var Main = JSON.parse(request2.responseText);     
    document.getElementById('day1').innerHTML = Main.list[1].main.temp;
    document.getElementById('day2').innerHTML = Main.list[2].main.temp;
    document.getElementById('day3').innerHTML = Main.list[3].main.temp;
    document.getElementById('day4').innerHTML = Main.list[4].main.temp;
    document.getElementById('day5').innerHTML = Main.list[5].main.temp;

    }

     

