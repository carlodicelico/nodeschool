function filter(str) {
  return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/'/g, "&#39;")
              .replace(/"/g, "&quot;");
}

function clean(strs, ...subs) {
  var res = strs[0];

  for (var i = 0; i < subs.length; ++i) {
    res += filter(subs[i]) + strs[i+1];
  }

  return res;
}

console.log(clean`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
