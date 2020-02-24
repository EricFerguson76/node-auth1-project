const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.send(`<h3>Authentication<h3>`);
});

module.exports = server;
