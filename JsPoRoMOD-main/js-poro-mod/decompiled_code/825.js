module.exports = function (e) {
  if (typeof document == "undefined") {
    return {
      update: function () {},
      remove: function () {},
    };
  }
  var n = e.insertStyleElement(e);
  return {
    update: function (t) {
      (function (e, n, t) {
        var c = "";
        if (t.supports) {
          c += `@supports (${t.supports}) {`;
        }
        if (t.media) {
          c += `@media ${t.media} {`;
        }
        var o = t.layer !== undefined;
        if (o) {
          c += `@layer${t.layer.length > 0 ? ` ${t.layer}` : ""} {`;
        }
        c += t.css;
        if (o) {
          c += "}";
        }
        if (t.media) {
          c += "}";
        }
        if (t.supports) {
          c += "}";
        }
        var O = t.sourceMap;
        if (O && typeof btoa != "undefined") {
          c += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(O))))} */`;
        }
        n.styleTagTransform(c, e, n.options);
      })(n, e, t);
    },
    remove: function () {
      (function (e) {
        if (e.parentNode === null) {
          return false;
        }
        e.parentNode.removeChild(e);
      })(n);
    },
  };
};
