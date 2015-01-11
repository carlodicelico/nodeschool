var args = process.argv.slice(2)
  , response = args.map(str => str[0])
                   .reduce((coll, str) => coll + str);

console.log(`[${args}] becomes "${response}"`);
