"use strict";
//Меню
  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

//Модальное окно
var button = document.querySelectorAll(".button");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".choose-size__button");

/*for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
});
}*/
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
  });
