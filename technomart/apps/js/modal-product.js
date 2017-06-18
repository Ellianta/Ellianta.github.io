var links = document.querySelectorAll(".product-card__buy-link");
var modal = document.querySelector(".modal-product");
var close = document.querySelector(".modal-product__close");
var close2 = document.querySelector(".modal-product__link");

for(var i = 0; i < links.length; i++){
  var link = links[i];
  link.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-product--show");
  });
}

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-product--show");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-product--show");
});
