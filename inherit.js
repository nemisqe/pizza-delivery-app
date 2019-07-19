function inherit(parent, child) {
    var f = function() { 
        parent.apply(this, arguments);
        child.apply(this, arguments);
    };
    f.__proto__ = parent;
    Object.keys(child).forEach(function _copy(key) {
        f[key] = child[key];
    });
    return f;
};

function inherit(BaseClass, proto) {
    const { constructor, ...prototype } = proto;
    function childConstructor() {
        BaseClass.apply(this, arguments);
        constructor.apply(this, arguments);
    }

    childConstructor.prototype = Object.create(BaseClass.prototype);
    childConstructor.prototype.constructor = constructor;

    for (let method in prototype) {
        childConstructor.prototype[method] = prototype[method];
    }

    return childConstructor;
};

module.exports = inherit;