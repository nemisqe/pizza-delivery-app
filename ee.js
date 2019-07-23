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


module.exports = EventEmitter;