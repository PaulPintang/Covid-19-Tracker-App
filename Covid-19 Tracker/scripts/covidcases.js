
const totalActive = document.querySelector('#total-active')
const totalRecovered = document.querySelector('#total-recovered')
const totalCases = document.querySelector('#total')
const totalDeaths = document.querySelector('#total-deaths')

const todayDeaths = document.querySelector('#today-deaths')
const todayRecovered = document.querySelector('#today-recovered')
const todayCases = document.querySelector('#today-cases')

// Global Status API
const dataTotal = async () => {
    const res1 = await fetch('https://disease.sh/v3/covid-19/all')
    const res2 = await res1.json()
    return res2
    
}
dataTotal().then(datum =>{ 
    
   
    totalCases.innerHTML = new Intl.NumberFormat().format(`${datum.cases}`);
    totalActive.innerHTML = new Intl.NumberFormat().format(`${datum.active}`);
    totalDeaths.innerHTML = new Intl.NumberFormat().format(`${datum.deaths}`);
    totalRecovered.innerHTML = new Intl.NumberFormat().format(`${datum.recovered}`);

    todayCases.innerHTML = '+ ' + new Intl.NumberFormat().format(`${datum.todayCases}`);
    todayDeaths.innerHTML = '+ ' + new Intl.NumberFormat().format(`${datum.todayDeaths}`);
    todayRecovered.innerHTML = '+ ' + new Intl.NumberFormat().format(`${datum.todayRecovered}`);
    
});



 