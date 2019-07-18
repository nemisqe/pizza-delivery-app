function EventEmitter() {
  this.cb = {};
};

EventEmitter.prototype.on = function(eventName, listener) {
    if(!this.cb[eventName]) {
      this.cb[eventName] = [];
    }
    this.cb[eventName].push(listener);
};

EventEmitter.prototype.emit = function(event, properties) {
    const someEvent = this.cb[event];
    if(someEvent) {
      someEvent.forEach(function(listener){
        listener(properties)
      });
  };
};

function Client(name) {
	EventEmitter.apply(this, arguments);
	this.name =  name;
};

Client.prototype = Object.create(EventEmitter.prototype);

Client.prototype.getRandomName = function() {
	var clientsNames = [
			'Vasya',
			'Petya',
			'Kolya'
		];
		var getRandomClientName = Math.floor(Math.random()*clientsNames.length);
		return randomName = clientsNames[getRandomClientName];
};

Client.prototype.getRandomPizza = function() {
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara'
	];
	var getRndPizza = Math.floor(Math.random()*pizzaMenu.length);
	return randomPizza = pizzaMenu[getRndPizza];
};

Client.prototype.createClients = function(time=1000) {
	setTimeout(function() {

		var client = new Client();
		let randomPizza = client.getRandomPizza();
		
		client.on('makeAnOrder', function makeClient() {
			console.log('Hello ' + client.getRandomName() + ' . Your order is ' + randomPizza);
		});
		client.emit('makeAnOrder');
		client.on('getCoockedOrder', function() {
			setTimeout(function() {
				console.log('Your order ' + randomPizza + ' is coocked!');
			}, 4000);
		})
		client.emit('getCoockedOrder');
}, time);
};

var client = new Client();
client.createClients(2000);