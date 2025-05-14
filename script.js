// Button to change the background colour

const colorButton = document.getElementById('colorButton');
colorButton.onclick = function () {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()* 16777215).toString(16)}`
};

// Highlight a text on Hover

const text = document.getElementById('hoverText')
text.onmouseover = function (){
    text.style.color = `#${Math.floor(Math.random()* 16777215).toString(16)}`
    text.style.fontWeight = "bold";
};
text.onmouseout = function(){
    text.style.color = "black";
    text.style.fontWeight = "normal";
};

// Display input value on change

const input = document.getElementById('nameInput');
const display = document.getElementById("nameDisplay");

input.onchange = function (){
    display.textContent = `Hello ${input.value} Welcome to the page!`;
};

// Toggle Visibility

const button = document.getElementById('toggleButton');
const toggleText = document.getElementById('toggleText');

button.onclick = function (){
    if (toggleText.style.display == "none"){
        toggleText.style.display = "block";
        button.textContent = "Hide Text";
    
    } else{
    toggleText.style.display = "none";
    toggleText.style.color = "blue"
    button.textContent = "Show Text";

    }
};

// Validation form

const form = document.getElementById('form');
const email = document.getElementById('email')
const password = document.getElementById('password')
const feedback = document.getElementById('feedback')

email.addEventListener('input', () =>{
    if (!email.validity.valid){
        feedback.innerText = "Please enter a valid email address";
        feedback.style.color = "red";
    } else{
        feedback.innerText = "Valid email address";
        feedback.color = "green";
    }
});

password.addEventListener('input', () =>{
    if (password.value.length <8 ){
        feedback.innerText = "Password must be at least 8 charecters long";
        feedback.style.color = "red";
    } else {
        feedback.innerText = '';
        feedback.style.color = "green";
    }
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (email.checkValidility() && password.value.length >=8){
        feedback.innerText = "Form submitted successfully";
        feedback.style.color = "green";
    } else{
        feedback.innerText = "Please fix the errors before submitting."
    }
});