// PERMET DE SUPPRIMER LES ETOILES POUR LES MOBILES
// PERMET DE AFFICHER LE DISCLAIMER POUR LES MOBILES A BASSE PERFORMANCES
// IL SUPPRIME LA BALISE EN DESSOUS DE 768PX
const stars = document.getElementById('stars');
const disclaimerMobile = document.getElementById('disclaimerMobile');
const boutonContinue = document.getElementById('disclaimer_mobile_container_continue');

boutonContinue.onclick = function() { 
    disclaimer_mobile.style.visibility = "hidden";
    disclaimer_mobile.style.opacity = "0";
 };

document.addEventListener("DOMContentLoaded", function (event) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    stars.remove();    
    
    disclaimer_mobile.style.visibility = "visible";
    disclaimer_mobile.style.opacity = "1";
  }
});
