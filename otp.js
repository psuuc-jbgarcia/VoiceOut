var verifycode = "2653";
const form = document.getElementById("form");
const first = document.getElementById("firstn");
const second = document.getElementById("secondn");
const third = document.getElementById("thirdn");
const fourth = document.getElementById("fourthn");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const f = first.value;
  const s = second.value;
  const t = third.value;
  const fr = fourth.value;
  const verify = f + s + t + fr;

  if (!/^\d+$/.test(verify)) {
    alert("Please enter a valid verification code");
    return;
  }

  if (verify === verifycode) {
    alert("Verification successful");
    window.location.href = "SignIn.html";
  } else {
    if (f === "" || s === "" || t === "" || fr === "") {
      alert("Please enter the complete verification code");
    } else {
      alert("Verification failed");
    }
  }
});
