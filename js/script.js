(function(){
    'use strict';
    const API_KEY = '8a4a672079278f3239b0681c20463751';
    const API_URL = 'http://api.openweathermap.org/data/2.5/group';
    const CITIES = [
        2267057,
        2968815,
        4957962,
        5202009,
        293397,
        360630,
        5128638,
        1261481,
        1689969,
        1850147,
        2147714
    ];
    const COLORS = [
        '#3399CC',
        '#33CCCC',
        '#996699',
        '#C34848',
        '#E2674A',
        '#FFCC66',
        '#B7D8AC',
        '#669999',
        '#CC6699',
        '#339966',
        '#666699'
    ];
    const ICONS = {
        '01d' : 'wi-day-sunny',
        '02d' : 'wi-day-cloudy',
        '03d' : 'wi-cloud',
        '04d' : 'wi-cloudy',
        '09d' : 'wi-showers',
        '10d' : 'wi-day-rain',
        '11d' : 'wi-lightning',
        '13d' : 'wi-snow',
        '50d' : 'wi-fog',
        '01n' : 'wi-night-clear',
        '02n' : 'wi-night-alt-cloudy',
        '03n' : 'wi-cloud',
        '04n' : 'wi-cloudy',
        '09n' : 'wi-showers',
        '10n' : 'wi-night-alt-rain',
        '11n' : 'wi-lightning',
        '13n' : 'wi-snow',
        '50n' : 'wi-fog'
    }; 
    const UL = document.querySelector('.effect');
    const SIZES = [25, 50, 75, 100]
    // fetch(`${API_URL}?id=${CITIES.join(',')}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.cnt)
        {
            let strSize = 100;
            data.list.forEach((city, index) => {
                let color = COLORS[Math.floor(Math.random()*COLORS.length)];
                console.log(color);
                let icon = city.weather.length ? ICONS[city.weather[0].icon] : '';
                
                let size = 0;
                do
                {
                    size = SIZES[Math.floor(Math.random() * SIZES.length)];
                    
                }while((strSize - size)<0)
                strSize -= size;
                if(strSize<=0)
                {
                    strSize = 100;
                }
                if (index==CITIES.length - 1 && strSize != 100)
                {
                    size += strSize;
                }
                let li = `<li class="col" style = "background-color:${color};width:${size}%">
                <h2>${city.name}</h2>
                <p>${city.main.temp.toFixed()}&deg;C
                    <i class="wi ${icon} icon"></i>
                </p>
            </li>`;
            UL.innerHTML += li;
        });
        // let lis = document.querySelectorAll('li');
        // lis.forEach(li => {
        //     li.style.width = SIZES[Math.floor(Math.random() * SIZES.length)] + '%';
        // })
        }
    });

})();