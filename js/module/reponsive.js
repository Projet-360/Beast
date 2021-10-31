// PERMET DE SUPPRIMER LES ETOILES POUR LES MOBILES
// IL SUPPRIME LA BALISE EN DESSOUS DE 768PX
const stars = document.getElementById('stars');
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    stars.remove();
  }
});
