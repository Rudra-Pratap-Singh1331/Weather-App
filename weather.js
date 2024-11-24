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
  console.log(FinalResult);
  console.log(finalhour);

  let newarray= finalhour.list.filter(items=>{
    let newdate = new Date(items.dt_txt)
    return ( newdate > date || newdate.getHours() === 0 )  //isko or ache se samjhna ha abhi 
  })
  console.log(newarray)
  weatherCard.innerHTML=`<div class="cityDetails"><h2>${FinalResult.name}</h2></div>
  <div class="temp"><h1>${FinalResult.main.temp}<sup>o</sup>C</h1></div>
  <div class="condition"><span class="textdata">${FinalResult.weather[0].main}</span></div>
  <div class="humidity"><span class="textdata">humidity : ${FinalResult.main.humidity} </span></div>
  <div class="windspeed"><span class="textdata">Windspeed : ${FinalResult.wind.speed} </span></div>
  <div class="visibility"><span class="textdata">Visibility: ${FinalResult.visibility}</span></div>
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
  if (FinalResult.main.temp < 0) {
        if(date.getHours()>=18){
          bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1601039994/photo/bow-shaped-milky-way-above-hanles-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jd9lwlkSVmrYpaFy5xdx7oeq5NlPXbVuq5IbMRWDuVA=">`
          bgimg.style.filter='blur(3px)'
          searchField.style.borderBottomColor='white'
          button.style.backgroundColor='white'
          button.style.color='black'
          appname.style.color='white'
          let elements = document.querySelectorAll('.textdata');
          console.log("Elements to change color:", elements);
          elements.forEach((element) => {
            console.log("Changing color of element:", element);
            element.style.color = 'white'; // Apply white text color
          });
          let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
          console.log(element2)
          element2.forEach((items)=>{
            items.style.color='white'
          })
         
        }else if(date.getHours()>=6 && date.getHours()<=12){
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1703510092630-6d6a89cfa6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(3px)'
    searchField.style.borderBottomColor='black'
          button.style.backgroundColor='black'
          button.style.color='white'
          appname.style.color='black'
          let elements = document.querySelectorAll('.textdata');
          console.log("Elements to change color:", elements);
          elements.forEach((element) => {
            console.log("Changing color of element:", element);
            element.style.color = 'black'; // Apply white text color
          });
          let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
          console.log(element2)
          element2.forEach((items)=>{
            items.style.color='black'
          })
  }
    else{
      bgimg.innerHTML=`<img src="https://images.unsplash.com/photo-1703510092630-6d6a89cfa6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
      bgimg.style.filter='blur(3px)'
      searchField.style.borderBottomColor='black'
          button.style.backgroundColor='black'
          button.style.color='white'
          appname.style.color='black'
          let elements = document.querySelectorAll('.textdata');
          console.log("Elements to change color:", elements);
          elements.forEach((element) => {
            console.log("Changing color of element:", element);
            element.style.color = 'black'; // Apply white text color
          });
          let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
          console.log(element2)
          element2.forEach((items)=>{
            items.style.color='black'
          })
    }
     // Freezing
  } else if (FinalResult.main.temp >= 0 && FinalResult.main.temp <= 15) {
    if(date.getHours()>=18){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1601039994/photo/bow-shaped-milky-way-above-hanles-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jd9lwlkSVmrYpaFy5xdx7oeq5NlPXbVuq5IbMRWDuVA=">`
      bgimg.style.filter='blur(3px)'
      searchField.style.borderBottomColor='white'
      button.style.backgroundColor='white'
      button.style.color='black'
      appname.style.color='white'
      let elements = document.querySelectorAll('.textdata');
      console.log("Elements to change color:", elements);
      elements.forEach((element) => {
        console.log("Changing color of element:", element);
        element.style.color = 'white'; // Apply white text color
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      console.log(element2)
      element2.forEach((items)=>{
        items.style.color='white'
      })
    }
     else{
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(7px)'
    searchField.style.borderBottomColor='black'
          button.style.backgroundColor='black'
          button.style.color='white'
          appname.style.color='black'
          let elements = document.querySelectorAll('.textdata');
          console.log("Elements to change color:", elements);
          elements.forEach((element) => {
            console.log("Changing color of element:", element);
            element.style.color = 'black'; // Apply white text color
          });
          let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
          console.log(element2)
          element2.forEach((items)=>{
            items.style.color='black'
          }) 
  }
  
  } 
  else if (FinalResult.main.temp > 15 && FinalResult.main.temp <= 25) {
    if(date.getHours()>=18){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1601039994/photo/bow-shaped-milky-way-above-hanles-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jd9lwlkSVmrYpaFy5xdx7oeq5NlPXbVuq5IbMRWDuVA=">`
      bgimg.style.filter='blur(3px)'
      searchField.style.borderBottomColor='white'
      button.style.backgroundColor='white'
      button.style.color='black'
      appname.style.color='white'
      let elements = document.querySelectorAll('.textdata');
      console.log("Elements to change color:", elements);
      elements.forEach((element) => {
        console.log("Changing color of element:", element);
        element.style.color = 'white'; // Apply white text color
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      console.log(element2)
      element2.forEach((items)=>{
        items.style.color='white'
      })
     
    }else{
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1583054968714-b8d4317377b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D">`
    bgimg.style.filter='blur(7px)'
    searchField.style.borderBottomColor='black'
    button.style.backgroundColor='black'
    button.style.color='white'
    appname.style.color='black'
    let elements = document.querySelectorAll('.textdata');
    console.log("Elements to change color:", elements);
    elements.forEach((element) => {
      console.log("Changing color of element:", element);
      element.style.color = 'black'; // Apply white text color
    });
    let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
    console.log(element2)
    element2.forEach((items)=>{
      items.style.color='black'
    })
  }
  }
   else if (FinalResult.main.temp > 25 && FinalResult.main.temp <= 35) {
    if(date.getHours()>=18){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1601039994/photo/bow-shaped-milky-way-above-hanles-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jd9lwlkSVmrYpaFy5xdx7oeq5NlPXbVuq5IbMRWDuVA=">`
      bgimg.style.filter='blur(3px)'
      searchField.style.borderBottomColor='white'
      button.style.backgroundColor='white'
      button.style.color='black'
      appname.style.color='white'
      let elements = document.querySelectorAll('.textdata');
      console.log("Elements to change color:", elements);
      elements.forEach((element) => {
        console.log("Changing color of element:", element);
        element.style.color = 'white'; // Apply white text color
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      console.log(element2)
      element2.forEach((items)=>{
        items.style.color='white'
      })
     
    }else{
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`
    bgimg.style.filter='blur(7px)'
    searchField.style.borderBottomColor='black'
    button.style.backgroundColor='black'
    button.style.color='white'
    appname.style.color='black'
    let elements = document.querySelectorAll('.textdata');
    console.log("Elements to change color:", elements);
    elements.forEach((element) => {
      console.log("Changing color of element:", element);
      element.style.color = 'black'; // Apply white text color
    });
    let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
    console.log(element2)
    element2.forEach((items)=>{
      items.style.color='black'
    })
  }
  
  }
   else if (FinalResult.main.temp > 35) {
    if(date.getHours()>=18){
      bgimg.innerHTML=`<img class="image" src="https://media.istockphoto.com/id/1601039994/photo/bow-shaped-milky-way-above-hanles-peak.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jd9lwlkSVmrYpaFy5xdx7oeq5NlPXbVuq5IbMRWDuVA=">`
      bgimg.style.filter='blur(3px)'
      searchField.style.borderBottomColor='white'
      button.style.backgroundColor='white'
      button.style.color='black'
      appname.style.color='white'
      let elements = document.querySelectorAll('.textdata');
      console.log("Elements to change color:", elements);
      elements.forEach((element) => {
        console.log("Changing color of element:", element);
        element.style.color = 'white'; // Apply white text color
      });
      let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
      console.log(element2)
      element2.forEach((items)=>{
        items.style.color='white'
      })
     
    }else{
    bgimg.innerHTML=`<img class="image" src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlibhttps://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=">`
    bgimg.style.filter='blur(7px)'
    searchField.style.borderBottomColor='black'
    button.style.backgroundColor='black'
    button.style.color='white'
    appname.style.color='black'
    let elements = document.querySelectorAll('.textdata');
    console.log("Elements to change color:", elements);
    elements.forEach((element) => {
      console.log("Changing color of element:", element);
      element.style.color = 'black'; // Apply white text color
    });
    let element2 =document.querySelectorAll('.cityDetails,.temp,.nxthourforecast,.nxttemp,.png,.nexthour>div')
    console.log(element2)
    element2.forEach((items)=>{
      items.style.color='black'
    })
    }
  }

  }catch(error){
    generatepopup();
    searchField.value='';   
  }
}
let generatepopup=()=>{
  popup.style.visibility='visible'
  bgimg.innerHTML=''
  weatherCard.innerHTML=''
  calcwidthhieght();
  // popup.style.width='30%';
  // popup.style.height='40%';
}
let closePopup=()=>{
  popup.style.visibility='hidden';
  weatherCard.innerHTML=`<div class="nodata"><h1>Search weather</h1></div>`
  popup.style.width='0%';
  popup.style.height='0%';
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
