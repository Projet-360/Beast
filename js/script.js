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

  let tl = gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: "bottom-=1px",
      scrub: 4
    }
  });

  gsap.utils.toArray(".ink-box").forEach((section, i) => {
    if (i) {
      tl.fromTo(section, {
        scale: 0
      }, {
        scale: 1,
        ease: "expoScale(0.01, 1)" // or "expoScale(0.01, 1)" but that didn't seem quite as nice because it takes a while to become visible.
      }, "<") // completely overlap with the previous tween
    }

    tl.to(section, {
      scale: 500,
      ease: "expoScale(1, 500)"
    });
  });

  ScrollTrigger.create({
    snap: {
      snapTo: 1 / 5,
      duration: 0.5
    }
  });

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

//En dessous de 768, enlever les étoiles pour mobile
const stars = document.getElementById('stars');
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    stars.remove();
  }
});