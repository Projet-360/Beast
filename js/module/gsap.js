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
        scrub: 4,        
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