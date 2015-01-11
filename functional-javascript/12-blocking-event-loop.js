module.exports = function repeat(op, num) {
    if(num <= 0) return;

    op();

    if(num % 10 === 0) {
        setTimeout(function() {
            repeat(op, --num);
        });
    } else {
        repeat(op, --num);
    }
};
