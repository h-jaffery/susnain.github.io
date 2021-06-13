const inputText = document.querySelector('.searchbar');
var button = document.querySelector('.enterb');
const info = document.querySelector('.info');
const API_Key = "a0e78d3b449db7059df0a38abd3952f8";


button.addEventListener('click', () => {

    const cityInput = inputText.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {

            inputText.value = " ";

            info.innerHTML = `
                                <ul>
                                    <li class="message">The current weather in ${data.name} is:</li>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `; 

        });

});