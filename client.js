var EventEmitter = require('./ee.js');
var Menu = require('./menu.js');

function Client(name) {
	EventEmitter.apply(this, arguments);
	this.name =  name;
};

Client.prototype = Object.create(EventEmitter.prototype);

Client.prototype.getRandomName = function() {
	var clientsNames = [
			'Vasya',
			'Petya',
			'Kolya',
			'Misha',
			'Roma',
			'Mike',
			'Daniel'
		];
		var getRandomClientName = Math.floor(Math.random()*clientsNames.length);
		return randomName = clientsNames[getRandomClientName];
};

Client.prototype.createClients = function(time=1000) {

	let orders = [];

		let client = new Client();
		let menu = new Menu();
		let randomPizza = Menu.prototype.getRandomPizza();
		let randomName = client.getRandomName();
		let clientOrderId = 0;

		let clientInfo = {
			orderId: function(n) {
				++n;
				return n;
			},
			clientOrder: randomPizza,
			clientName: randomName
		};

		orders.push(clientInfo);
		clientOrderId = clientInfo.orderId(clientOrderId);


		let clientOrderedPizza = orders.map(x => x.clientOrder);
		let clientName = orders.map(x => x.clientName);

	setTimeout(function() {
		client.on('makeAnOrder', function makeClient() {
			console.log('Hello ' + clientName + ' . Your order is ' + clientOrderedPizza);
		});
		client.emit('makeAnOrder');
		client.on('getCoockedOrder', function() {
			setTimeout(function() {
				console.log('Client ' + clientName + '. ' + 'Your order ' + clientOrderedPizza + ' is coocked!');
			}, 2000);
		})
		client.emit('getCoockedOrder');
	}, time);
};

module.exports = Client;