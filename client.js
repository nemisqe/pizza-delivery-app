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
			'Kolya',
			'Misha',
			'Roma'
		];
		var getRandomClientName = Math.floor(Math.random()*clientsNames.length);
		return randomName = clientsNames[getRandomClientName];
};

function Menu() {};

Menu.prototype = Object.create(Client.prototype);

Menu.prototype.getRandomPizza = function() {
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
		let menu = new Menu();
		let randomPizza = Menu.prototype.getRandomPizza();
		let randomName = client.getRandomName();
		
		client.on('makeAnOrder', function makeClient() {
			console.log('Hello ' + randomName + ' . Your order is ' + randomPizza);
		});
		client.emit('makeAnOrder');
		client.on('getCoockedOrder', function() {
			setTimeout(function() {
				console.log('Client ' + randomName + '. ' + 'Your order ' + randomPizza + ' is coocked!');
			}, 4000);
		})
		client.emit('getCoockedOrder');
	}, time);
};

module.exports = Client;