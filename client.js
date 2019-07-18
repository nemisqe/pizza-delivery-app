var EventEmitter = require('./ee.js');

function Client(name) {
	EventEmitter.apply(this, arguments);
	this.name =  name;
};

Client.prototype = Object.create(EventEmitter.prototype);

Client.prototype.getRandomName = function() {
	var clientsNames = [
			'Vasya',
			'Petya',
			'Kolya'
		];
		var getRandomClientName = Math.floor(Math.random()*clientsNames.length);
		return randomName = clientsNames[getRandomClientName];
};

Client.prototype.getRandomPizza = function() {
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara'
	];
	var getRndPizza = Math.floor(Math.random()*pizzaMenu.length);
	return randomPizza = pizzaMenu[getRndPizza];
};

Client.prototype.createClients = function(time=1000) {
	setTimeout(function() {

		var client = new Client();
		let randomPizza = client.getRandomPizza();
		let randomname = client.getRandomName();
		
		client.on('makeAnOrder', function makeClient() {
			console.log('Hello ' + randomname + ' . Your order is ' + randomPizza);
		});
		client.emit('makeAnOrder');
		client.on('getCoockedOrder', function() {
			setTimeout(function() {
				console.log('Client ' + randomname + '. ' + 'Your order ' + randomPizza + ' is coocked!');
			}, 4000);
		})
		client.emit('getCoockedOrder');
	}, time);
};

module.exports = Client;