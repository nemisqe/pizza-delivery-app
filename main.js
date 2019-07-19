var EventEmitter = require('./ee.js');
var Client = require('./client.js');
var Menu = require('./menu.js');



var client = new Client();
client.createClients();

var client2 = new Client();
client2.createClients();