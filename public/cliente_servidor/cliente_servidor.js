window.onload = function() {
    fetch('/arqueros')
        .then(response => response.json())
        .then(data => {
            const listaArqueros = document.getElementById('arqueros');
            data.arqueros.forEach(arquero => { 
                const listItem = document.createElement('li'); 
                listItem.textContent = arquero; 
                listaArqueros.appendChild(listItem); 
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del servidor:', error);
        });
    fetch('/defensores')
        .then(response => response.json())
        .then(data => {
            const listaDefensores = document.getElementById('defensores');
            data.defensores.forEach(defensor => { 
                const listItem = document.createElement('li'); 
                listItem.textContent = defensor; 
                listaDefensores.appendChild(listItem); 
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del servidor:', error);
        });

    fetch('/mediocampistas')
        .then(response => response.json())
        .then(data => {
            const listaMediocampistas = document.getElementById('mediocampistas');
            data.mediocampistas.forEach(mediocampista => { 
                const listItem = document.createElement('li'); 
                listItem.textContent = mediocampista; 
                listaMediocampistas.appendChild(listItem); 
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del servidor:', error);
        });
    
    fetch('/delanteros')
        .then(response => response.json())
        .then(data => {
            const listaDelanteros = document.getElementById('delanteros');
            data.delanteros.forEach(delantero => { 
                const listItem = document.createElement('li'); 
                listItem.textContent = delantero; 
                listaDelanteros.appendChild(listItem); 
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del servidor:', error);
        });
};
