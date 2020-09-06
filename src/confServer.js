const express = require('express');
const http = express();
const routes = require('./routes/developers')

http.use(express.json());
http.use(routes);

module.exports = http;