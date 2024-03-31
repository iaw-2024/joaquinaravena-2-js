const express = require('express');
const app = express();
const port = 3002;
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


// Datos del servidor

let arqueros = ["12. Leandro Brey"]
let defensores = ["42. Lucas Blondel", "38. Aaron Anselmino", "6. Marcos Rojo","23. Lautaro Blanco"]
let mediocampistas = ["21. Equi Fernandez", "47. Jabes Saralegui", "22. Kevin Zenón", "39. Vicente Taborda"]
let delanteros = ["16. Miguel Merentiel", "10. Edinson Cavani"]

app.get('/arqueros', (req, res) => {
    res.json({ arqueros });
  });

app.get('/defensores', (req, res) => {
    res.json({ defensores });
  });

app.get('/mediocampistas', (req, res) => {
    res.json({ mediocampistas });
  });

app.get('/delanteros', (req, res) => {
    res.json({ delanteros });
  });
  

