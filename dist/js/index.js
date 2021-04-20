const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu__header__close');

const openPopup = document.querySelector('.region__btn');
const popupBg = document.querySelector('.popup-bg');
const closePopup = document.querySelector('.close-popup');

const firstDot = document.getElementById("dot1");
const secondDot = document.getElementById("dot2");
const thirdDot = document.getElementById("dot3");
const fouthDot = document.getElementById("dot4");
const inputText = document.querySelector(".main__graph-text__content");
const outputText = ["Вы нажали на ПЕРВУЮ точку", "Вы нажали на ВТОРУЮ точку", "Вы нажали на ТРЕТЬЮ точку", "Вы нажали на ЧЕТВЁРТУЮ точку"];

firstDot.addEventListener('click', () => {
    inputText.innerHTML = outputText[0];
});

secondDot.addEventListener('click', () => {
    inputText.innerHTML = outputText[1];
});

thirdDot.addEventListener('click', () => {
    inputText.innerHTML = outputText[2];
});

fouthDot.addEventListener('click', () => {
    inputText.innerHTML = outputText[3];
});


// Изменение и открытие бургер-меню
burger.addEventListener('click', () => {
    burger.classList.toggle("change");
    burgerMenu.classList.toggle("open");
});

// Закрытие бургер-меню
burgerClose.addEventListener('click', () => {
    burger.classList.toggle("change");
    burgerMenu.classList.toggle("open");
});

// Появление модального окна
openPopup.addEventListener('click', () => {
    popupBg.classList.add("visible");
});

// Закрытие модального окна
closePopup.addEventListener('click', () => {
    popupBg.classList.remove("visible");
});

// Настройки слайдера
new Swiper(".image-slider", {
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
});