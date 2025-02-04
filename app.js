const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use (express.json());
 
app.set('view engine', 'ejs');

 
app.get('/', (req, res) => {

    let sms = "Esta é a minha lista:"
    
    res.render("main", {mensagem: sms})
})
 
app.get('/contactos', (req, res) => {
    
    res.render("contacts")
})

app.get('/lista', (req, res) => {

    let name = "Roberto";
    let contasBancarias = ["conta Montepio", "conta Santander", "conta N26"];

    res.render('index', {nameOfTheClient: name, contas: contasBancarias});
})
 
 
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Servidor a correr em https://localhost:${PORT}`);
})
 