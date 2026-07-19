module.exports = function (e, n) {
  if (n.styleSheet) {
    n.styleSheet.cssText = e;
  } else {
    while (n.firstChild) {
      n.removeChild(n.firstChild);
    }
    n.appendChild(document.createTextNode(e));
  }
};
