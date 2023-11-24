/*Form Validation
Create a form with fields for name, email, and password.
Validate the form using JavaScript to ensure all fields are filled out correctly before submission.
 Display appropriate error messages if the validation fails.*/

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Invalid email address";
  }
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
  }
  alert("Form submitted successfully!");
});
