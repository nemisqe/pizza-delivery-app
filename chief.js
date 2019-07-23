const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');
const client = require('./client.js');
const orders = require('./client.js');

const Chief = inherit(EventEmitter, {
	getCookedOrder: function() {
		setTimeout(function() {
			var id = orders.orders.map(x => x.orderId)
			while(id[0]) {
				console.log('current id is ' + id[0]);
				id.shift();
			}; 
		}, 4000);	
}
});

module.exports = Chief;