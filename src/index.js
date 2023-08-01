const express = require('express');
const { filtrarCarros, encontrarUmCarro } = require('./controladores/carros');
const { validarSenha } = require('./intermediarios');

const app = express();

app.use(validarSenha);

app.get('/carros', filtrarCarros)
app.get('/carros/:id', encontrarUmCarro)

app.listen(3000);