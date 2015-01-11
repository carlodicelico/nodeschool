var nums = process.argv.slice(2),
  response = Math.min(...nums);

console.log(`The minimum of [${nums}] is ${response}`);
