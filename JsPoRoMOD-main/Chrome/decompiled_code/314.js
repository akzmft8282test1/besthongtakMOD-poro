module.exports = function (e) {
  var n = [];
  n.toString = function () {
    return this.map(function (n) {
      var t = "";
      var c = n[5] !== undefined;
      if (n[4]) {
        t += `@supports (${n[4]}) {`;
      }
      if (n[2]) {
        t += `@media ${n[2]} {`;
      }
      if (c) {
        t += `@layer${n[5].length > 0 ? ` ${n[5]}` : ""} {`;
      }
      t += e(n);
      if (c) {
        t += "}";
      }
      if (n[2]) {
        t += "}";
      }
      if (n[4]) {
        t += "}";
      }
      return t;
    }).join("");
  };
  n.i = function (e, t, c, o, O) {
    if (typeof e == "string") {
      e = [[null, e, undefined]];
    }
    var C = {};
    if (c) {
      for (var h = 0; h < this.length; h++) {
        var l = this[h][0];
        if (l != null) {
          C[l] = true;
        }
      }
    }
    for (var s = 0; s < e.length; s++) {
      var E = [].concat(e[s]);
      if (!c || !C[E[0]]) {
        if (O !== undefined) {
          if (E[5] !== undefined) {
            E[1] = `@layer${E[5].length > 0 ? ` ${E[5]}` : ""} {${E[1]}}`;
          }
          E[5] = O;
        }
        if (t) {
          if (E[2]) {
            E[1] = `@media ${E[2]} {${E[1]}}`;
            E[2] = t;
          } else {
            E[2] = t;
          }
        }
        if (o) {
          if (E[4]) {
            E[1] = `@supports (${E[4]}) {${E[1]}}`;
            E[4] = o;
          } else {
            E[4] = `${o}`;
          }
        }
        n.push(E);
      }
    }
  };
  return n;
};