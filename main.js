var EventEmitter = require('./ee.js');
const Client = require('./client.js');
var Menu = require('./menu.js');
var inherit = require('./inherit.js');
const Chief = require('./chief.js');


let client = new Client();

function makeClients() {
	client.createClients();
};

for(var i = 0; i < 4; i++) {
	setTimeout(makeClients, 3000);
};

let chief = new Chief();
chief.getCookedOrder();