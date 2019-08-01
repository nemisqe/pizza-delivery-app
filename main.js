const Client = require('./client.js');
const Chief = require('./chief.js');
const style = require('./css/style.css');
const UI = require('./UI.js');
const orders = require('./client');

let client = new Client();

setInterval(() => client.createClients(), 1000);

let chief = new Chief();

setInterval(() => chief.getCookedOrder(), 5000);