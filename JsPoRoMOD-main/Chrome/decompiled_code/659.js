var n = {};
module.exports = function (e, t) {
  var c = function (e) {
    if (n[e] === undefined) {
      var t = document.querySelector(e);
      if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
        try {
          t = t.contentDocument.head;
        } catch (c) {
          t = null;
        }
      }
      n[e] = t;
    }
    return n[e];
  }(e);
  if (!c) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  c.appendChild(t);
};