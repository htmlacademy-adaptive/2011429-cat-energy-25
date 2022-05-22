let navMain = document.querySelector('.main-nav');
let navBurger = document.querySelector('.burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
