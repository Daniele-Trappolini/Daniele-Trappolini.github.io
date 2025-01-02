document.addEventListener('DOMContentLoaded', function () {
  // Controlla se la modalità dark è salvata nel localStorage
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Crea il pulsante per il toggle della dark mode
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('toggle-dark-mode', 'btn', 'btn-secondary'); // Aggiungi classi di stile
  toggleButton.innerText = '🌙 Dark Mode'; // Testo e icona iniziale

  // Trova la navbar o l'header e aggiungi il pulsante
  const navbar = document.querySelector('.navbar') || document.querySelector('header');
  if (navbar) {
    navbar.appendChild(toggleButton);
  } else {
    // Se non c'è una navbar o un header, aggiungilo al body
    document.body.appendChild(toggleButton);
  }

  // Aggiungi l'evento di toggle al pulsante
  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      toggleButton.innerText = '☀️ Light Mode'; // Cambia il testo e l'icona
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      toggleButton.innerText = '🌙 Dark Mode'; // Cambia il testo e l'icona
    }
  });
});
