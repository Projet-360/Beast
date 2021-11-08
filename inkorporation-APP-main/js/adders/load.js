const header = document.querySelector('.header');
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');

const load = document.querySelector('.load');
const svg = document.querySelector('.load-svg');
const loadTitre = document.querySelector('.load-titre');
const loadlang = document.querySelector('.load-language');
const selectLang = document.querySelector('.nturl');
const body = document.querySelector('body');

window.addEventListener('load', function(event) {
    body.classList.add('load');
    
    setTimeout(function () {
        header.classList.add('is-load');
        main.classList.add('is-load');
        menu.classList.add('is-load');

        svg.classList.toggle('is-enter');
        loadTitre.classList.toggle('is-enter');
        loadlang.classList.toggle('is-enter');
    }, 1000);
});

selectLang.onclick = function () {
    header.classList.remove('is-load');
    main.classList.remove('is-load');
    menu.classList.remove('is-load');

    load.classList.add('is-leaving');
    body.classList.remove('load');
    setTimeout(function () {
        load.parentNode.removeChild(load);
      }, 2500);
}