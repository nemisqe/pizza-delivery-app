const Client = require('./client.js');
const Chief = require('./chief.js');

let client = new Client();

setInterval(() => client.createClients(), 1000);

let chief = new Chief();

setInterval(() => chief.getCookedOrder(), 5000);