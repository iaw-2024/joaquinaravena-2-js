let arqueros = ["12. Leandro Brey"]
let defensores = ["42. Lucas Blondel", "38. Aaron Anselmino", "6. Marcos Rojo","23. Lautaro Blanco"]
let mediocampistas = ["21. Equi Fernandez", "47. Jabes Saralegui", "22. Kevin Zenón", "39. Vicente Taborda"]
let delanteros = ["16. Miguel Merentiel", "10. Edinson Cavani"]

const express = require("express");
const app = express();
const path = require('path');
const dir = path.join(__dirname, '..', 'views', 'express');

app.use('/express', express.static(path.join(__dirname, '..', 'views/express')));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', dir);  

app.get('/express/', (req, res) => {
  const data = {
      arqueros: arqueros,
      defensores: defensores,
      mediocampistas: mediocampistas,
      delanteros: delanteros
  };
  res.render('index', data);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
module.exports = app;