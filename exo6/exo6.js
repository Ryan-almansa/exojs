let input = prompt("Entrez un nombre entier positif :");

if (input !== null) { 
    let N = parseInt(input); 

    if (isNaN(N) || N <= 0) { // Vérifier si l'entrée est valide
        alert("Veuillez entrer un nombre entier positif !");
    } else {
        // Initialiser la somme
        let somme = 0;
        for (let i = 1; i <= N; i++) {
            somme += i;
        }
        alert("La somme des nombres de 1 à " + N + " est : " + somme);
    }
} else {
    alert("Vous avez annulé ou rien saisi !");
}
