function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form');
const nameInput = document.getElementById('first');
let isFormValid = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const validateInputs = () => {
  if (!nameInput.value) {
    document.getElementById('error-hint').classList.remove('hidden');
    isFormValid = false;
  } else if (nameInput.value.length < 3 ) {
    document.getElementById('error-hint').classList.remove('hidden');
    isFormValid = false;
  }  else{
    document.getElementById('error-hint').classList.add('hidden');
    isFormValid = true;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
  }
});

nameInput.addEventListener( 'input', () => {
  validateInputs();
});