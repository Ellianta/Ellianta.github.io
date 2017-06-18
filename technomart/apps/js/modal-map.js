var map = document.querySelector(".info-block__map");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map__close");

map.addEventListener("click", function() {
  modalMap.classList.add("modal-map--show");
});
closeMap.addEventListener("click", function() {
  modalMap.classList.remove("modal-map--show");
});
