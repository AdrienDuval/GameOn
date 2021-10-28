"use strict";

function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} // DOM Elements


var modalbg = document.querySelector(".bground");
var modalBtn = document.querySelectorAll(".modal-btn");
var formData = document.querySelectorAll(".formData");
var isFormValid = false;

var id = function id(_id) {
  return document.getElementById(_id);
};

var nameInput = id("first"),
    lastNameInput = id("last"),
    emailInput = id('email'),
    birthdateInput = id("birthdate"),
    quantityInput = id("quantity"),
    locatiionsInput = id("locations"),
    checkBox = id('checkbox1'),
    form = id('form'),
    receptionMsg = id('reception-msg'),
    closeBtn = id('close-btn'),
    errorMsg = document.getElementsByClassName("error-msg"); // launch modal event

modalBtn.forEach(function (btn) {
  return btn.addEventListener("click", launchModal);
}); // launch modal form

function launchModal() {
  modalbg.style.display = "block";
} //checks and validates inputes validates inputs by the users for first name
// fuctions test 10-27-2021
// this validate input form only for the names last-name and email, and check if the lenght is greater than or eaual to 3


var validateNameInput = function validateNameInput(id, serial, message) {
  if (!id.value) {
    errorMsg[serial].innerHTML = message;
    isFormValid = false;
  } else if (nameInput.value.length < 3) {
    errorMsg[serial].innerHTML = message;
    isFormValid = false;
  } else {
    errorMsg[serial].innerHTML = '';
    isFormValid = true;
  }
}; // action taken by form in submit checking if all inputs are corrects and diplaying the reception message


form.addEventListener('submit', function (e) {
  e.preventDefault(); // on submit its checks and validates only the firts name box 

  validateNameInput(nameInput, 0, 'Please enter 2+ characters for name field.'); // condition for displaying the form if the inputs are check and are correct

  if (isFormValid) {
    form.remove();
    receptionMsg.classList.remove('hidden');
  }
}); //first name input check when inputing values

nameInput.addEventListener('input', function () {
  validateNameInput(nameInput, 0, 'Please enter 2+ characters for name field.');
});
closeBtn.addEventListener('click', function () {
  modalbg.style.display = "none";
});