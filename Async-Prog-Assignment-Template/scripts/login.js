
// let arr=[]
// function LOGIN(a,b){
//     this.Email=a,
//     this.password=b;
    
// }

// let data=JSON.parse(localStorage.getItem("SIGNUP"))
// console.log(data)
// function loginpage(e){
//     e.preventDefault();
//     console.log("aman")

//     let form=document.getElementById("LOGIN");
//     let email=form.Email.value;
//     let password=form.password.value;

//     let p1=new LOGIN(email,password)
// arr.push(p1);
//    console.log("arr:" ,arr)
//  localStorage.setItem("LOGIN",JSON.stringify(arr))
// }


// document.querySelector("form").addEventListener("submit", loginFun);
let arr=[]
function LOGIN(a,b){
    this.Email=a,
    this.password=b;
    
}



var data = JSON.parse(localStorage.getItem("LOGIN")) || [];
console.log(data);

function loginpage(e) {
  e.preventDefault();
     let form=document.getElementById("LOGIN");
    let email=form.Email.value;
    let password=form.password.value;

        let p1=new LOGIN(email,password)
arr.push(p1);
   console.log("arr:" ,arr)
 localStorage.setItem("LOGIN",JSON.stringify(arr))


  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (
      data[i].Email == email &&
      data[i].password == password
    ) {
      alert("login success");
      window.location.href = "index.html"


      
     } 
//      else {
//       alert("login failed");
// break;
//     }
  }
}