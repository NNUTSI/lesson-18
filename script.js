"use strict";
let inputElement = document.querySelector(".input-el");
let add = document.querySelector(".button");
let ulEl = document.querySelector(".ul-list");
let clearAll = document.querySelector(".clear-all");
let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //1. get input value
  let value = inputElement.value;

  // not to add clear string
  if (value.trim() == "") {
    return;
  }
  //2. value - li - ul
  let li = document.createElement("li");
  li.textContent = value;

  let deleteBtn = document.createElement("button");
  //add Font Awesome icon class
  deleteBtn.innerHTML = "<i class='fa-regular fa-trash-can icon'></i>";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  ulEl.appendChild(li);

  //3. clear input
  inputElement.value = " ";
});
//clear all
clearAll.addEventListener("click", function () {
  ulEl.innerHTML = " ";
});
