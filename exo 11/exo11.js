const jsonUrl = 'exo11.json';

function getData(){
    fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('json-content').innerText = data.menu;
    })
    .catch(error => {
        console.error('Erreur de récupération du JSON :', error);
        document.getElementById('json-content').innerText = "Looseur";
    });
}

    setTimeout(() => {
        

        getData();


      }, "2500");
