let api_key="ddc01ce579f247b1140f6c4063b6284f";
let searchField =document.querySelector('.search');
let Cardcontainer = document.querySelector('.cardContainer')
let weatherCard=document.querySelector('.weatherCard')
let appname = document.querySelector('.appname')
let bgimg= document.querySelector('.img')
let button = document.querySelector('.btn1')
let popup=document.querySelector('.popup')
let clsbtn = document.querySelector('.clsbtn')
let showdata=()=>{
  weatherCard.innerHTML=`<div class="nodata"><h1>Search weather</h1></div>`
}
let readValue=()=>{
  FetchDetails(searchField.value);
  console.log(searchField.value)
}
let FetchDetails=async (data)=>{
  try{
    let date = new Date();
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${api_key}&units=metric`)
  
    let hour = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${api_key}&units=metric`)
    let finalhour = await hour.json();
  let FinalResult = await raw.json();

  let newarray= finalhour.list.filter(items=>{
    let newdate = new Date(items.dt_txt)
    return ( newdate > date || newdate.getHours() === 0 )  //isko or ache se samjhna ha abhi 
  })
  weatherCard.innerHTML=`<div class="cityDetails"><h2>${FinalResult.name}</h2></div>
  <div class="temp"><h1>${FinalResult.main.temp}<sup>o</sup>C</h1></div>
  <div class="condition"><span class="textdata">${FinalResult.weather[0].main}</span></div>
  <div class="humidity"><span class="textdata">humidity : ${FinalResult.main.humidity} % </span></div>
  <div class="windspeed"><span class="textdata">Windspeed : ${FinalResult.wind.speed} meter/sec </span></div>
  <div class="visibility"><span class="textdata">Visibility: ${FinalResult.visibility} meter</span></div>
  <div class="nxthourforecast">next 4 Hours Forecast</div>
        <div class="nexthour">
        <div>
        <div class="nxttemp">${newarray[0].dt_txt.split(" ")[1]}</div>
        <div class="png">Temp : <br> ${newarray[0].main.temp}<sup>o</sup>C</div>
          
        </div>
        <div>
        <div class="nxttemp">${newarray[1].dt_txt.split(" ")[1]}</div>
        <div class="png">Temp : <br> ${newarray[1].main.temp}<sup>o</sup>C</div>
          </div>
        <div>
        <div class="nxttemp">${newarray[2].dt_txt.split(" ")[1]}</div>
        <div class="png">Temp : <br> ${newarray[2].main.temp}<sup>o</sup>C</div>
          </div>
        <div>
        <div class="nxttemp">${newarray[3].dt_txt.split(" ")[1]}</div>
        <div class="png">Temp : <br> ${newarray[3].main.temp}<sup>o</sup>C</div>
          
        </div>
      </div>`
   searchField.value='';
   if (FinalResult.weather[0].main == 'Clouds') {
    if(date.getHours()>=18){
      bgimg.innerHTML=`<img class="image" src="https://img.freepik.com/premium-photo/full-moon-cloudy-night-sky-aesthetic-background_198067-173620.jpg">`  //clody night image
      bgimg.style.filter='blur(3px)';
      darktheme();
     
    }else if(date.getHours()>=6 && date.getHours()<=12){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1088909334/photo/sea-of-clouds-above-the-stratosphere.webp?a=1&b=1&s=612x612&w=0&k=20&c=tHAUP9yGfewerlRxkkt602zpBrPSY78tHjWjQXGRwLk=">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
    else{
      bgimg.innerHTML=`<img src="https://media.istockphoto.com/id/1088909334/photo/sea-of-clouds-above-the-stratosphere.webp?a=1&b=1&s=612x612&w=0&k=20&c=tHAUP9yGfewerlRxkkt602zpBrPSY78tHjWjQXGRwLk=">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
 // Freezing
} else if (FinalResult.weather[0].main == 'Haze') {
if(date.getHours()>=18){
  bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/614122930/photo/spooky-foggy-forest.jpg?s=612x612&w=0&k=20&c=jBKT8Ku8a5VGMclYsX3LttZUpsbVdfO-XSeYQEQIqUs=">`
  bgimg.style.filter='blur(3px)'
  darktheme();
}
  else if(date.getHours()>=6 && date.getHours()<=12){
      bgimg.innerHTML=`<img class="image" src="https://plus.unsplash.com/premium_photo-1732024931367-b2462bfdff70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
 else{
bgimg.innerHTML=`<img class="image" src="https://plus.unsplash.com/premium_photo-1732024931367-b2462bfdff70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
bgimg.style.filter='blur(7px)'
lightmode();
}

} 
else if (FinalResult.weather[0].main == 'Clear') {
if(date.getHours()>=18){
   bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1680542993889-078ce9c8538a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D">`
 bgimg.style.filter='blur(3px)'
 darktheme();
}
   else if(date.getHours()>=6 && date.getHours()<=12){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1324413691/photo/beautiful-sky-with-white-clouds.jpg?s=612x612&w=0&k=20&c=40a8JIoRJ1BAI4XeyEouZl0QbVAJToDBRQn31S3FGzk=">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
else{
bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/463594503/photo/mountain-landscape-the-himalayas.jpg?s=612x612&w=0&k=20&c=Kg2TdVazkrzbOSk-7OZ9ueweEVXJnZiSfADeWpfxxW8=">`
bgimg.style.filter='blur(7px)'
lightmode();
}
}
else if (FinalResult.weather[0].main == 'Rain') {
if(date.getHours()>=18){
  bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/831057314/photo/rain-night.jpg?s=612x612&w=0&k=20&c=Ir3t1WiPDHmbOAY3cDqduhjLW-JUAZg2F1Izn_r0l5M=">`
  bgimg.style.filter='blur(3px)'
  darktheme();
 
}else if(date.getHours()>=6 && date.getHours()<=12){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1358918776/photo/water-drops-on-the-stalks-of-the-field-grass-natural-plant-texture-in-green-natural-tones.jpg?s=612x612&w=0&k=20&c=Dbjc_v1JQOTLK8lcDWA_-C0M3m_3BU1FIez9c_H947w=">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
else{
bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1358918776/photo/water-drops-on-the-stalks-of-the-field-grass-natural-plant-texture-in-green-natural-tones.jpg?s=612x612&w=0&k=20&c=Dbjc_v1JQOTLK8lcDWA_-C0M3m_3BU1FIez9c_H947w=">`
bgimg.style.filter='blur(7px)'
lightmode();
}

}
else if (FinalResult.weather[0].main == 'Thunderstorm') {
if(date.getHours()>=18){
  bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1318748572/photo/massive-lightning-strike-over-the-brisbane-city-suburbs-lights.jpg?s=612x612&w=0&k=20&c=9Z5tynrQYH3E0fruCBlwIbgsgbdu5_DHxLbSu44o3co=">`
  bgimg.style.filter='blur(3px)'
 darktheme();
 
}else {
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1653255150/photo/forked-lightning-strikes-down-behind-a-hill.jpg?s=612x612&w=0&k=20&c=Hb98pd047Q7KOr6dwzHJfIwIIajEe0eivDEUMpe1dD4=">`
      bgimg.style.filter='blur(3px)'
      lightmode();
      }
}else if (FinalResult.weather[0].main=='Snow'){
 if(date.getHours()>=18){
  bgimg.innerHTML=`<img class="image" src="https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
  bgimg.style.filter='blur(3px)'
  darktheme();
 }else{
   bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1589218112660-81ef972e89e3?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
  bgimg.style.filter='blur(3px)'
  lightmode();
 }
}else{
 bgimg.innerHTML=`<img class="image" src=" https://images.unsplash.com/photo-1505404919723-002ecad81b92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpenpsZSUyMHdhdGhlcnxlbnwwfHwwfHx8MA%3D%3D">`
  bgimg.style.filter='blur(3px)'

}

}catch(error){
searchField.value='';
 searchField.style.color='black';
generatepopup();


}
}
let generatepopup=()=>{
popup.style.visibility='visible'
bgimg.innerHTML=''
weatherCard.innerHTML=''
searchField.disabled=true;
calcwidthhieght();
searchField.style.borderBottomColor='black'
      button.style.backgroundColor='black'
      button.style.color='white'
      appname.style.color='black'

// popup.style.width='30%';
// popup.style.height='40%';
}
let closePopup=()=>{
popup.style.visibility='hidden';
weatherCard.innerHTML=`<div class="nodata"><h1>Search weather</h1></div>`
popup.style.width='0%';
popup.style.height='0%';
appname.style.color = 'black'; 
searchField.disabled=false;
}
let calcwidthhieght=()=>{
const width = window.innerWidth;
const height =  window.innerHeight;
if(width <=430){
popup.style.width='50%';
popup.style.height='30%';
clsbtn.style.width='40%'
}else if (width <=1024 && width >=768){

popup.style.width='50%';
popup.style.height='40%';
}
else if(width <=1280 && width <=1024){
popup.style.width='40%';
popup.style.height='50%';
clsbtn.style.width='40%';
}
else if(width==1024 && height==600){  //for nest
popup.style.width='40%';
popup.style.height='50%';
clsbtn.style.width='40%';
}

else{
  popup.style.width='30%';
popup.style.height='40%';
}
}
let darktheme=()=>{

      searchField.style.borderBottomColor='white'
      searchField.style.color='white';
      button.style.backgroundColor='white'
      button.style.color='black'
      appname.style.color='white'
      let elements = document.querySelectorAll('.textdata');
      
      elements.forEach((element) => {
      
        element.style.color = 'white'; 
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      
      element2.forEach((items)=>{
        items.style.color='white'
      })
}
let lightmode =()=>{
      searchField.style.borderBottomColor='black'
      button.style.backgroundColor='black'
      button.style.color='white'
      appname.style.color='black'
      let elements = document.querySelectorAll('.textdata');
      
      elements.forEach((element) => {

        element.style.color = 'black'; // Apply white text color
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      element2.forEach((items)=>{
        items.style.color='black'
      })
}
