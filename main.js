const EventEmitter = require('./ee.js');
const Client = require('./client.js');
const Menu = require('./menu.js');
const inherit = require('./inherit.js');
const Chief = require('./chief.js');

let client = new Client();
client.createClients();

let chief = new Chief();
chief.getCookedOrder();