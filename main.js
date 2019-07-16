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

function getRandomPizza() {
	Client.apply(this, arguments);
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara'
	];
	var getRndPizza = Math.floor(Math.random()*pizzaMenu.length);
	this.randomPizza = pizzaMenu[getRndPizza];
	console.log('Client ' + this.name + ' made an order on ' + randomPizza + ' pizza.');
};

var client = new Client('Vasya');

client.on('makeOrder', getRandomPizza);
client.emit('makeOrder', client.name);

client.on('giveOrder', function() {
	console.log('Your order is processing');
	var coockingOrder = new EventEmitter();
	coockingOrder.on('coockingPizza', function() {
		console.log('Pizza ' + this.randomPizza + ' will be coocked soon');
	});
	coockingOrder.emit('coockingPizza', 'Margherita');
});

client.on('orderEvent');
client.emit('giveOrder');