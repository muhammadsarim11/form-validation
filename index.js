var email = document.querySelector(".email")

var password = document.querySelector(".password")

var error = document.querySelector(".error")
var error2 = document.querySelector(".error2")
var aftersubmit = document.querySelector(".after-submit")
function submit(){
    if(email.value!="" && password.value){
aftersubmit.style.display = "block"
    }
   
}



function checkdata(){
    if(email.value!=''){
        error.innerText = ''
    }
    else if(email.value==''){
        error.style.transition = 2+'s'
error.innerText = "Please enter email"

    }

    if(password.value!=''){
        error2.innerText = ''
    }
    else if(password.value==''){
error2.innerText = "Please enter password"

    }
}