const story = document.getElementsByClassName('content-part-third-list-item')[4];
const modalNewsletter = document.querySelector('.modal-newsletter');
const main = document.querySelector('.main');


story.onclick = function () {
    main.classList.toggle('is-story');

    setTimeout(function () {
      main.parentNode.removeChild(main);
    }, 2000);
}

