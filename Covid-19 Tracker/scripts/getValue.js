const Deaths = document.querySelector('#deaths')
const Recovered = document.querySelector('#recovered')
const Active = document.querySelector('#active')
const Cases = document.querySelector('#cases')
const Flag = document.querySelector('#flag')
const Population = document.querySelector('#population')
let mySelect = document.querySelector('#mySelect')

const selectValue = () => {
    var deaths = document.getElementById("mySelect").value.split(',')[0];
      Deaths.innerHTML = new Intl.NumberFormat().format(deaths);
    var active = document.getElementById("mySelect").value.split(',')[1];
       Active.innerHTML = new Intl.NumberFormat().format(active);
    var cases = document.getElementById("mySelect").value.split(',')[2];
      Cases.innerHTML = new Intl.NumberFormat().format(cases);
    var recovered = document.getElementById("mySelect").value.split(',')[3];
      Recovered.innerHTML = new Intl.NumberFormat().format(recovered);
    var flag = document.getElementById("mySelect").value.split(',')[4];
      Flag.innerHTML = `<img src = "${flag}" style="width: 190px;">` 
    var population = document.getElementById("mySelect").value.split(',')[5];
      Population.innerHTML = new Intl.NumberFormat().format(population); 


      
};

