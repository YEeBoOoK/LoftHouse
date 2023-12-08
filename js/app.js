// Nav icon

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll')
}



// Mobile menu

// Получаем все элементы a внутри li внутри .nav__list
var menuLinks = document.querySelectorAll('.nav__list > li > a');

// Добавляем обработчик событий для каждого элемента
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        // Проверяем, есть ли у .header__top-row класс .header__top-row--mobile
        if (document.querySelector('.header__top-row').classList.contains('header__top-row--mobile')) {
            // Если да, то выполняем нужные действия
            navIcon.classList.toggle('nav-icon--active');
            nav.classList.toggle('header__top-row--mobile');
            document.body.classList.toggle('no-scroll');
        }
    });
});



// Phone Mask
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});



// Переход по ссылкам к разделам 

let links = document.querySelectorAll("li > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        const targetId = links[i].getAttribute("data-link");
        document.getElementsByClassName(targetId)[0].scrollIntoView({ behavior: "smooth" });
    }
}

let link = document.querySelector(".info--map");

link.onclick = function () {
    const targetId = link.getAttribute("data-link");
    document.getElementsByClassName(targetId)[0].scrollIntoView({ behavior: "smooth" });
}