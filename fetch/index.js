
function search_button(){
  let name=document.getElementById("search").value  
  console.log(name)

    const url= `https://www.omdbapi.com/?apikey=20159b4d&t=${name}`;
const container=document.getElementById("container")
 fetch(url)
.then(function(res){
    return res.json();
    
})
.then(function(res){
    //console.log("res:" ,res);
    appendData(res);

})
.catch(function (err){
    console.log("err:",err);
})
}

function appendData(data){
    console.log(data)
          if(data.Title!==undefined){

        let div=document.createElement("div");

        

      let title=document.createElement("h2");
      title.innerText=data.Title;

        let rrr=document.createElement("img");
       rrr.src=data.Poster;

       let Released=document.createElement("h3")
           Released.innerText=data.Released;

        let imdbRating=document.createElement("h3")
        imdbRating.innerText=  data.imdbRating
        

         div.append(rrr,title,Released,imdbRating)
          container.append(div);
    }

    else{
        let image=document.createElement("img")
        image.src="https://i.pinimg.com/originals/70/34/34/7034343ac6191fe7359473a5a3960f8b.gif"
     container.append(image)  
      
    }
}