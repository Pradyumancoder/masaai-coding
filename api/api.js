// function weatherfunction(){


//     let city =document.getElementById("city").value;


// const url=
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43331f05498c983937079c5b71be955f`;


// fetch (url)
// .then(function(res){
//     return res.json();
// })
// .then(function (res){
//     console.log(res)
//     append(res)
// })
// .catch(function(err){
//     console.log(err)
// });


// }

// function append(data){
//     let container=document.getElementById("conatainer");
//     container.innerHTML=null;

//     let map=document.getElementById("gmap_canvas");

//     let city=document.createElement("p")
//     city.innerText=`city: ${data.name}`

//     let min=document.createElement("p")
//     min.innerText=`Min temp:  ${data.main.temp_min}`;

//     let max=document.createElement("p")
//     max.innerText=`Max temp:  ${data.main.temp_max}`;

//     let current=document.createElement("p");
//     current.innerText=`Current temp:${data.main.temp}`

    
//     let humidity=document.createElement("p");
//     humidity.innerText=`Humadity temp:${data.main.temp}`

//     container.append(city,min,max,current,humidity)

//     // map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
// }








function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43331f05498c983937079c5b71be955f`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function append(data) {
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;
  
    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;
  
    let min = document.createElement("p");
    min.innerText = `Min temp: ${data.main.temp_min}`;
  
    let max = document.createElement("p");
    max.innerText = `Max temp: ${data.main.temp_max}`;
  
    let current = document.createElement("p");
    current.innerText = `Current Temp: ${data.main.temp}`;
  
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${data.main.humidity}`;
  
    container.append(city, min, max, current, humidity,);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    let image=document.createElement("img")
    image.setAttribute.image
    image.style.height="200px"
    image.style.width="200px"
    image.style.left="200px"
   
    
    image.src="https://wallpaperaccess.com/full/428690.jpg"

    container.append(image)


  }
  
  function getWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
  }

