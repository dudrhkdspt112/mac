//mainsilder
var swiper = new Swiper(".container-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    autoplay: {delay: 4000,
    disableOnInteraction: false,
    loop : true,
    }, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//mainsilder

// con-area
//con-area con-top-right
var swiper = new Swiper(".con-top-right", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
  autoplay: {delay: 5000,
  disableOnInteraction: false,
  },  
  loop: true,
  slidesPerView: 3, 
});
//con-area con-top-right
//con-area con-bottom-left
var swiper = new Swiper(".con-bottom-left", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
  },
  autoplay: {delay: 5000,
  disableOnInteraction: false,
  },  
  loop: true,
  slidesPerView: 3.1, 
});
//con-area con-bottom-left


