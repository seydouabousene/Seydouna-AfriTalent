
// 1. DARK MODE avec localStorage un genre de bloc note da,s le navigateur
const darkToggle = document.getElementById('darkToggle');

// Applique le thème sauvegardé au chargement de la page
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkToggle.textContent = '☀️'; // icône soleil en dark mode
} else {
  darkToggle.textContent = '🌙'; // icône lune en light mode
}

// Au clic sur le bouton
darkToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
//   classList.toggle si present supprime si absent ajoute

  if (document.body.classList.contains('dark-mode')) {
    // classList.contains vérifie si la classe est présente après le toggle
    //  pour savoir dans quel sens on vient de basculer.
    localStorage.setItem('theme', 'dark'); // sauvegarde dans localStorage
    darkToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    darkToggle.textContent = '🌙';
  }
});

// 2. NAVBAR DYNAMIQUE AU SCROLL
const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    // L'utilisateur a scrollé de plus de 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 3. BOUTON RETOUR EN HAUT
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    // Apparaît après 300px de scroll
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Remonte en haut au clic
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // défilement fluide
  });
});