
let searchBtn = document.querySelector('.search-box span .search-icon')
let wapper = document.querySelector('.wapper')
let weatherDescription = document.querySelector('.weather-description')
let weatherDetails = document.querySelector('.weather-details')
let error404 = document.querySelector('.not-found')
let input = document.querySelector('.search-box input')

let cityHide = document.querySelector('.city-hide')


searchBtn.addEventListener('click', () => {

    const APIKey = 'b11b3592d738dff67e116374a745ecff';
    const city = document.querySelector('.search-box input').value

    input.focus()
    if (city == "")
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {

        if (json.cod == '404') {
            cityHide.textContent = city
            wapper.style.height = '390px'
            weatherDescription.classList.remove('active')
            weatherDetails.classList.remove('active')
            error404.classList.add('active')
            wapper.classList.add('error')
            wapper.classList.remove('active')
            return;
        }

        const image = document.querySelector('.weather-details .img-box img')
        const temperature = document.querySelector('.weather-details .weather-content h1')
        const description = document.querySelector('.weather-details .weather-content p')
        const humidity = document.querySelector('.weather-description .humidity')
        const wind = document.querySelector('.weather-description .wind')




        cityHide.textContent = city;

        wapper.style.height = '540px'
        weatherDescription.classList.add('active')
        weatherDetails.classList.add('active')
        error404.classList.remove('active')
        wapper.classList.add('active')
        wapper.classList.remove('error')




        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud.png';
                break;

            case 'Smoke':
                image.src = 'images/cloud.png';
                break;

            case 'Mist':
                image.src = 'images/mist.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = 'images/clear.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<sup>°<span>c</span></sup>`
        description.innerHTML = `${json.weather[0].description}`
        humidity.innerHTML = `${json.main.humidity}%`
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`




    })

})