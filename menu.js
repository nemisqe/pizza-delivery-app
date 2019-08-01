const Client = require('./client.js');
const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');

const Menu = inherit(EventEmitter, {
	getRandomPizza: function() {
	let pizzaMenu = [
		{
			pizza: 'Margherita',
			cookingTime: 12
		},
		{
			pizza: 'Marinara',
			cookingTime: 8
		},
		{
            pizza: 'Frutti di Mare',
			cookingTime: 15
		},
		{
			pizza: 'Carbonara',
			cookingTime: 10
		},
		{
			pizza: 'ШКОЛЬНАЯ',
			cookingTime: 6
		},
		{
			pizza: 'Crudo',
			cookingTime: 20
		}
	];

	let getRndPizza = Math.floor(Math.random()* pizzaMenu.length);

	return randomPizza = pizzaMenu[getRndPizza];
	}
});

module.exports = Menu;

// let pizzaMenu = [
//     'Margherita',
//     'Marinara',
//     'Frutti di Mare',
//     'Carbonara',
//     'ШКОЛЬНАЯ',
//     'Эхо войны'
// ];