
var newpassword="jericogarcia123";
var emaildeclared = "admin@gmail.com";

const form=document.getElementById("form");
const email = document.getElementById("email");
const newpass = document.getElementById("password");
const confirmpass = document.getElementById("confirm-password");


form.addEventListener("submit",function(event){
  event.preventDefault();
  const emailused = email.value;
  const npass = newpass.value;
  const cpass = confirmpass.value;


  if (emaildeclared === emailused) {
    if(npass.length<8){
      alert("The password should be at least 8 characters long");
    }
    else{

      if(npass===cpass){
        alert("Verify the code");
        window.location.href="otp.html"
      }
      else{
        alert("The password and confirm password is not match")
      }
       
    }

    
  } else {
    alert("Email address is not registered");

  }
});
