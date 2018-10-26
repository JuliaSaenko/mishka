var button = document.querySelectorAll(".js-modal");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");


for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
};

overlay.addEventListener("click", function () {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
      }
    }
  });
