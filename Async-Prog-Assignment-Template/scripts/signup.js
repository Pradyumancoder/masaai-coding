let arr=[];
function SIGNUP(a,b,c,d){
    (this.Name=a),
    (this.Number=b),(this.Email=c),(this.password=d)
}

function  signuppage(event){
    event.preventDefault();
    //console.log("working")

 let form=document.getElementById("SIGNUP");

 let name=form.Name.value;
let contact=form.Number.value;
let email=form.Email.value;
let password=form.password.value;
//let btn=form.btn.value;


let p1=new SIGNUP(name,contact,email,password,btn)
arr.push(p1)
alert("signup succesfull"),console.log("arr:",arr)

localStorage.setItem("SIGNUP",JSON.stringify(arr))
}