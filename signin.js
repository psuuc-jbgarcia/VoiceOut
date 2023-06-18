
// log in

var user = "admin";
var pass = "admingarcia123";
var newpassword="jericogarcia123";

var name = document.getElementById("name");
const formlogin = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
formlogin.addEventListener("submit", function(event) {
  event.preventDefault();

  const userinput = username.value;
  const passinput = password.value;

  if (userinput === user && passinput === pass||userinput === user && newpassword === passinput) {
    alert("Welcome User");
     
    window.location.href = "Dashboard.html";
  } else if (!userinput && passinput === pass||!userinput && user && newpassword === passinput) {
    alert("Invalid username");
  } else if (userinput === user && passinput !== pass||userinput === user && !newpassword !== pass) {
    alert("Invalid password");
  } else if (userinput !== user || passinput !== pass||userinput == user && newpassword !== passinput) {
    alert("Invalid Credentials and  create account if you have not");
  }
});




