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
      action_bouton_precommander: "Précommander",
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
      article_button:"Précommander",
      article_one_story__title:"X",
      article_two_story__title:"Xplorer",
      article_three_story__title:"en",
      article_four_story__title:"en",
      article_one_story__summary:"en",
      article_two_story__summary:"en",
      article_three_story__summary:"en",
      article_four_story__summary:"en",

      //Merci
      ink_f_js_container_thanks:"Merci",
      ink_f_js_container_subtitle:"pour votre visite &<br> votre soutient",
      ink_f_js_container_title:"Je tiens à remiercier tous ceux qui m'ont accompagnés dans cette aventure :",
    },

    en: {
      //Navigation  
      menuone: "en",
      menutwo: "en",
      menuthree: "en",
      menufour: "en",      
      menufive: "en",        
      menusix: "en",  

      // A propos de X
      ink_b_js_sell_icon_title: "en",
      action_bouton_precommander: "en",
      action_bouton_vetement: "en",
      ink_b_js_sell_paragraphe: "en",  

      //Social
      ink_c_js_titleNews: "en",
      ink_c_js_titleNet: "en",
      action_bouton_souscrire: "en",
      action_bouton_remind: "en",
      ink_c_js_container_paragrapheNews: "en",
      ink_c_js_container_paragrapheNet: "en",              

      //Vêtements
      ink_d_js_sell_icon_title:"en",
      action_bouton_boutique:"en",
      action_bouton_pack:"en",
      ink_d_js_sell_paragraphe:"en",

      //Autre EP
      article_ep:"en",
      article_button:"en",
      article_one_story__title:"en",
      article_two_story__title:"en",
      article_three_story__title:"en",
      article_four_story__title:"en",
      article_one_story__summary:"en",
      article_two_story__summary:"en",
      article_three_story__summary:"en",
      article_four_story__summary:"en",

      //Merci
      ink_f_js_container_thanks:"en",
      ink_f_js_container_subtitle:"en",
      ink_f_js_container_title:"en",
    },

    de: {
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

      //Social
      ink_c_js_titleNews: "Newsletter",
      ink_c_js_titleNet: "Newsletter",
      action_bouton_souscrire: "Subscribe",
      action_bouton_remind: "Remind me for X",
      ink_c_js_container_paragrapheNews: "you have the possibility to subscribe to my newsletter. I would also like to send you a to send you a message to remind you of the release of X",
      ink_c_js_container_paragrapheNet: "Here are some social networks where I am present. Let's connect!",              

      //Vêtements
      ink_d_js_sell_icon_title:"Vêtements",
      action_bouton_boutique:"Shop",
      action_bouton_pack:"Pack",
      ink_d_js_sell_paragraphe:"Vous avez la possibilité d'acheter un vêtement avec l'EP. Il existe des forfaits proposés qui rendent les audios gratuits. ",

      //Autre EP
      article_ep:"en",
      article_button:"en",
      article_one_story__title:"en",
      article_two_story__title:"en",
      article_three_story__title:"en",
      article_four_story__title:"en",
      article_one_story__summary:"en",
      article_two_story__summary:"en",
      article_three_story__summary:"en",
      article_four_story__summary:"en",

      //Merci
      ink_f_js_container_thanks:"en",
      ink_f_js_container_subtitle:"en",
      ink_f_js_container_title:"en",
    },

    es: {      
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

      //Social
      ink_c_js_titleNews: "Newsletter",
      ink_c_js_titleNet: "Newsletter",
      action_bouton_souscrire: "Subscribe",
      action_bouton_remind: "Remind me for X",
      ink_c_js_container_paragrapheNews: "you have the possibility to subscribe to my newsletter. I would also like to send you a to send you a message to remind you of the release of X",
      ink_c_js_container_paragrapheNet: "Here are some social networks where I am present. Let's connect!",              

      //Vêtements
      ink_d_js_sell_icon_title:"Vêtements",
      action_bouton_boutique:"Shop",
      action_bouton_pack:"Pack",
      ink_d_js_sell_paragraphe:"Vous avez la possibilité d'acheter un vêtement avec l'EP. Il existe des forfaits proposés qui rendent les audios gratuits. ",

      //Autre EP
      article_ep:"en",
      article_button:"en",
      article_one_story__title:"en",
      article_two_story__title:"en",
      article_three_story__title:"en",
      article_four_story__title:"en",
      article_one_story__summary:"en",
      article_two_story__summary:"en",
      article_three_story__summary:"en",
      article_four_story__summary:"en",

      //Merci
      ink_f_js_container_thanks:"en",
      ink_f_js_container_subtitle:"en",
      ink_f_js_container_title:"en",
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
  const ink_c_js_titleNews = document.querySelector('.ink-c-js-title:nth-of-type(1)')
  const ink_c_js_titleNet = document.querySelector('.ink-c-js-title:nth-of-type(2)')
  const action_bouton_souscrire = document.querySelector('.action-bouton-souscrire')
  const action_bouton_remind = document.querySelector('.action-bouton-remind')
  const ink_c_js_container_paragrapheNews = document.querySelector('.ink-c-js-container:nth-of-type(1) .ink-c-js-container-paragraphe')
  const ink_c_js_container_paragrapheNet = document.querySelector('.ink-c-js-container:nth-of-type(2) .ink-c-js-container-paragraphe')

  //VETEMENTS
  const ink_d_js_sell_icon_title = document.querySelector('.ink-d-js-sell-icon-title')
  const action_bouton_boutique = document.querySelector('.action-bouton-boutique')
  const action_bouton_pack = document.querySelector('.action-bouton-pack')
  const ink_d_js_sell_paragraphe = document.querySelector('.ink-d-js-sell-paragraphe')

  //AUTRE EP
  const article_ep = document.querySelector('.ink-e-js-carousel-container-item .story__category')
  const article_button = document.querySelector('.ink-e-js-carousel-container-item .action-bouton')

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
          action_bouton_vetement.textContent = language[element.id].action_bouton_vetement;
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