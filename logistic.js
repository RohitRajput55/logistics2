
var swiper = new Swiper(".mySwiper", {
spaceBetween: 1,
centeredSlides: true,
autoplay: {
  delay: 4000,
  disableOnInteraction: true,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  color: "green",
},
});

var a = document.querySelector("#menu")
var b = document.querySelector(".navl")

a.addEventListener("click", function(){
   a.classList.toggle("bx-x")
   b.classList.toggle("active")
})

window.onscroll = () => {
  a.classList.remove("bx-x")
   b.classList.remove("active")
}