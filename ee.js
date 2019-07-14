function EventEmitter() {
  this.cb = {};

  this.on = function(eventName, listener) {
    if(!this.cb[eventName]) {
      this.cb[eventName] = [];
    }
    this.cb[eventName].push(listener);
  }

  this.emit = function(event, properties) {
    const someEvent = this.cb[event];
    if(someEvent) {
      someEvent.forEach(function(listener){
        listener(properties)
      });
    }
  };
};

module.exports = EventEmitter;