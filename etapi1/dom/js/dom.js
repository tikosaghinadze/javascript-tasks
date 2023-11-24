/*1)Exercise 1: Changing Text Content
Create an HTML page with a <p> element. Write a JavaScript function that, when called, 
changes the text content of the <p> element to "Hello, DOM!".*/
function changesContent() {
  let para = document.querySelector("p");
  return (para.textContent = "Hello, DOM!");
}
console.log(changesContent());
/*Exercise 2: Changing Styles
Create an HTML page with a <button> element. Write a JavaScript function that,
 when called, changes the background color of the <button> to red and the text color to white.*/
function button() {
  const btn = document.querySelector("#btn");
  btn.style.color = "white";
  btn.style.backgroundColor = "red";
}
button();
/*Exercise 3: Creating Elements
Create an HTML page with an empty <div> element.
 Write a JavaScript function that, when called, creates a new <p> element with the text
  content "New paragraph" and appends it as a child to the <div>.*/
function createElements() {
  const p = document.createElement("p");
  p.textContent = "New paragraph";
  const myDiv = document.querySelector(".myDiv");
  myDiv.appendChild(p);
}
createElements();
/*Exercise 4: Event Handling
Create an HTML page with a <button> element. 
Write a JavaScript function that, when the button is clicked,
displays an alert with the message "Button clicked!".*/
function btnClick() {
  const btnC = document.querySelector(".click");
  btnC.addEventListener("click", () => {
    btnC.textContent = "Button clicked!";
  });
}
btnClick();
/*Exercise 5: Form Validation
Create an HTML page with a <form> element containing an input field and a submit button.
Write a JavaScript function that, when the form is submitted, validates the input field.
 If the input is empty, display an error message next to the input field.
  If the input is not empty, display an alert with the message "Form submitted!".*/
const inputId = document.querySelector("#inputId");
document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = inputId.value.trim();
  let errorMessage;
  let error = false;
  if (inputValue === "") {
    errorMessage = document.createElement("span");
    errorMessage.textContent = "field can not be empthy";
    errorMessage.style.color = "red";
    inputId.parentNode.appendChild(errorMessage);
    error = true;
  } else {
    if (error) {
      document.querySelector("span").remove();
    }
    alert("Form submitted!");
  }
});
