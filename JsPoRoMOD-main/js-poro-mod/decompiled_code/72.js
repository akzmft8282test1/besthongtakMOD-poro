var n = [];
function t(e) {
  var t = -1;
  for (var c = 0; c < n.length; c++) {
    if (n[c].identifier === e) {
      t = c;
      break;
    }
  }
  return t;
}
function c(e, c) {
  var O = {};
  var C = [];
  for (var h = 0; h < e.length; h++) {
    var l = e[h];
    var s = c.base ? l[0] + c.base : l[0];
    var E = O[s] || 0;
    var a = `${s} ${E}`;
    O[s] = E + 1;
    var r = t(a);
    var A = {
      css: l[1],
      media: l[2],
      sourceMap: l[3],
      supports: l[4],
      layer: l[5]
    };
    if (r !== -1) {
      n[r].references++;
      n[r].updater(A);
    } else {
      var L = o(A, c);
      c.byIndex = h;
      n.splice(h, 0, {
        identifier: a,
        updater: L,
        references: 1
      });
    }
    C.push(a);
  }
  return C;
}
function o(e, n) {
  var t = n.domAPI(n);
  t.update(e);
  return function (n) {
    if (n) {
      if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) {
        return;
      }
      t.update(e = n);
    } else {
      t.remove();
    }
  };
}
module.exports = function (e, o) {
  var O = c(e = e || [], o = o || {});
  return function (e) {
    e = e || [];
    for (var C = 0; C < O.length; C++) {
      var h = t(O[C]);
      n[h].references--;
    }
    var l = c(e, o);
    for (var s = 0; s < O.length; s++) {
      var E = t(O[s]);
      if (n[E].references === 0) {
        n[E].updater();
        n.splice(E, 1);
      }
    }
    O = l;
  };
};