// Fonction addition qui retourne la somme de deux paramètres
function addition(a, b) {
    return a + b;
}

// Demander à l'utilisateur d'entrer un nombre entier
let input = prompt("Entrez un nombre entier positif :");

if (input !== null) { 
    let N = parseInt(input); 

    if (isNaN(N) || N <= 0) { // Vérifier si l'entrée est valide
        alert("Veuillez entrer un nombre entier positif !");
    } else {
        // Initialiser la somme
        let somme = 0;

        // Utilisation de la fonction addition dans la boucle
        for (let i = 1; i <= N; i++) {
            somme = addition(somme, i); // Appel de la fonction addition
        }

        // Afficher le résultat
        alert("La somme des nombres de 1 à " + N + " est : " + somme);
    }
} else {
    alert("Vous avez annulé ou rien saisi !");
}
