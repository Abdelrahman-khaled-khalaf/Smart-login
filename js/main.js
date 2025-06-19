var name_register=document.getElementById("name-register");
var email_register=document.getElementById("email-register");
var password_register=document.getElementById("password-register");
var signUp = document.getElementById("sign-up");

var users=[];


if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users") || "[]");
}

signUp.addEventListener("click",function(){
    register();
})



function register(){
    if(isRegisterEmpty()){
        document.getElementById("alert").innerHTML=`<span class="text-danger m-3 d-block ">All Inputs is Required</span>`
        return false;
    }
     if(validateEmail()==false){
            document.getElementById("alert").innerHTML=`<span class="text-danger m-3 d-block">The Email is not valid</span>`
            return false;
        }
    var user={
        name:name_register.value,
        email:email_register.value,
        password:password_register.value

    }
    
    if(users.length==0){
       
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        Done();
        document.getElementById("alert").innerHTML=`<span class="text-success m-3 d-block">Success</span>`
        clear();
        return true;
    }
    if(isEmailExist()){
        document.getElementById("alert").innerHTML=`<span class="text-danger m-3 d-block">Enter another Email becuase it is Exist Already</span>`
        return true;
    }
    if(users.length!=0){
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users))
        Done();
        document.getElementById("alert").innerHTML=`<span class="text-success m-3 d-block">Success</span>`
        clear();
    }





}
function isRegisterEmpty(){
    if(name_register.value=="" || email_register.value=="" || password_register.value==""){
        return true;
    }
    else{
        return false;
    }
}
function isEmailExist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==email_register.value){
            return true;
        }
        else{
            return false;
        }
    }
}
function validateEmail(){
    var regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email_register.value)){
        return true;
    }
    else{
        return false;
    }
}
function Done(){
   Swal.fire({
  position: "top",
  icon: "success",
  title: "Your Email has been saved",
  showConfirmButton: false,
  timer: 1800
});
}
function clear(){
    name_register.value=null;
    email_register.value=null;
    password_register.value=null;
}
