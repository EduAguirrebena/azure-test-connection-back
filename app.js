require('dotenv').config();

const Server = require('./models/server.js');

const serverv = new Server;

serverv.listen();

// console.log('Hello world');