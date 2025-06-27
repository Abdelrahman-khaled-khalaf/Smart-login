var welcome=document.getElementById("welcome");
var welcomeName=localStorage.getItem("sessionName");
welcome.innerHTML=`<h1>Welcome ${welcomeName}</h1>`;

var logout_btn=document.getElementById("logout");
logout_btn.addEventListener("click",function(){
    logout();
})

function logout(){
    localStorage.removeItem("sessionName")
    window.location.href=("index.html")
}