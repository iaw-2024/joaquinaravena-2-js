const express = require("express");
const app = express();

app.use(express.static('public'))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
module.exports = app;