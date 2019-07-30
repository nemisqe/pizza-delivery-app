const Client = require('./client.js');
const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');

const Menu = inherit(EventEmitter, {
	getRandomPizza: function() {
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara',
	'ШКОЛЬНАЯ',
	'Эхо войны'
	];
	var getRndPizza = Math.floor(Math.random()* pizzaMenu.length);

	return randomPizza = pizzaMenu[getRndPizza];
	}
});

module.exports = Menu;