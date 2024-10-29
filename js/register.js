var username = document.querySelector("#username")
var password = document.querySelector("#password")
var email = document.querySelector("#email")
var submit = document.querySelector("#submit")

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value ==="" || password.value==="" || email.value ===""){
        alert("please fill in all data")
    }else{
        
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(()=>{
            window.location = "login.html"
        },1000)
    }
})