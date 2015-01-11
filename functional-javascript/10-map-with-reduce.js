module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, item, index, arr) {
        return acc.concat(fn(item, index, arr));
    }, []);
};
