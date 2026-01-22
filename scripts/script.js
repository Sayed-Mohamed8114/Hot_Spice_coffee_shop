const menuOpenButton=document.getElementById('menu-open-button');
const menuCloseButton=document.getElementById('menu-close-button');
let navMenu=document.querySelector('.nav-menu');
const pageContent=document.getElementById('page-content')

menuOpenButton.addEventListener('click',()=>{
    navMenu.style.left='0';
    pageContent.classList.add('blur');
});

menuCloseButton.addEventListener('click',()=>{
    navMenu.style.left='-310px';
    pageContent.classList.remove('blur');
});

// to import the swiper to make the slide pagination

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween:25,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // to make it move when you click on the dots under feedbacks
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breaks
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }
});
