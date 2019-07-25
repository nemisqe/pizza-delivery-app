const EventEmitter = require('./ee.js');
const Menu = require('./menu.js');
const inherit = require('./inherit.js');

let _counter = 0;
let orders = [];

const Client = inherit(EventEmitter, {
	constructor: (name) => {
		EventEmitter.apply(this, arguments);
		this.name =  name;
	},
	getRandomName: () => {
	const CLIENT_NAMES = [
			'Vasya',
			'Petya',
			'Kolya',
			'Misha',
			'Roma',
			'Mike',
			'Daniel'
		];
		let getRandomClientName = Math.floor(Math.random()*CLIENT_NAMES.length);
		return randomName = CLIENT_NAMES[getRandomClientName];
},
	createClients: () => {

		let client = new Client();
		let randomPizza = Menu.prototype.getRandomPizza();
		let randomName = client.getRandomName();

		let clientInfo = {
		orderId: ++_counter,
		clientOrder: randomPizza,
		clientName: randomName
		};

		client.on('makeOrder', () => {
		
			orders.push(clientInfo);	
			module.exports.orders = orders;
			
			console.log('Hello ' + clientInfo.clientName + ' . Your order is ' + clientInfo.clientOrder + ' .id - ' + clientInfo.orderId);
		});
		client.emit('makeOrder');

}
});

module.exports = Client;

module.exports.SELF = this;