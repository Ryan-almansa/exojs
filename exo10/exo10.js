document.addEventListener("keydown", function(event) {
    const keyBox = document.getElementById("key-box");
    keyBox.textContent = `Touche : ${event.key}`;
    keyBox.style.backgroundColor = "yellow";
    setTimeout(() => {
      keyBox.textContent = "Appuie sur une touche";
      keyBox.style.backgroundColor = "";
    }, 1000);
  });