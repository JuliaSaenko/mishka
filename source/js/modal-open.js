var button = document.querySelectorAll(".modal-open");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".choose-size__button");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
});
}
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
  });
