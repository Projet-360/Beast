// MENU
const hamburger = document.querySelector('.menu-hamburger-box');
const menu = document.querySelector('.menu');
const containerBox = document.querySelector('.menu-container');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const menuGrid = document.querySelector('.menu-container-grid');

hamburger.onclick = function () {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
  containerBox.classList.toggle('is-active');
  main.classList.toggle('is-active');
  body.classList.toggle('is-active');
}