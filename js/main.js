// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 10,
    },
    1920: {
      slidesPerView: 3,
        spaceBetween: 40,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
});

// Tabs

const tabs = document.querySelectorAll('.popup-tab__btn');
const all_content = document.querySelectorAll('.popup-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('popup-tab__btn--active');
    });
    tab.classList.add('popup-tab__btn--active');

    all_content.forEach(content => {
      content.style.display = 'none';
    });
    all_content[index].style.display = 'block';
  });
});



// Mobile nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
}

// Mobile Select Tab

function changeTab(tab, popupId) {
  const popup = document.getElementById(popupId);
  const tabs = popup.querySelectorAll('.popup-content');
  tabs.forEach(tabContent => tabContent.style.display = 'none');
  popup.querySelector(tab).style.display = 'block';
}

