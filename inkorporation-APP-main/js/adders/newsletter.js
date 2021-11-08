
// NEWSLETTER
const newsletter = document.getElementsByClassName('content-part-third-list-item')[5];
const newsletterContainer = document.querySelector('.modal-newsletter-container');
const newsletterOverlay = document.querySelector('.modal-newsletter-overlay');
const newsletterModal = document.querySelector('.modal-newsletter');
const newsletterMenu = document.getElementsByClassName('menu-container-grid-box-link')[4];


newsletter.onclick = function () {
  newsletterModal.classList.toggle('is-active');
}
newsletterOverlay.onclick = function () {
  newsletterModal.classList.toggle('is-active');
}
newsletterMenu.onclick = function () {
  newsletterModal.classList.toggle('is-active');
}