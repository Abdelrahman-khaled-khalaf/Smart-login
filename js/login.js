var login=document.getElementById("login-submit");
var email_login=document.getElementById("email-login");
var password_login=document.getElementById("password-login");

var users=[];
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users") || "[]");
}
login.addEventListener("click",function(){
    logIn();
})


function isLoginEmpty(){
    if(email_login.value=="" || password_login.value==""){
        return true;
    }
}
function isUserHere(){
    for(var i=0;i<users.length;i++){
        if(users[i].email.toLowerCase()==email_login.value.toLowerCase() && users[i].password.toLowerCase()==password_login.value.toLowerCase() ){
            localStorage.setItem("sessionName",users[i].name);
            return true;
        }
      
    }
}

function logIn(){
    if(isLoginEmpty()){
        document.getElementById("alert-login").innerHTML=`<span class="text-danger m-3 d-block">All Inputs is Required</span>`
        return false;
        
    }
    if(isUserHere()==false){
        document.getElementById("alert-login").innerHTML=`<span class="text-danger m-3 d-block">The user email or password is wrong</span>`
        return false;
        

    }
    else{
        window.location.href = "Home.html"
        
    }
    
}
