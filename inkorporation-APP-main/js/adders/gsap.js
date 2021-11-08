function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.ticker.fps(30);
  
  
  let container = document.getElementById("content");
  gsap.to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth) +
      "px",
    ease: "power2",
    scrollTrigger: {
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "=" + container.offsetWidth,
    },
  });
});


