var username="admin";
var password="admingarcia123";
var emailaddress="admin@gmail.com";


document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById("username1");
    const emailadd = document.getElementById("email1");
    const password = document.getElementById("password1");
    const confirmpass = document.getElementById("confirmpass1");
  
    function signup(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const usernameinput = username.value;
      const emailinput = emailadd.value;
      const passinput = password.value;
      const confirminput = confirmpass.value;
  
      if (usernameinput === "") {
        alert("Please provide your username");
        return false;
      }
      if (emailinput === "") {
        alert("Please provide your email address");
        return false;
      }
      if (passinput.length < 8) {
        alert("The password should be at least 8 characters long");
        return false;
      }
  
      if (confirminput !== passinput) {
        alert("The password does not match");
        return false;
      } else {
        alert("Welcome user");
        window.location.href = "Registration.html";
      }
  
      // Perform any other necessary actions (e.g., submit form, send data to server)
    }
  
    // Get the sign-up form element
    const signupForm = document.querySelector("form");
  
    // Attach the signup function to the form's submit event
    signupForm.addEventListener("submit", signup);
  });
  