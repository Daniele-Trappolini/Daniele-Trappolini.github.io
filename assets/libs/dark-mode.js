document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-dark-mode');
    toggleButton.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
    });
  });
  