const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Ambiente node.js no Docker!</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Página de contato...</h1>');
});

app.listen(port, () => {
    console.log(`Ouvindo a porta ${port}...`);
});
