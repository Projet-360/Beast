const main = document.querySelector('.ink');

const langue = document.querySelector('.langue');
const load = document.querySelector('.load');

const svg = document.querySelector('.langue-svg');
const loadTitre = document.querySelector('.langue-titre');
const loadlang = document.querySelector('.langue-language');
const selectLang = document.querySelector('.nturl');
const body = document.querySelector('body');

window.addEventListener('load', function(event) {
    body.classList.add('langue');
    
    setTimeout(function () {
        main.classList.add('is-load');

        svg.classList.toggle('is-enter');
        loadTitre.classList.toggle('is-enter');
        loadlang.classList.toggle('is-enter');
    }, 1000);
});

selectLang.onclick = function () {
    main.classList.remove('is-load');
    body.classList.remove('langue');

    langue.classList.add('is-leaving');
    body.classList.remove('load');
    setTimeout(function () {
        langue.parentNode.removeChild(langue);
        load.parentNode.removeChild(load);
      }, 2500);
}