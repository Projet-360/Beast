
document.addEventListener("DOMContentLoaded", function() {
  
gsap.registerPlugin(ScrollTrigger, EasePack);

gsap.config({force3D: false});

let tl = gsap.timeline({
  scrollTrigger: {
    start: 0,
    end: "bottom",
    scrub: 3
  }
});

gsap.utils.toArray(".ink-box").forEach((section, i) => {
  if (i) {
    tl.fromTo(section, {scale: 0}, {
      scale: 1,
      ease: "expoScale(0.01, 1)" // or "expoScale(0.01, 1)" but that didn't seem quite as nice because it takes a while to become visible.
    }, "<") // completely overlap with the previous tween
  }
  tl.to(section, {
    scale: 200,
    ease: "expoScale(1, 200)"
  });
});



  let main = document.getElementById('ink');

  ScrollTrigger.create({
    trigger: ".ink-a",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "a"},  
  });
  
  ScrollTrigger.create({
    trigger: ".ink-b",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "b"},  
  });
  
  ScrollTrigger.create({
    trigger: ".ink-c",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "c"},  
  });
  
  ScrollTrigger.create({
    trigger: ".ink-d",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "d"},  
  });
  
  ScrollTrigger.create({
    trigger: ".ink-e",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "e"},  
  });
  
  ScrollTrigger.create({
    trigger: ".ink-f",
    start: "top",
    end: "bottom",
    toggleClass: {targets: main, className: "f"},  
  });
});


//En dessous de 768, enlever les étoiles pour mobile
const stars = document.getElementById('stars');
document.addEventListener("DOMContentLoaded", function(event) { 
  if (window.matchMedia("(max-width: 768px)").matches) {
    stars.remove();
  }
});

