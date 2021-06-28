// burger menu

let body = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let burgerNav = document.querySelector('.burger__nav');
let burgerBG = document.querySelector('.burger__bg');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerNav.classList.toggle('active');
  burgerBG.classList.toggle('active');
  body.classList.toggle('lock');
});

burgerBG.addEventListener('click', () => {
  burger.classList.remove('active');
  burgerNav.classList.remove('active');
  burgerBG.classList.remove('active');
  body.classList.remove('lock');
});

// slider

let slider = new Swiper('.intro__slider', {

  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: false,
  pagination: {
    el: '.intro__dots',
    type: 'bullets',
    clickable: true,
    bulletClass: 'intro__dot',
    bulletActiveClass: 'intro__dot--active'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.intro__next',
    prevEl: '.intro__prev',
  }
});

// popup "связаться с нами"

let introButton = document.querySelector('.intro__button');
let contactUsBG = document.querySelector('.contactUs__bg');
let contactUsForm = document.querySelector('.contactUs__form');
let contactUsClose = document.querySelector('.contactUs__close');

let openContactUs = () => {
  contactUsBG.classList.add('active');
  contactUsForm.classList.add('active');
  body.classList.add('lock');
};

let closeContactUs = () => {
  contactUsBG.classList.remove('active');
  contactUsForm.classList.remove('active');
  body.classList.remove('lock');
};

introButton.addEventListener('click', openContactUs);

contactUsBG.addEventListener('click', closeContactUs);

contactUsClose.addEventListener('click', closeContactUs);

// popup фотогалерея

let galleryItem1 = document.querySelector('.gallery__item--1');
let galleryItem2 = document.querySelector('.gallery__item--2');
let galleryItem3 = document.querySelector('.gallery__item--3');
let galleryItem4 = document.querySelector('.gallery__item--4');
let galleryItemAll = document.querySelectorAll('.gallery__item-full');
let galleryItemFull1 = document.querySelector('.gallery__item-full--1');
let galleryItemFull2 = document.querySelector('.gallery__item-full--2');
let galleryItemFull3 = document.querySelector('.gallery__item-full--3');
let galleryItemFull4 = document.querySelector('.gallery__item-full--4');
let galleryBG = document.querySelector('.gallery__bg');
let galleryCloser = document.querySelector('.gallery__close');

let galleryOpenBG = () => {
  galleryBG.classList.add('active');
  body.classList.add('lock');
};

let galleryOpen1 = () => {
  galleryItemFull1.classList.add('active');
  galleryOpenBG();
}
let galleryOpen2 = () => {
  galleryItemFull2.classList.add('active');
  galleryOpenBG();
}
let galleryOpen3 = () => {
  galleryItemFull3.classList.add('active');
  galleryOpenBG();
}
let galleryOpen4 = () => {
  galleryItemFull4.classList.add('active');
  galleryOpenBG();
}

galleryItem1.addEventListener('click', galleryOpen1);
galleryItem2.addEventListener('click', galleryOpen2);
galleryItem3.addEventListener('click', galleryOpen3);
galleryItem4.addEventListener('click', galleryOpen4);

let galleryClose = () => {
  galleryBG.classList.remove('active');
  body.classList.remove('lock');
  galleryItemAll.forEach(el => el.classList.remove('active'));
};

galleryBG.addEventListener('click', galleryClose);
galleryCloser.addEventListener('click', galleryClose);

// accordeon

let faqItems = document.querySelectorAll('.faq__item');
let faqHeadingAll = document.querySelectorAll('.faq__heading');

faqHeadingAll.forEach(el => {
  el.addEventListener('click', () => {
    faqItems.forEach(el => { el.classList.remove('active') });

    if (el.classList.contains('active'))
      el.classList.remove('active');
    else {
      el.parentElement.classList.add('active');
      el.classList.add('active');
    }
  });
});


// yandex map

ymaps.ready(function () {
  let moscow_map = new ymaps.Map("contact__map", {
    center: [55.76, 37.64],
    zoom: 10
  });
});

// появление элементов при скролле

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elem of elements) {
  observer.observe(elem);
}