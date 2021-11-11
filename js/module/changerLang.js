document.addEventListener("DOMContentLoaded", function () {
  
  // Define the language reload anchors
  var language = {
    en: {
      //Navigation  
      menuone: "Home",
      menutwo: "About X",
      menuthree: "Social",
      menufour: "Clothes",      
      menufive: "Other EP",        
      menusix: "Know",  

      // A propos de X
      ink_b_js_sell_icon_title: "listen",
      action_bouton_precommander: "pre order",
      action_bouton_vetement: "clothes",
      ink_b_js_sell_paragraphe: "This EP symbolises the end of one thing and the beginning of another. X is the crossroads. I am proud to present you with my EP X on an equally symbolic date 22.02.2022 my EP X.",  

        
      ink_c_js_title: "Newsletter",
      action_bouton_souscrire: "Subscribe",
      action_bouton_remind: "Remind me for X",
      ink_c_js_container_paragrapheNews: "you have the possibility to subscribe to my newsletter. I would also like to send you a to send you a message to remind you of the release of X",
      ink_c_js_container_paragrapheNet: "Here are some social networks where I am present. Let's connect!",              

      ink_d_js_sell_icon_title:"",
      action_bouton_boutique:"Shop",
      action_bouton_pack:"Pack",
      ink_d_js_sell_paragraphe:"",
    },



    fr: {
      //Navigation
      menuone: "Home",
      menutwo: "à propos de X",
      menuthree: "Social",
      menufour: "Vêtements",      
      menufive: "autre EP",        
      menusix: "Know",

      // A propos de X
      ink_b_js_sell_icon_title: "écouter",
      action_bouton_precommander: "précommander",
      action_bouton_vetement: "Vêtement",
      ink_b_js_sell_paragraphe: "Cet EP symbolise la fin d'une chose et le début d'une autre. X est le carrefour. Je suis fier de vous présenter pour une date tout aussi symbolique, le 22.02.2022 mon EP X.",  
      ink_c_js_title: "Newsletter",
      action_bouton_souscrire: "Soucrire",
      action_bouton_remind: "Rapelle moi pour X",
      ink_c_js_container_paragrapheNews: "vous avez la possibilité de vous inscrire à ma newsletter. Je me propose également de vous envoyer un message pour vous rappeler la sortie de X",
      ink_c_js_container_paragrapheNet: "Vous avez ici quelques réseaux sociaux où je suis présent. connectons-nous !",              

      ink_d_js_sell_icon_title:"",
      action_bouton_boutique:"Boutique",
      action_bouton_pack:"Pack",
      ink_d_js_sell_paragraphe:"",
    },



    de: {
      //Navigation
      menuone: "Home DE",
      menutwo: "à propos de X DE",
      menuthree: "Social DE",
      menufour: "Vêtements DE",      
      menufive: "autre EP DE",        
      menusix: "Know DE",

      // A propos de X
      ink_b_js_sell_icon_title: "listen",
      action_bouton_precommander: "pre order",
      action_bouton_vetement: "clothes",
      ink_b_js_sell_paragraphe: "This EP symbolises the end of one thing and the beginning of another. X is the crossroads. I am proud to present you with my EP X on an equally symbolic date 22.02.2022 my EP X.",  
      ink_c_js_title: "Newsletter",
      action_bouton_souscrire: "",
      action_bouton_remind: "",
      ink_c_js_container_paragrapheNews: "",
      ink_c_js_container_paragrapheNet: "sdg",              

      ink_d_js_sell_icon_title:"",
      action_bouton_boutique:"",
      action_bouton_pack:"",
      ink_d_js_sell_paragraphe:"",
    },


    
    es: {      
      //Navigation
      menuone: "Home ES",
      menutwo: "à propos de X ES",
      menuthree: "Social ES",
      menufour: "Vêtements ES",      
      menufive: "autre EP ES",        
      menusix: "Know ES",

      // A propos de X
      ink_b_js_sell_icon_title: "listen",
      action_bouton_precommander: "pre order",
      action_bouton_vetement: "clothes",
      ink_b_js_sell_paragraphe: "This EP symbolises the end of one thing and the beginning of another. X is the crossroads. I am proud to present you with my EP X on an equally symbolic date 22.02.2022 my EP X.",  
      ink_c_js_title: "Newsletter",
      action_bouton_souscrire: "",
      action_bouton_remind: "",
      ink_c_js_container_paragrapheNews: "",
      ink_c_js_container_paragrapheNet: "sdg",              

      ink_d_js_sell_icon_title:"",
      action_bouton_boutique:"",
      action_bouton_pack:"",
      ink_d_js_sell_paragraphe:"",
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
  const ink_c_js_title = document.querySelector('.ink-c-js-title')
  const action_bouton_souscrire = document.querySelector('.action-bouton-souscrire')
  const action_bouton_remind = document.querySelector('.action-bouton-remind')
  const ink_c_js_container_paragrapheNews = document.querySelector('.ink-c-js-container:nth-of-type(1) .ink-c-js-container-paragraphe')
  const ink_c_js_container_paragrapheNet = document.querySelector('.ink-c-js-container:nth-of-type(2) .ink-c-js-container-paragraphe')

  //VETEMENTS
  const ink_d_js_sell_icon_title = document.querySelector('.ink-d-js-sell-icon-title')
  const action_bouton_boutique = document.querySelector('.action-bouton-boutique')
  const action_bouton_pack = document.querySelector('.action-bouton-pack')
  const ink_d_js_sell_paragraphe = document.querySelector('.ink-d-js-sell-paragraphe')


  
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
          action_bouton_vetement.textContent = language[element.id].action_bouton_vetement;
          ink_b_js_sell_paragraphe.textContent = language[element.id].ink_b_js_sell_paragraphe;

          ink_c_js_title.textContent = language[element.id].ink_c_js_title;
          action_bouton_souscrire.textContent = language[element.id].action_bouton_souscrire;
          action_bouton_remind.textContent = language[element.id].action_bouton_remind;
          ink_c_js_container_paragrapheNews.textContent = language[element.id].ink_c_js_container_paragrapheNews;
          ink_c_js_container_paragrapheNet.textContent = language[element.id].ink_c_js_container_paragrapheNet;

          ink_d_js_sell_icon_title.textContent = language[element.id].ink_d_js_sell_icon_title;
          action_bouton_boutique.textContent = language[element.id].action_bouton_boutique;
          action_bouton_pack.textContent = language[element.id].action_bouton_pack;
          ink_d_js_sell_paragraphe.textContent = language[element.id].ink_d_js_sell_paragraphe;
    })
  })
})