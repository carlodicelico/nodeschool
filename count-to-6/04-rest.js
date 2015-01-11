module.exports = (...args) => {
  var sum = args.reduce((rest, val) => rest + val, 0);
  return sum / args.length;
};
