// Demander à l'utilisateur d'entrer un nombre entier
let input = prompt("Entrez un nombre entier positif :");

if (input !== null) { // Vérifier que l'utilisateur n'a pas annulé
    let N = parseInt(input); // Convertir l'entrée en entier

    if (isNaN(N) || N <= 0) { // Vérifier si l'entrée est valide
        alert("Veuillez entrer un nombre entier positif !");
    } else {
        // Initialiser la somme
        let somme = 0;

        // Boucle pour calculer la somme
        for (let i = 1; i <= N; i++) {
            somme += i;
        }

        // Afficher le résultat
        alert("La somme des nombres de 1 à " + N + " est : " + somme);
    }
} else {
    alert("Vous avez annulé ou rien saisi !");
}
