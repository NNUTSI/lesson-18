"use strict";
let inputElement = document.querySelector(".input-el");
let add = document.querySelector(".button");
let ulEl = document.querySelector(".ul-list");

add.addEventListener("click", function () {
  let value = inputElement.value;

  let li = documentElement("li");
  li.textContent = value;

  ulEl.appendChild(li);

  inputElement.value = "";
});
