module.exports = function repeat(op, num) {
    if(num === 0 ) return;
    op();
    return repeat(op, num - 1);
};

