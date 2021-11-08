function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("content-part-first-one-wave-container").removeChild(document.getElementById("content-part-first-one-wave-container-svg"));

    } else {
    }
  }
  
  var x = window.matchMedia("(max-width: 996px)")
  myFunction(x) // Call listener function at run time