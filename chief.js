const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');
const orders = require('./client.js');
const client = require('./client.js');

const Chief = inherit(EventEmitter, {

	getCookedOrder: () => {

	    let arrId = orders.orders.map(x => x.orderId);

        let showCookedOrders = () => {
            if (arrId.length !== 0) {
                (function() {
                    console.log(arrId);
                    console.log(arrId[0]);
                    orders.orders.shift();
                })();
            }

            arrId.shift();
        };

        showCookedOrders();

        // let showCookedOrders = (index) => {
        //     if(arrId.length > index) {
        //
        //         setTimeout(() => {
        //             console.log('current id is ' + arrId[index]);
        //             showCookedOrders(++index);
        //
        //         }, 2000);
        //     }
        // };
        //
        // showCookedOrders(0);
    }

});

module.exports = Chief;