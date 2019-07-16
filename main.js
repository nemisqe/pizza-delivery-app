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

var client = new Client('Vasya');
client.on('makeOrder', function(name) {
	var pizzaMenu = [
	'Margherita',
	'Marinara',
	'Frutti di Mare',
	'Carbonara'
	];

	var getRandomPizza = Math.floor(Math.random()*pizzaMenu.length);
	return (console.log('Client ' + name + ' made an order on ' + pizzaMenu[getRandomPizza] + ' pizza. Please wait'));
});
client.emit('makeOrder', 'Vasya');