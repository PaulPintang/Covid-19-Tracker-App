// fetch('https://disease.sh/v3/covid-19/countries')
//   .then(response => response.json())
//   .then(json => console.log(json))

let optionHtml;
let selectHtml;
const Select = document.querySelector('#select')
const data = async () => {
    const res1 = await fetch('https://disease.sh/v3/covid-19/countries')
    const res2 = await res1.json()
    return res2
}

data().then(datum => {
    for(let x = 0; x < datum.length; x++) {
        optionHtml += ` 
           
            <option value = "
                ${datum[x].deaths},
                ${datum[x].active},
                ${datum[x].cases},
                ${datum[x].recovered},
                ${datum[x].countryInfo.flag},
                ${datum[x].population}
            ">${datum[x].country}</option>
        `
        

    }
    
    selectHtml = `
          <select class="form-control" id="mySelect" style = "cursor: pointer" onchange="selectValue();">
             ${optionHtml}
         </select>     
     `;
   
     
     Select.innerHTML = selectHtml;
     selectValue();
});