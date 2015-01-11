module.exports = function logger(namespace) {
    var slice = Array.prototype.slice;
    return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
    };
};
