const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');
const mysqli = require('mysql2');
 
app.use (express.json());
 
app.set('view engine', 'ejs');
 
 
 
app.get('/', (req, res) => {
    let teste = "Hello World";
    res.render('index', { mensagem: teste});
})
 
 
 
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor a correr em https://localhost:${PORT}`);
})
 