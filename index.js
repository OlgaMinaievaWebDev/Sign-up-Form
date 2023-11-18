// check if password match

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passMatch = document.querySelector(".passMatch");

function validatePassword() {
  if (password.value != confirmPassword.value) {
    passMatch.textContent = "*Passwords don't match";
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity("");
    passMatch.textContent = "";
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
