module.exports = function spy(target, method) {
    var original = target[method],
        result = { count: 0 };

    target[method] = function() {
        result.count++;
        return original.apply(this, arguments);
    }

    return result;
};
