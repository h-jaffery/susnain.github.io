const inputText = document.querySelector('.searchbar');
var button = document.querySelector('.enterb');
const info = document.querySelector('.info');
const info2 = document.querySelector('.info2');
const API_Key = "cb0ea74d53164899bdd9ffd9ecbfb055";


button.addEventListener('click', () => {

    const cityInput = inputText.value;

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityInput}&key=${API_Key}`)
        .then(res => res.json())
        .then(data1 => {

            document.querySelector(".icon").src = "https://www.weatherbit.io/static/img/icons/"+ data1.data[0].weather.icon +".png";
            document.querySelector(".icon2").src = "https://www.weatherbit.io/static/img/icons/"+ data1.data[1].weather.icon +".png";

            inputText.value = " ";

            info.innerHTML = `
                                <ul>
                                    <hr>
                                    <li class="message">The current weather in ${data1.city_name} is:</li>
                                    <li class="temp">${data1.data[0].temp}°c</li>
                                    <li class="desc">${data1.data[0].weather.description}</li>    
                                </ul>
                                `;

            info2.innerHTML = `
                                <ul>
                                    <hr>
                                    <li class="message2">Tomorrow's forecast for ${data1.city_name} is:</li>
                                    <li class="temp2">${data1.data[1].temp}°c</li>
                                    <li class="desc2">${data1.data[1].weather.description}</li>    
                                </ul>
                                `;

        });
});