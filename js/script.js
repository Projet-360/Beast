var options = {
  "animate": true,
  "patternWidth": 500,
  "patternHeight": 500,
  "grainOpacity": 0.46,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}
grained("#grained", options);

document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger, EasePack);

  gsap.config({
    force3D: false
  });

  // CREATION DE LA TIMELINE
  let tl = gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: "bottom-=1px",
      scrub: 4
    }
  });

  // BLOUCLE PERMETTANT DE FAIRE ZOOM SUR CHAQUES SECTIONS.
  gsap.utils.toArray(".ink-box").forEach((section, i) => {
    if (i) {
      tl.fromTo(section, {
        scale: 0
      }, {
        scale: 1,
        ease: "expoScale(0.01, 1)" 
      }, "<")
    }

    tl.to(section, {
      scale: 500,
      ease: "expoScale(1, 500)"
    });
  });

  // PERMET DE REALISER UNE POSITION MAGNETIQUE SUR LES SECTIONS
  ScrollTrigger.create({
    snap: {
      snapTo: 1 / 5,
      duration: 0.5
    }
  });


  // BOUCLE PERMETTANT DE CREER UNE CLASS CSS SUR LA BALISE MAIN SUR CHAQUES SECTIONS 'a' 'b' 'c' 'd' ...
  let main = document.getElementById('ink');
  const sectionLetter = ['a', 'b', 'c', 'd', 'e', 'f'];

  sectionLetter.forEach(element => {
    ScrollTrigger.create({
      trigger: ".ink-" + element,
      start: "top-=1px",
      end: "bottom-=1px",
      toggleClass: {
        targets: main,
        className: element
      },
    });
  });
});

// PERMET DE SUPPRIMER LES ETOILES POUR LES MOBILES
// IL SUPPRIME LA BALISE EN DESSOUS DE 768PX
const stars = document.getElementById('stars');
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    stars.remove();
  }
});


document.addEventListener("DOMContentLoaded", function () {

// INSERTION DES SVG SUR LE DOM DU DOSSIER VARIABLE
fetch('../icon/variable/date.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-a-js-up');    
    element.innerHTML =  `${data}`;
});

fetch('../icon/variable/logo.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-a-js-img');    
    element.innerHTML =  `${data}`;
});

fetch('../icon/variable/whale.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-b-js-svg');    
    element.innerHTML =  `${data}`;
});


// INSERTION DES SVG SUR LE DOM DU DOSSIER TEMPLATE
fetch('../icon/template/ticket.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-a-js-ticket');    
    element.innerHTML =  `${data}`;
});

fetch('../icon/template/door.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-c-js-svg');    
    element.innerHTML =  `${data}`;
});

fetch('../icon/template/face.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.getElementById('ink-d-js-svg');    
    element.innerHTML =  `${data}`;
});




// INSERTION DES SVG SUR LE DOM DU DOSSIER BRANDS
fetch('../icon/brands/spotify-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-b-js-sell-icon a #icon')[0];    
    console.log(element)
    element.innerHTML =  `${data}`;
});

fetch('../icon/brands/soundcloud-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-b-js-sell-icon a #icon')[1];    
    console.log(element)
    element.innerHTML =  `${data}`;
});

fetch('../icon/brands/youtube-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-b-js-sell-icon a #icon')[2];    
    console.log(element)
    element.innerHTML =  `${data}`;
});









// INSERTION DES SVG SUR LE DOM DU DOSSIER BRANDS -> RESEAU SOCIAUX
fetch('../icon/brands/facebook-f-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-c-js-container-social-link #icon')[0];    
    console.log(element)
    element.innerHTML =  `${data}`;
});

fetch('../icon/brands/instagram-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-c-js-container-social-link #icon')[1];    
    console.log(element)
    element.innerHTML =  `${data}`;
});

fetch('../icon/brands/twitter-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-c-js-container-social-link #icon')[2];    
    console.log(element)
    element.innerHTML =  `${data}`;
});

fetch('../icon/brands/tiktok-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-c-js-container-social-link #icon')[3];    
    console.log(element)
    element.innerHTML =  `${data}`;
});


fetch('../icon/brands/tiktok-brands.svg')
  .then(response => response.text())
  .then(data => {
    let element = document.querySelectorAll('.ink-e-js-carousel-container-item-logo')[0];    
    console.log(element)
    element.innerHTML =  `${data}`;
});





});