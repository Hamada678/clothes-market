var links = document.querySelector(".links")
var userInfo = document.querySelector(".user_info")
var username = document.querySelector(".user_info .username")

if(localStorage.getItem("username")){
    links.style.display = "none"
    userInfo.style.display = "flex"
    username.innerHTML = localStorage.getItem("username")
}
let logoutBtn = document.querySelector(".logout")

logoutBtn.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout( ()=> {
        window.location="register.html";
    } , 1000)
})