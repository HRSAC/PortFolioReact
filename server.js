const express = require('express');
const app = express();
const port = 5000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est lancé sur le port ${port}`);
});