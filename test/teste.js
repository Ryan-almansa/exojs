// Fonction pour afficher des pop-ups aléatoires
function randomPopUp() {
    const messages = ["Coucou !", "Zinzin Time!", "Attention !", "T'es prêt ?", "BOUM !"];
    alert(messages[Math.floor(Math.random() * messages.length)]);
  }
  
  // Faire apparaître des pop-ups toutes les 5 secondes
  setInterval(randomPopUp, 5000);
  
  // Générer des boîtes folles
  function createCrazyBox() {
    const box = document.createElement('div');
    box.className = 'crazy-box';
    document.body.appendChild(box);
  
    // Position aléatoire
    box.style.top = Math.random() * window.innerHeight + 'px';
    box.style.left = Math.random() * window.innerWidth + 'px';
  
    // Supprimer la boîte après 5 secondes
    setTimeout(() => box.remove(), 5000);
  }
  
  // Faire apparaître des boîtes toutes les 2 secondes
  setInterval(createCrazyBox, 2000);
  
  // Changer la couleur de fond de manière aléatoire toutes les secondes
  setInterval(() => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }, 1000);
  
  // Ajouter un son zinzin à chaque clic sur le bouton
  const button = document.getElementById('crazy-button');
  button.addEventListener('click', () => {
    alert("Pourquoi tu as cliqué ?!");
    for (let i = 0; i < 5; i++) {
      createCrazyBox();
    }
    // Jouer un son
    const audio = new Audio('https://www.soundjay.com/button/beep-09.wav');
    audio.play();
  });
  
  // Générer des messages aléatoires sur l'écran
  function randomMessage() {
    const message = document.createElement('div');
    message.textContent = "ZINZIN !!!";
    message.style.position = 'absolute';
    message.style.fontSize = '2rem';
    message.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    message.style.top = Math.random() * window.innerHeight + 'px';
    message.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(message);
  
    // Supprimer le message après 3 secondes
    setTimeout(() => message.remove(), 3000);
  }
  
  // Faire apparaître des messages toutes les 3 secondes
  setInterval(randomMessage, 3000);
  