function checkWindowSize() {
    if (window.innerWidth < 700) {
      alert("Attention ! La largeur de la fenêtre est inférieure à 700 pixels.");
    }
  }
  
  checkWindowSize();
  
  window.addEventListener("resize", checkWindowSize);
  