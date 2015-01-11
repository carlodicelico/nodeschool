module.exports = (str = "Hi", times = str.length) => {
  return str + "!".repeat(times);
};
