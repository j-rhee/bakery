//검색창 요소(.search)찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
//검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function(){
  searchInputEl.focus();
});

//페이지 스크롤에 따른 요소제어
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    gsap.to(BadgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
});
const fadeEls = document.querySelectorAll(".visual .fade-in"); //요소 찾기
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *0.7,
    opacity: 1,
  });
});
new Swiper(".notice .swiper", {
  direction: "vertical", 
  autoplay: true,
  loop: true,
});
new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true, //1번 슬라이드가 가운데 보임
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
});
const promotionEL = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector("toggle-promotion")

promotionToggleBtn.addEventListener("click", function () {
  if(promotionEL.classList.contains("hide")) {
    promotionEL.classList.remove("hide");
  } else { 
    promotionEL.classList.add("hide");
  }
});