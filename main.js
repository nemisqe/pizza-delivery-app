const EventEmitter = require('./ee.js');
const Client = require('./client.js');
const Menu = require('./menu.js');
const inherit = require('./inherit.js');
const orders = require('./client');
const Chief = require('./chief.js');

let client = new Client();

setInterval(() => client.createClients(), 1000);

let chief = new Chief();

setInterval(() => chief.getCookedOrder(), 5000);