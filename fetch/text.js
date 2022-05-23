


  function getData(){
    let city=document.getElementById("city").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43331f05498c983937079c5b71be955f`)
     .then((res) =>{
      return res.json()
    })
      .then((res) =>{
        append(res)
      console.log( res)
      



}).catch((err)=>{
console.log(err)
});
}

    

function append(data){

    let container=document.getElementById("container")
    let map=document.getElementById("gmap_canvas")
    container.innerHTML=null;

    let temprature=document.createElement("p")
    temprature.innerText=`temprature:${data.main.temp}`
    
     let  max_temp=document.createElement("p")
    max_temp.innerText=`maximum temp: ${data.main.temp_max}`
  

    let min_temp=document.createElement("p")
    min_temp.innerText=`minimum temp: ${data.main.temp_min}`;

    let city=document.createElement("p")
    city.innerText=`city name: ${data.name}`

    container.append(city,temprature,min_temp,max_temp)
  map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}





// let colors2=["pink","violet","orange"]
// let colors1=[...colors2,"red","green","blue"]
// console.log(colors1)