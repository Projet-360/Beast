gsap.registerPlugin(ScrollTrigger, EasePack);

gsap.config({force3D: false});

let tl = gsap.timeline({
  scrollTrigger: {
    start: 0,
    end: "bottom",
    scrub: 1
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










// let main = document.getElementById('ink');
// ScrollTrigger.create({
//   trigger: ".ink-a-js",
//   start: "top",
//   end: "bottom",
//   toggleClass: {targets: main, className: "a"},
//   //markers: true
// });

// ScrollTrigger.create({
//   trigger: ".ink-b-js",
//   start: "top+=100%",
//   end: "bottom+=100%",
//   toggleClass: {targets: main, className: "b"},
//   //markers: true
// });

// ScrollTrigger.create({
//   trigger: ".ink-c-js",
//   start: "top+=200%",
//   end: "bottom+=200%",
//   toggleClass: {targets: main, className: "c"},
//   //markers: true
// });

// ScrollTrigger.create({
//   trigger: ".ink-d-js",
//   start: "top+=300%",
//   end: "bottom+=300%",
//   toggleClass: {targets: main, className: "d"},
//   //markers: true
// });

// ScrollTrigger.create({
//   trigger: ".ink-e-js",
//   start: "top+=400%",
//   end: "bottom+=400%",
//   toggleClass: {targets: main, className: "e"},
//   //markers: true
// });

// ScrollTrigger.create({
//   trigger: ".ink-f-js",
//   start: "top+=500%",
//   end: "bottom+=500%",
//   toggleClass: {targets: main, className: "f"},
//   //markers: true
// });

