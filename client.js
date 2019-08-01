const EventEmitter = require('./ee.js');
const Menu = require('./menu.js');
const inherit = require('./inherit.js');

let _counter = 0;
let orders = [];

const Client = inherit(EventEmitter, {
	getRandomName: () => {
	const CLIENT_NAMES = [
			'Vasya',
			'Petya',
			'Kolya',
			'Misha',
			'Roma',
			'Mike',
			'Daniel',
			'Zac'
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
			clientOrder: randomPizza.pizza,
			clientName: randomName,
			waitingTime: randomPizza.cookingTime
		};

        client.on('makeOrder', () => {

            orders.push(clientInfo);

            let clientsItem = document.querySelectorAll('.clients-list__item');

                for (let i = 0; i < clientsItem.length; i++) {
                    function showClientsInfo () {
                        clientsItem[i].innerHTML = ('Hello ' + clientInfo.clientName + '. '
                            + 'Your order is '
                            + clientInfo.clientOrder
                            + '. ' + 'Id is ' + clientInfo.orderId + '. ' + 'Please wait '
							 + clientInfo.waitingTime + ' sec.');
					}
                }

            	showClientsInfo();
        });

			client.emit('makeOrder');

}
});

module.exports = Client;
module.exports.orders = orders;


// let showClientsInfo = document.querySelectorAll('.clients-list__item');
// innerHTML = ('Hello ' + clientInfo.clientName + '. '
//     + 'Your order is '
//     + clientInfo.clientOrder
//     + '. ' + 'Id is '
//     + clientInfo.orderId);



// for (let i = 0; i < showClientsInfo.length; i++) {
//     showClientsInfo[i].innerHTML = ('Hello ' + clientInfo.clientName + '. '
//         + 'Your order is '
//         + clientInfo.clientOrder
//         + '. ' + 'Id is '
//         + clientInfo.orderId);
// }