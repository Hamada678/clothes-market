var username = document.querySelector("#username")
var password = document.querySelector("#password")
var submit = document.querySelector("#submit")

var getUser = localStorage.getItem("username")
var getPass = localStorage.getItem("password")


submit.addEventListener("click" , function(e){
    e.preventDefault()
    if(username.value === "" && password.value === ""){
        alert("please fill in all data")
    }else{
        if(getUser&&getUser.trim()===username.value.trim()&&getPass&&getPass.trim()===password.value.trim())
        {
            setTimeout( ()=> {
                window.location="index.html"
            },1000)
        }else{
            alert("username or password is wrong")
        }
    }
})