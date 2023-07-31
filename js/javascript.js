document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger, EasePack);
  

    function scrollDown() {
      let vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      window.scrollBy({ top: vh, behavior: 'smooth' });
  }
  
  document.querySelector('.ink-a-js-enter').addEventListener('click', scrollDown);
  
  // Ajout d'un écouteur d'événements à chaque élément avec la classe .next-button
  document.querySelectorAll('.next-button').forEach(function(element) {
      element.addEventListener('click', scrollDown);
  });

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


const main = document.querySelector('.ink');

const langue = document.querySelector('.langue');

const svg = document.querySelector('.langue-svg');
const loadTitre = document.querySelector('.langue-titre');
const loadlang = document.querySelector('.langue-language');
const selectLang = document.querySelectorAll('.nturl');
const body = document.querySelector('body');

window.addEventListener('load', function (event) {
    body.classList.add('langue');

    setTimeout(function () {
        main.classList.add('is-load');
        svg.classList.toggle('is-enter');
        loadTitre.classList.toggle('is-enter');
        loadlang.classList.toggle('is-enter');
    }, 1000);
});

// Boucle sur les bouton pour changer les textes en function de la value de l'element
selectLang.forEach(element => {
    // opacity a 0 lors du click pour le container langue
    element.onclick = function () {
        main.classList.remove('is-load');
        body.classList.remove('langue');

        langue.classList.add('is-leaving');
        body.classList.remove('load');
    }
});


document.addEventListener("DOMContentLoaded", function () {
  
    // Define the language reload anchors
    var language = {
      fr: {
        //Navigation  
        menuone: "Accueil",
        menutwo: "à propos de X",
        menuthree: "Social",
        menufour: "Vêtements",      
        menufive: "autres EP",        
        menusix: "Merci",  
  
        // A propos de X
        ink_b_js_sell_icon_title: "écouter",
        action_bouton_precommander: "Commander",
        action_bouton_vetement: "Vêtements",
        ink_b_js_sell_paragraphe: "Cet EP symbolise la fin d'une chose et le début d'une autre. X est le carrefour. Je suis fier de vous présenter pour une date tout aussi symbolique, le 22.02.2022 mon EP X.",  
  
        //Social
        ink_c_js_titleNews: "Newsletter",
        ink_c_js_titleNet: "Social",
        action_bouton_souscrire: "Souscrire",
        action_bouton_remind: "rappelle moi pour X",
        ink_c_js_container_paragrapheNews: "Vous avez la possibilité de vous inscrire à ma newsletter. Je me propose également de vous envoyer un message pour vous rappeler la sortie de X",
        ink_c_js_container_paragrapheNet: "Vous avez ici quelques réseaux sociaux où je suis présent. connectons-nous !",              
  
        //Vêtements
        ink_d_js_sell_icon_title:"Vêtements",
        action_bouton_boutique:"Shop",
        action_bouton_pack:"Pack",
        ink_d_js_sell_paragraphe:"Vous avez la possibilité d'acheter un vêtement avec l'EP. Il existe des forfaits proposés qui rendent les audios gratuits !",
  
        //Autre EP
        article_ep:"EP",
        article_button:"Commander",
        article_one_story__title:"X",
        article_two_story__title:"Delisioza",
        article_three_story__title:"NoWay",
        article_four_story__title:"Room",
        article_one_story__summary:"le 22.02.2022 à 20h02 sortira X. Mon premier EP. Cet espace-temps sera exceptionnel, il se reproduira que très rarement. Le style de cet EP est de la musique électronique. Respirez un bon coup le moment venu et rejoignez moi sur les plateformes pour écouter X.",
        article_two_story__summary:"Un EP prévu pour la fin de l'année 2022. Son style sera un mélange de Hip-hop, RnB de nos jours, ainsi que de l'électronique. Une musique qui se rapproche de Kaytranada qui prend une grande place dans mes inspirations.",
        article_three_story__summary:"Un EP prévu pour l'année 2023. NoWay est un concept expérimental. Les séquences rythmiques sont désordonnées, imprévisibles. Ce style ne sera pas l'un des plus conventionnels !",
        article_four_story__summary:"Room est un EP pour la fin d'année 2023. Cet EP est un concept aux musiques intimistes. Elles seront disposées à créer un moment pour soi, pour l'autre, quelque chose à l'extérieur de ce monde. Votre espace à vous.",
  
        //Merci
        ink_f_js_container_thanks:"Merci",
        ink_f_js_container_subtitle:"pour votre visite & votre soutient",
        ink_f_js_container_title:"Je tiens à remiercier tous ceux qui m'ont accompagnés dans cette aventure :",
      },
  
      en: {
        //Navigation  
        menuone: "Home",
        menutwo: "About X",
        menuthree: "Social",
        menufour: "Clothes",      
        menufive: "Other EP",        
        menusix: "Thank you",  
  
        // A propos de X
        ink_b_js_sell_icon_title: "listen",
        action_bouton_precommander: "order",
        action_bouton_vetement: "clothes",
        ink_b_js_sell_paragraphe: "This EP symbolises the end of one thing and the beginning of another. X is the crossroads. I am proud to present you with my EP X on an equally symbolic date 22.02.2022 my EP X.",  
  
        //Social
        ink_c_js_titleNews: "Newsletter",
        ink_c_js_titleNet: "Newsletter",
        action_bouton_souscrire: "Subscribe",
        action_bouton_remind: "Remind me for X",
        ink_c_js_container_paragrapheNews: "you have the possibility to subscribe to my newsletter. I would also like to send you a to send you a message to remind you of the release of X",
        ink_c_js_container_paragrapheNet: "Here are some social networks where I am present. Let's connect!",                        
  
        //Vêtements
        ink_d_js_sell_icon_title:"Clothes",
        action_bouton_boutique:"Shop",
        action_bouton_pack:"Pack",
        ink_d_js_sell_paragraphe:"You have the possibility to buy a garment with the EP. There are packages offered that make the audios free. ",
  
        //Autre EP
        article_ep:"EP",
        article_button:"order",
        article_one_story__title:"X",
        article_two_story__title:"Delisioza",
        article_three_story__title:"NoWay",
        article_four_story__title:"Room",
        article_one_story__summary:"On 22.02.2022 at 20:02 will be released X. My first EP. This will be an exceptional time-space, it will happen very rarely. The style of this EP is electronic music. Take a deep breath when the time comes and join me on the platforms to listen to X.",
        article_two_story__summary:"An EP planned for the end of 2022. His style will be a mix of Hip-hop, modern day RnB, as well as electronic. A music that is close to Kaytranada who takes a big place in my inspirations.",
        article_three_story__summary:"An EP planned for the year 2023. NoWay is an experimental concept. The rhythmic sequences are disordered, unpredictable. This style will not be one of the most conventional!",
        article_four_story__summary:"Room is an EP for the end of 2023. This EP is a concept with intimate music. They will be willing to create a moment for yourself, for each other, something outside this world. Your own space.",
  
        //Merci
        ink_f_js_container_thanks:"Thank you",
        ink_f_js_container_subtitle:"for your visit & support",
        ink_f_js_container_title:"I would like to thank all those who have accompanied me in this adventure:",
      },
  
      de: {
        //Navigation  
        menuone: "Startseite",
        menutwo: "über X",
        menuthree: "Soziales",
        menufour: "Kleidung",      
        menufive: "Andere EP",        
        menusix: "Dankeschön",  
  
        // A propos de X
        ink_b_js_sell_icon_title: "hören.",
        action_bouton_precommander: "Bestellen",
        action_bouton_vetement: "Kleidungsstücke",
        ink_b_js_sell_paragraphe: "Dieses EP symbolisiert das Ende einer Sache und den Beginn einer anderen. X ist der Scheideweg. Ich bin stolz, Ihnen an einem ebenso symbolträchtigen Datum, dem 22.02.2022, meine EP X zu präsentieren.",  
  
        //Social
        ink_c_js_titleNews: "Newsletter",
        ink_c_js_titleNet: "Newsletter",
        action_bouton_souscrire: "Abonnieren",
        action_bouton_remind: "Erinnern Sie mich für X",
        ink_c_js_container_paragrapheNews: "haben Sie die Möglichkeit, meinen Newsletter zu abonnieren. Ich möchte Ihnen auch eine Nachricht schicken, um Sie an die Veröffentlichung von X zu erinnern",
        ink_c_js_container_paragrapheNet: "Hier sind einige soziale Netzwerke, in denen ich präsent bin. Lassen Sie uns verbinden!",              
  
        //Vêtements
        ink_d_js_sell_icon_title:"Kleidungsstücke",
        action_bouton_boutique:"Shop",
        action_bouton_pack:"Packen Sie",
        ink_d_js_sell_paragraphe:"Sie haben die Möglichkeit, ein Kleidungsstück mit der EP zu kaufen. Es werden Pakete angeboten, bei denen die Audios kostenlos sind. ",
  
        //Autre EP
        article_ep:"EP",
        article_button:"Bestellen",
        article_one_story__title:"X",
        article_two_story__title:"Delisioza",
        article_three_story__title:"NoWay",
        article_four_story__title:"Room",
        article_one_story__summary:"Am 22.02.2022 um 20:02 wird X. Meine erste EP veröffentlicht. Dies wird eine außergewöhnliche Zeitspanne sein, es wird sehr selten passieren. Der Stil dieser EP ist elektronische Musik. Atmet tief durch, wenn es soweit ist, und besucht mich auf den Plattformen, um X zu hören.",
        article_two_story__summary:"An EP planned for the end of 2022. His style will be a mix of Hip-hop, modern day RnB, as well as electronic. A music that is close to Kaytranada who takes a big place in my inspirations.",
        article_three_story__summary:"Eine EP geplant für das Jahr 2023. NoWay ist ein experimentelles Konzept. Die rhythmischen Sequenzen sind ungeordnet, unvorhersehbar. Dieser Stil wird nicht einer der konventionellsten sein!",
        article_four_story__summary:"Room ist eine EP für das Ende des Jahres 2023. Diese EP ist ein Konzept mit intimer Musik. Sie werden bereit sein, einen Moment für sich selbst, für einander, etwas außerhalb dieser Welt zu schaffen. Ihr eigener Raum.",
  
        //Merci
        ink_f_js_container_thanks:"Dankeschön",
        ink_f_js_container_subtitle:"für Ihren Besuch und Ihre Unterstützung",
        ink_f_js_container_title:"Ich möchte mich bei allen bedanken, die mich bei diesem Abenteuer begleitet haben:",
      },
  
      es:  {
        // Mobile Disclaimer
        disclaimer_mobile_h3: "Bienvenido/a",
        disclaimer_mobile_p1: "Esta página web no es funcional en móviles de bajo rendimiento. Si deseas continuar, pincha el botón de abajo.",
        disclaimer_mobile_b1: "Continuar",
        disclaimer_mobile_p2: "Puedes acceder a la tienda pinchando el botón siguiente.",
        disclaimer_mobile_b2: "Tienda",
        disclaimer_mobile_h4: "Enlaces principales",

        //Navigation  
        menuone: "Inicio",
        menutwo: "Sobre X",
        menuthree: "Social",
        menufour: "Ropa",      
        menufive: "Otro EP",        
        menusix: "Gracias",  
  
        // A propos de X
        ink_b_js_sell_icon_title: "Escuchar",
        action_bouton_precommander: "venta",
        action_bouton_vetement: "ropa",
        ink_b_js_sell_paragraphe: "Este EP simboliza el final de una cosa y el comienzo de otra. X es el cruce. Estoy orgulloso de presentarte mi EP X en una fecha tán simbólica como el 22.02.2022.",  
  
        //Social
        ink_c_js_titleNews: "Newsletter",
        ink_c_js_titleNet: "Newsletter",
        action_bouton_souscrire: "Suscríbete a",
        action_bouton_remind: "Recuerdo fecha de salida",
        ink_c_js_container_paragrapheNews: "Tienes la posibilidad de suscribirte a mi boletín de noticias. También me gustaría enviarte un mensaje para recordarte el lanzamiento de X",
        ink_c_js_container_paragrapheNet: "Estas son algunas de las redes sociales en las que estoy presente. ¡Conectémonos!",                        
  
        //Vêtements
        ink_d_js_sell_icon_title:"Ropa",
        action_bouton_boutique:"Tienda",
        action_bouton_pack:"Pack",
        ink_d_js_sell_paragraphe:"Tienes la posibilidad de comprar una prenda con el EP. Se ofrecen 'packs' que hacen que los audios sean gratuitos.",
  
        //Autre EP
        article_ep:"EP",
        article_button:"venta",
        article_one_story__title:"X",
        article_two_story__title:"Delisioza",
        article_three_story__title:"NoWay",
        article_four_story__title:"Room",
        article_one_story__summary:"El 22.02.2022 a las 20:02 saldrá X. Mi primer EP. Este será un espacio de tiempo excepcional, ocurrirá muy raramente. El estilo de este EP es música electrónica. Respira profundamente cuando llegue el momento y acompáñame en las plataformas para escuchar X.",
        article_two_story__summary:"Un EP previsto para finales de 2022. Su estilo será una mezcla de Hip-hop, RnB actual, así como de electrónica. Una música cercana a Kaytranada que ocupa un lugar importante en mis inspiraciones.",
        article_three_story__summary:"Un EP previsto para el año 2023. NoWay es un concepto experimental. Las secuencias rítmicas son desordenadas, imprevisibles. ¡Este estilo no será uno de los más convencionales!",
        article_four_story__summary:"Room es un EP para finales de 2023. Este EP es un concepto con música íntima. Diseñado para crear un momento para sí mismo, para todos, algo fuera de este mundo. Su propio espacio.",
  
        //Merci
        ink_f_js_container_thanks:"Gracias",
        ink_f_js_container_subtitle:"por tu visita y apoyo",
        ink_f_js_container_title:"Me gustaría dar las gracias a todos los que me han acompañado en esta aventura:",
      }
  };
  
    //Navigation
    const menuone = document.querySelector('.ink-nav-ul-li:nth-of-type(1) p')
    const menutwo = document.querySelector('.ink-nav-ul-li:nth-of-type(2) p')
    const menuthree = document.querySelector('.ink-nav-ul-li:nth-of-type(3) p')
    const menufour = document.querySelector('.ink-nav-ul-li:nth-of-type(4) p')
    const menufive = document.querySelector('.ink-nav-ul-li:nth-of-type(5) p')
    const menusix = document.querySelector('.ink-nav-ul-li:nth-of-type(6) p')
  
    //Accueil
    const ink_a_js_seo = document.querySelector('.ink-a-js-seo')
  
    //A propos de X
    const ink_b_js_sell_icon_title = document.querySelector('.ink-b-js-sell-icon-title')
    const action_bouton_precommander = document.querySelector('.action-bouton-precommander')
    const action_bouton_vetement = document.querySelector('.action-bouton-vetement')
    const ink_b_js_sell_paragraphe = document.querySelector('.ink-b-js-sell-paragraphe')
  
    const dd = document.querySelector('.next-button')
    // SOCIAL
    const ink_c_js_titleNews = document.querySelector('.ink-c-js-title:nth-of-type(1) ')
    const ink_c_js_titleNet = document.querySelector('.ink-c-js-container:nth-of-type(2) .ink-c-js-title')
    const action_bouton_souscrire = document.querySelector('.action-bouton-souscrire')
    const action_bouton_remind = document.querySelector('.action-bouton-remind')
    const ink_c_js_container_paragrapheNews = document.querySelector('.ink-c-js-container:nth-of-type(1) .ink-c-js-container-paragraphe')
    const ink_c_js_container_paragrapheNet = document.querySelector('.ink-c-js-container:nth-of-type(2) .ink-c-js-container-paragraphe')
  
    //VETEMENTS
    const ink_d_js_sell_icon_title = document.querySelector('.ink-d-js-sell-icon-title')
    const action_bouton_boutique = document.querySelector('.action-bouton-boutique')
    const action_bouton_pack = document.querySelectorAll('.action-bouton-pack')
    const ink_d_js_sell_paragraphe = document.querySelector('.ink-d-js-sell-paragraphe')
  
    //AUTRE EP
    const article_ep = document.querySelector('.ink-e-js-carousel-container-item .story__category')
    const article_button = document.querySelector('.ink-e-js-carousel-container-item .action-bouton .action-bouton-pack')
  
    const article_one_story__title = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(1) .story__title')
    const article_two_story__title = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(2) .story__title')
    const article_three_story__title = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(3) .story__title')
    const article_four_story__title = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(4) .story__title')
  
  
    const article_one_story__summary = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(1) .story__summary')
    const article_two_story__summary = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(2) .story__summary')
    const article_three_story__summary = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(3) .story__summary')
    const article_four_story__summary = document.querySelector('.ink-e-js-carousel-container-item:nth-of-type(4) .story__summary')
   
    //MERCI
    const ink_f_js_container_thanks = document.querySelector('.ink-f-js-container-thanks')
    const ink_f_js_container_subtitle = document.querySelector('.ink-f-js-container-subtitle')
    const ink_f_js_container_title = document.querySelector('.ink-f-js-container-title')
  
    
    // Create a function to change the hash value of the page
    const buttonslang = document.querySelectorAll('.nturl')
      buttonslang.forEach(element => {
        element.addEventListener('click', function (event) { 
            menuone.textContent = language[element.id].menuone;
            menutwo.textContent = language[element.id].menutwo;
            menuthree.textContent = language[element.id].menuthree;
            menufour.textContent = language[element.id].menufour;
            menufive.textContent = language[element.id].menufive;
            menusix.textContent = language[element.id].menusix;
  
            ink_b_js_sell_icon_title.textContent = language[element.id].ink_b_js_sell_icon_title;
            action_bouton_precommander.textContent = language[element.id].action_bouton_precommander;
            //action_bouton_vetement.textContent = language[element.id].action_bouton_vetement;
            ink_b_js_sell_paragraphe.textContent = language[element.id].ink_b_js_sell_paragraphe;
  
            ink_c_js_titleNews.textContent = language[element.id].ink_c_js_titleNews;
            ink_c_js_titleNet.textContent = language[element.id].ink_c_js_titleNet;
            action_bouton_souscrire.textContent = language[element.id].action_bouton_souscrire;
            action_bouton_remind.textContent = language[element.id].action_bouton_remind;
            ink_c_js_container_paragrapheNews.textContent = language[element.id].ink_c_js_container_paragrapheNews;
            ink_c_js_container_paragrapheNet.textContent = language[element.id].ink_c_js_container_paragrapheNet;
  
            ink_d_js_sell_icon_title.textContent = language[element.id].ink_d_js_sell_icon_title;
            action_bouton_boutique.textContent = language[element.id].action_bouton_boutique;
            action_bouton_pack.textContent = language[element.id].action_bouton_pack;
            ink_d_js_sell_paragraphe.textContent = language[element.id].ink_d_js_sell_paragraphe;
  
            article_ep.textContent = language[element.id].article_ep;
            article_button.textContent = language[element.id].article_button;
            article_one_story__title.textContent = language[element.id].article_one_story__title;
            article_two_story__title.textContent = language[element.id].article_two_story__title;
            article_three_story__title.textContent = language[element.id].article_three_story__title;
            article_four_story__title.textContent = language[element.id].article_four_story__title;
            article_one_story__summary.textContent = language[element.id].article_one_story__summary;
            article_two_story__summary.textContent = language[element.id].article_two_story__summary;
            article_three_story__summary.textContent = language[element.id].article_three_story__summary;
            article_four_story__summary.textContent = language[element.id].article_four_story__summary;
            ink_f_js_container_thanks.textContent = language[element.id].ink_f_js_container_thanks;
            ink_f_js_container_subtitle.textContent = language[element.id].ink_f_js_container_subtitle;
            ink_f_js_container_title.textContent = language[element.id].ink_f_js_container_title;
      })
    })
  })


/*! Grained.js 
* Author : Sarath Saleem  - https://github.com/sarathsaleem 
* MIT license: http://opensource.org/licenses/MIT 
* GitHub : https://github.com/sarathsaleem/grained 
* v0.0.1 
*/
!function(a,b){"use strict";function c(a,c){function d(a,b,c,d){var e="";e=b.length?b+"{"+c+"}":c,"insertRule"in a?a.insertRule(e,d):"addRule"in a&&a.addRule(b,c,d)}var e=null,f=null,g=null;if("string"==typeof a&&(e=b.getElementById(a.split("#")[1])),!e)return void console.error("Grained: cannot find the element with id "+a);f=e.id,"absolute"!==e.style.position&&(e.style.position="relative"),e.style.overflow="hidden";var h=["","-moz-","-o-animation-","-webkit-","-ms-"],i={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:20};Object.keys(c).forEach(function(a){i[a]=c[a]});for(var j=function(){var a=b.createElement("canvas"),c=a.getContext("2d");a.width=i.patternWidth,a.height=i.patternHeight;for(var d=0;d<i.patternWidth;d+=i.grainDensity)for(var e=0;e<i.patternHeight;e+=i.grainDensity){var f=256*Math.random()|0;c.fillStyle="rgba("+[f,f,f,i.grainOpacity].join()+")",c.fillRect(d,e,i.grainWidth,i.grainHeight)}return a.toDataURL("image/png")},k=j(),l="",m=["0%:-10%,10%","10%:-25%,0%","20%:-30%,10%","30%:-30%,30%","40%::-20%,20%","50%:-15%,10%","60%:-20%,20%","70%:-5%,20%","80%:-25%,5%","90%:-30%,25%","100%:-10%,10%"],n=h.length;n--;){l+="@"+h[n]+"keyframes grained{";for(var o=0;o<m.length;o++){var p=m[o].split(":");l+=p[0]+"{",l+=h[n]+"transform:translate("+p[1]+");",l+="}"}l+="}"}var q=b.getElementById("grained-animation");q&&q.parentElement.removeChild(q);var r=b.createElement("style");r.type="text/css",r.id="grained-animation",r.innerHTML=l,b.body.appendChild(r);var s=b.getElementById("grained-animation-"+f);s&&s.parentElement.removeChild(s),r=b.createElement("style"),r.type="text/css",r.id="grained-animation-"+f,b.body.appendChild(r);var t="background-image: url("+k+");";if(t+='position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;',n=h.length,i.animate)for(;n--;)t+=h[n]+"animation-name:grained;",t+=h[n]+"animation-iteration-count: infinite;",t+=h[n]+"animation-duration: "+i.grainChaos+"s;",t+=h[n]+"animation-timing-function: steps("+i.grainSpeed+", end);";g="#"+f+"::before",d(r.sheet,g,t)}a.grained=c}(window,document);

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
    disclaimer_mobile.style.visibility = "visible";
    disclaimer_mobile.style.opacity = "1";
  }
});