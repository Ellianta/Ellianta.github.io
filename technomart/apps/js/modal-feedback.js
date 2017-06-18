var feed = document.querySelector(".info-block__link--contacts");
var modalFeed = document.querySelector(".modal-feedback");
var closeFeed = document.querySelector(".modal-feedback__close");

feed.addEventListener("click", function(event) {
  event.preventDefault();
  modalFeed.classList.add("modal-feedback--show");
});
closeFeed.addEventListener("click", function() {
  modalFeed.classList.remove("modal-feedback--show");
});
