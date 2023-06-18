 var n="Jerico Garcia";
 var a="18";
 var birthdate="15/06/2023";
var ctry="Philippines";

const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const age = document.getElementById("age");
const country = document.getElementById("country");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const fullname1 = fullname.value;
  const age1 = parseInt(age.value);
  
  const country1 = country.value;

  if (fullname1 === "") {
    alert("Please provide your Fullname");
    return; // Stop execution if fullname is empty
  }
  
  if (age1 === "") {
    alert("Please provide your age");
    return; // Stop execution if age is empty
  }
  
  if (!/^\d+$/.test(age1)) {
    alert("Age must be a number");
    return; // Stop execution if age is not a number
  }
  
  if (country1 === "") {
    alert("Please provide your Country");
    return; // Stop execution if country is empty
  }

  alert("Welcome user");
  window.location.href = "Dashboard.html";
});
