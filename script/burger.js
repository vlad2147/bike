(function () {   //Делаем так чтобы этот скриптт не знал переменные других скриптов этого сайта


let btn = document.querySelector(".nav__btn");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".nav__logo");


btn.addEventListener("click", function () {
  nav.classList.add('nav--active');
});

logo.addEventListener("click", function () {
  nav.classList.remove('nav--active');
});

}());

