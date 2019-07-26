const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');
const orders = require('./client.js');

const Chief = inherit(EventEmitter, {

	getCookedOrder: () => {

	    let arrId = orders.orders.map(x => x.orderId);

        let showCookedOrders = () => {
            if (arrId.length !== 0) {
                (function() {
                    console.log('Order ' + arrId[0] + ' is cooked!');
                    orders.orders.shift();
                })();
            }

        };

        showCookedOrders();
    }

});

module.exports = Chief;