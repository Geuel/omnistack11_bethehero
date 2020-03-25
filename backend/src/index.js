const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // Adicionar o endereço que poderá acessar nossa aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);
