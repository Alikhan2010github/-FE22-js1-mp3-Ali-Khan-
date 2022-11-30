
const url = "https://restcountries.com/v3.1/lang/spa";

const div = document.querySelector('.Container');
const searchBtn = document.querySelector('#btn');
const txtInput = document.querySelector('#input-data');

searchBtn.addEventListener('click', getcounrty);

 function getcounrty(event){
    event.preventDefault();

    let lang = txtInput.value.toLowerCase();
    bringCountry(lang)
 }



 

 function bringCountry(lang){
    const url = `https://restcountries.com/v3.1/lang/${lang}`;
    console.log(url);

    fetch(url)
    .then(response => {
        if(response.status >= 200 && response.status < 300)
        return response.json();
        throw 'det gick inte att hämta. Försök igen'
    })

    

    .then(displaylang)
    .catch(showError)
    
 }

  function displaylang(landData){
    console.log(landData)
    

   const officialName= landData
   
   document.querySelector("#land-container").innerHTML = "";
   

   popArray=[];
   officialName.forEach(
      function (element){
      const h1 = document.createElement('h1');
    document.querySelector("#land-container").appendChild(h1);
    h1.innerText = 'official Name:' + element.name.official;

    const h2 = document.createElement('h2');
    document.querySelector("#land-container").appendChild(h2);
    h2.innerText = 'Subregion:' + element.subregion;

    const h3 = document.createElement('h3');
    document.querySelector("#land-container").appendChild(h3);
    h3.innerText = 'Capital:' + element.capital;

    const h4 = document.createElement('h4');
    document.querySelector("#land-container").appendChild(h4);
    h4.innerText = 'Population:' + element.population;
    popArray.push(element.population);
    console.log(popArray);


    const img = document.createElement('img');
    document.querySelector("#land-container").appendChild(img);
    img.src = element.flags.png;

      });


      const pop = Math.max(...popArray);
      console.log(pop);
      const pop1 = popArray.indexOf(pop);
      console.log(pop1)
      const popElement = document.querySelectorAll('h4');
      popElement[pop1].style.backgroundColor = "rgb(180, 180, 226";
      popElement[pop1].style.color = "red";



   }

   function showError(error){
   console.log(error)

         document.querySelector("#land-container").innerHTML = "";
         const h4 = document.createElement('h4');
         document.querySelector("#land-container").appendChild(h4);
         h4.innerText = 'Write the correct spelling please !!';

      }


     
      
   




   



//andra sätt lösa uppgifter//


// fetch(url).then(function(response){
// // console.log("fetch",response.json());
//     return response.json();
// })
//  .then(function(data){
//     console.log("fetch:", data);
//     publicData = data;
//  })
 



//  fetch(URL) .then ((response) =>{

//     // console.log("fetch-lamda:", response.json()))
//     return response.json();
//  })
//  .then(data  => console.log("fetct-lamda:", data)
//  )





//  fetchingData();
// async function fetchingData(){
//     let response = await fetch("https://restcountries.com/v3.1/lang/spa");
//     let data = await response.json();
//     console.log("asyns", data );