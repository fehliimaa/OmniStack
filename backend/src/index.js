const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-kpjw0.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: req-query (são usados para: filtros, ordenação páginação, ...)
// Route Paramns:  resquest.paramns (Identificar um recurso na alteração ou remoção)
// Body: resquest.body (Dados para criaçãoou alteção de um registro)

// MongoDB (Não-relacional)