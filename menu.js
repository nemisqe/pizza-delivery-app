var Client = require('./client.js');
var EventEmitter = require('./ee.js');

function Menu() {};

Menu.prototype = Object.create(Client);

Menu.prototype.getRandomPizza = function() {
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara',
	'ШКОЛЬНАЯ'
	];
	var getRndPizza = Math.floor(Math.random()*pizzaMenu.length);
	return randomPizza = pizzaMenu[getRndPizza];
};

function Chief() {
	EventEmitter.apply(this, arguments);
};

module.exports = Menu;