module.exports = function (e) {
  var n = require.nc;
  if (n) {
    e.setAttribute("nonce", n);
  }
};
