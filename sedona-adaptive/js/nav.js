var mainNav = document.querySelector(".main-nav");
var navOpen = document.querySelector(".main-nav__toggle");
var navClose = document.querySelector(".main-nav__toggle-close");
var wrapper = document.querySelector(".wrapper");

navOpen.addEventListener("click", function(){
  if(mainNav.classList.contains("main-nav--closed")){
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    wrapper.classList.add("wrapper--nav-opened");
  }
  else {
    mainNav.classList.add("main-nav--opened");
    wrapper.classList.add("wrapper--nav-opened");
  }
});

navClose.addEventListener("click", function(){
  if(mainNav.classList.contains("main-nav--opened")){
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
    wrapper.classList.remove("wrapper--nav-opened");
  }
  else {
    mainNav.classList.add("main-nav--closed");
    wrapper.classList.remove("wrapper--nav-opened");
  }
});
