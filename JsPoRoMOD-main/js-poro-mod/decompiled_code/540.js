module.exports = function (e) {
  var n = document.createElement("style");
  e.setAttributes(n, e.attributes);
  e.insert(n, e.options);
  return n;
};