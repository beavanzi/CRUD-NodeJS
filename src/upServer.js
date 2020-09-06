const http = require('./confServer');

const PORT = 5000;
const HOST = '0.0.0.0';

http.listen(PORT, HOST, () => console.log("API rodando. Porta: " + PORT));   