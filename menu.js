const Client = require('./client.js');
const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');

const Menu = inherit(EventEmitter, {
	getRandomPizza: function() {

	let pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara',
	'ШКОЛЬНАЯ',
	'Эхо войны'
	];

	let getRndPizza = Math.floor(Math.random()* pizzaMenu.length);

	return randomPizza = pizzaMenu[getRndPizza];
	}
});

module.exports = Menu;