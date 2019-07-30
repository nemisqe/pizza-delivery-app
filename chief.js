const EventEmitter = require('./ee.js');
const inherit = require('./inherit.js');
const orders = require('./client.js');

const Chief = inherit(EventEmitter, {

	getCookedOrder: () => {

	    let arrId = orders.orders.map(x => x.orderId);
        let chiefItems = document.querySelectorAll('.chiefs-list__item');

        for (let i = 0; i < chiefItems.length; i++) {
            function showCookedOrders () {
                chiefItems[i].innerHTML = ('Order ' + arrId[0] + ' is cooked!');
                orders.orders.shift();
            }
        }

        showCookedOrders();

    }
});

module.exports = Chief;



// let showCookedOrders = () => {
//     if (arrId.length !== 0) {
//         (function() {
//             chiefItems.innerHTML = ('Order ' + arrId[0] + ' is cooked!');
//             orders.orders.shift();
//         })();
//     }
//
// };
//
// showCookedOrders();