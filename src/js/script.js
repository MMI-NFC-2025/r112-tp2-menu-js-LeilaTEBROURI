// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.

toggle.addEventListener("click", () => {
  const isHidden = nav.getAttribute('aria-hidden') === 'true'; // 

  nav.setAttribute('aria-hidden', !isHidden);

  toggle.setAttribute('aria-expanded', isHidden);

  document.body.classList.toggle('noscroll', isHidden);
});


