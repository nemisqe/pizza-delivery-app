const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');
const client = require('./client.js');
const orders = require('./client.js');

const Chief = inherit(EventEmitter, {
	getCookedOrder: () => {

		let arrId = orders.orders.map(f => f.orderId);

		let showCookedOrders = (index) => {
			if(arrId.length > index) {
				
				setTimeout(() => {
					console.log('current id is ' + arrId[index]);
					showCookedOrders(++index);

				}, 2000);
			}
		};

		showCookedOrders(0);
		}
	});

module.exports = Chief;