const jsonUrl = 'http://192.168.65.113/data.json';

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('json-content').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Erreur de récupération du JSON :', error);
        document.getElementById('json-content').innerText = "Erreur de chargement.";
    });
