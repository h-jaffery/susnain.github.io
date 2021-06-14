const inputText = document.querySelector('.searchbar');
var button = document.querySelector('.enterb');
const info = document.querySelector('.info');
const info2 = document.querySelector('.info2');
const API_Key = "a0e78d3b449db7059df0a38abd3952f8";


button.addEventListener('click', () => {

    const cityInput = inputText.value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {

            document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon +"@2x.png";
            document.querySelector(".icon2").src = "http://openweathermap.org/img/wn/"+ data.list[8].weather[0].icon +"@2x.png";

            inputText.value = " ";

            info.innerHTML = `
                                <ul>
                                    <hr>
                                    <li class="message">The current weather in ${data.city.name}, ${data.city.country} is:</li>
                                    <li class="temp">${data.list[0].main.temp}°c</li>
                                    <li class="desc">${data.list[0].weather[0].description}</li>
                                    
                                </ul>
                                `; 
            info2.innerHTML = `
                                <ul>
                                    <hr>
                                    <li class="message2">Tomorrow's forecast for ${data.city.name}, ${data.city.country} is:</li>
                                    <li class="temp2">${data.list[8].main.temp}°c</li>
                                    <li class="desc2">${data.list[8].weather[0].description}</li>
                                    
                                </ul>
                                `; 


        });

});