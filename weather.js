let api_key="ddc01ce579f247b1140f6c4063b6284f";
let searchField =document.querySelector('.search');
let Cardcontainer = document.querySelector('.cardContainer')
let weatherCard=document.querySelector('.weatherCard')
let bgimg= document.querySelector('.img')
let span = document.querySelector('.textdata')
let showdata=()=>{
  weatherCard.innerHTML=`<div class="nodata"><h1>Search weather</h1></div>`
}
let readValue=()=>{
  FetchDetails(searchField.value);
  console.log(searchField.value)
}
let FetchDetails=async (data)=>{
  let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api_key}&units=metric`);
  let FinalResult = await raw.json();
  console.log(FinalResult);

  if (FinalResult.main.temp < 0) {

    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1703510092630-6d6a89cfa6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(7px)'

    
     // Freezing
  } else if (FinalResult.main.temp >= 0 && FinalResult.main.temp <= 15) {
    
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(7px)'

  
  } 
  else if (FinalResult.main.temp > 15 && FinalResult.main.temp <= 25) {
    
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1583054968714-b8d4317377b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D">`
    bgimg.style.filter='blur(7px)'
  
  }
   else if (FinalResult.main.temp > 25 && FinalResult.main.temp <= 35) {
   
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(7px)'

  
  }
   else if (FinalResult.main.temp > 35) {
   
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlibhttps://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=">`
    bgimg.style.filter='blur(7px)'

 
  }
  weatherCard.innerHTML=`<div class="cityDetails"><h2>${FinalResult.name}</h2></div>
  <div class="temp"><h1>${FinalResult.main.temp}<sup>o</sup>C</h1></div>
  <div class="condition"><span class="textdata">${FinalResult.weather[0].description}</span></div>
  <div class="humidity"><span class="textdata">humidity : ${FinalResult.main.humidity} </span></div>
  <div class="windspeed"><span class="textdata">Windspeed : ${FinalResult.wind.speed} </span></div>
  <div class="visibility"><span class="textdata">Visibility: ${FinalResult.visibility}</span></div>
   <div class="nexthour"><div class="nxt1"></div></div>`
}