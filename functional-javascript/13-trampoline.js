function repeat(op, num) {
    return function() {
        if(num <= 0) return;
        op();
        return repeat(op, --num);
    }
}

function trampoline(fn) {
    while(fn && typeof fn === 'function') {
        fn = fn();
    }
}
module.exports = function(op, num) {
    trampoline(function() {
        return repeat(op, num);
    });
};
