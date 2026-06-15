
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

// commit7_____________________________________________________________________________________________________________________
// PARTIE 1 — FADE IN

const sections = document.querySelectorAll('.fade-section');
// cree un observateur pour surveillez les section
const surveillant = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
// je lui demande quoi surveiller
sections.forEach(function(section) {
    // surville cette section
  surveillant.observe(section); 

});

// PARTIE 2 — COMPTEUR SIMPLE

function compter(id, but) {
  const span = document.getElementById(id);
  if (!span) return; // si le span n'existe pas → stop

  let chiffre = 0;
  const vitesse = but / 100;
//   on divise le total en 100petit pat 

  const intervalle = setInterval(function() {
    // repete cette action
    chiffre += vitesse;
    // ajoute un pas 
    span.textContent = Math.round(chiffre);
    // affiche le chiffre darkTogglens le span 

    if (chiffre >= but) {
      span.textContent = but.toLocaleString();
           // Quand on arrive au but → affiche le vrai chiffre
      clearInterval(intervalle);
    }
  }, 20);
}


// PARTIE 3 — DÉCLENCHE AU SCROLL
// pour surveillez les section stats
const sectionStats = document.querySelector('.cole');
const surveillantStats = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {

    // Lance les compteurs index.html
    compter('count-freelances', 2500);
    compter('count-entreprises', 800);
    compter('count-missions', 12000);
    // arrete de surveiller
    surveillantStats.unobserve(entries[0].target);
  }
});

if (sectionStats) surveillantStats.observe(sectionStats);

// MÊME CHOSE POUR ABOUT.HTML

const sectionChiffres = document.querySelector('.cont');

const surveillantChiffres = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {

    compter('count-users', 48000);
    compter('count-years', 7);
    compter('count-projets', 320);
    compter('count-satisfaits', 98);

    surveillantChiffres.unobserve(entries[0].target);
  }
});

if (sectionChiffres) surveillantChiffres.observe(sectionChiffres);
