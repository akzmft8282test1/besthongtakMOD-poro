(function (e, n) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = n();
  } else if (typeof define == "function" && define.amd) {
    define([], n);
  } else if (typeof exports == "object") {
    exports.PokeRogueMOD = n();
  } else {
    e.PokeRogueMOD = n();
  }
})(this, () =>
  (() => {
    "use strict";

    var e = {
      828: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "#accountScreen {\n    flex: 1;\n    flex-direction: column;\n}\n\n.input-table {\n    border-collapse: collapse;\n    border-spacing: 0 4px; /* Add 4px spacing between rows */\n}\n\n.input-row {\n    display: table-row;\n    height: 40px; /* Adjust height to ensure proper vertical alignment */\n}\n\n.label-cell,\n.checkbox-cell {\n    padding: 8px;\n    border: none;\n    vertical-align: middle !important; /* Vertically center the content */\n}\n\n.label-cell {\n    text-align: left; /* Align the text label to the left */\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.checkbox-cell {\n    text-align: center;\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.roll-button {\n    color: #e0681a;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 0px 2px;\n    font-weight: bold;\n    border: 1px solid #e0681a;\n    margin-top: 4px;\n    flex: 1;\n}\n\nbutton {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #e0681a;\n    color: black;\n    cursor: pointer;\n    height: 36px; /* Set consistent height for inputs and buttons */\n    box-sizing: border-box; /* Ensure padding and border are included in height */\n}\n\n\n.main-dropdown {\n    min-width: 300px !important;\n}\n\n/* Ensure item tier select option is visible */\n",
          "",
        ]);
        const h = C;
      },
      20: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          '/* actions.css */\n.action-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background: transparent;\n    border: none;\n    outline: none;\n    height: 48px; /* Same height as logo */\n    color: #e0681a;\n    padding: 4px;\n    transition: background-color 0.3s; /* Optional for smooth transitions */\n}\n\n/* Prevent background color change on click */\n.action-toggle:active {\n    background: transparent; /* Ensure background remains transparent */\n}\n\n/* If you want to prevent focus outline on click */\n.action-toggle:focus {\n    outline: none; /* Prevents focus outline */\n}\n\n/* Ensure hover state also remains transparent */\n.action-toggle:hover {\n    background: transparent;\n}\n\n.feature-buttons {\n    display: none;\n    flex-direction: row;\n    gap: 6px;\n    align-items: center;\n    justify-content: flex-start; /* Align buttons to the left */\n}\n\n.feature-buttons-cell {\n    text-align: left !important;\n    vertical-align: middle !important;\n}\n\n.feature-buttons.active {\n    display: flex;\n}\n\n.icon-button,\n.social-button {\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 1px solid #e0681a;\n    backdrop-filter: blur(3px);\n    border-radius: 50%;\n    padding: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    transition: background-color 0.3s; /* Add transition for smooth background change */\n}\n\n.icon-button .material-icons-outlined,\n.social-button .material-icons-outlined {\n    color: #e0681a;\n}\n\n.icon-button .tooltip,\n.social-button .tooltip {\n    visibility: hidden;\n    width: 80px;\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 1px solid #e0681a;\n    backdrop-filter: blur(3px);\n    color: #e0681a;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -40px;\n    opacity: 0;\n    transition: opacity 0.3s;\n}\n\n.icon-button .tooltip::after,\n.social-button .tooltip::after {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: black transparent transparent transparent;\n}\n\n.icon-button:hover .tooltip,\n.social-button:hover .tooltip {\n    visibility: visible;\n    opacity: 1;\n}\n\n/* Ensure hover and active state also remains transparent */\n.icon-button:hover, \n.icon-button:active,\n.social-button:hover, \n.social-button:active {\n    background: rgba(0, 0, 0, 0.8);\n}\n\n.icon-button.selected {\n    background-color: rgba(224, 104, 26, 0.8);\n}\n\n.icon-button.selected .material-icons-outlined {\n    color: #000;\n}\n',
          "",
        ]);
        const h = C;
      },
      791: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "/* base-layout.css */\n.container {\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 1px solid #e0681a;\n    border-radius: 12px;\n    padding: 8px;\n    backdrop-filter: blur(3px);\n    font-size: 14px !important;\n    margin: 0 !important;\n    width: auto !important;\n}\n\n.input-row,\n.button-row {\n    margin-bottom: 15px;\n}\n\nbutton {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #e0681a;\n    color: black;\n    cursor: pointer;\n}\n\n",
          "",
        ]);
        const h = C;
      },
      114: (e, n, t) => {
        t.d(n, {
          A: () => U,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O);
        var h = t(227);
        var l = t(20);
        var s = t(516);
        var E = t(791);
        var a = t(611);
        var r = t(828);
        var A = t(112);
        var L = t(614);
        var I = t(283);
        var i = t(24);
        var w = t(596);
        var R = t(304);
        var N = t(316);
        var K = C()(o());
        K.i(h.A);
        K.i(l.A);
        K.i(s.A);
        K.i(E.A);
        K.i(a.A);
        K.i(r.A);
        K.i(A.A);
        K.i(L.A);
        K.i(I.A);
        K.i(i.A);
        K.i(w.A);
        K.i(R.A);
        K.i(N.A);
        K.i(I.A);
        K.push([e.id, "", ""]);
        const U = K;
      },
      227: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);",
        ]);
        C.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0);",
        ]);
        C.push([
          e.id,
          '/* Import Roboto font */\n\n/* Apply Roboto font to the whole overlay and toasts */\n\n.popup-container,\n.toast {\n    font-family: "Roboto", sans-serif !important;\n}\n.toast {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.5) !important;\n    border: 1px solid #e0681a;\n    border-radius: 99px !important;\n    padding: 4px;\n    margin: 4px;\n    align-content: center;\n    z-index: 9999 !important;\n    pointer-events: none;\n    display: flex !important;\n    flex-direction: row !important;\n    flex: 0 !important;\n    font-size: 14px !important;\n    margin: 0px 8px !important;\n    margin-top: 0px !important;\n    justify-content: center !important;\n}\n\n/* Ensure toast container is fixed at the bottom */\n#toast-container {\n    top: auto !important;\n    right: auto !important;\n    bottom: 0% !important;\n    right: 0% !important;\n    z-index: 9998 !important;\n    max-height: 25% !important;\n    min-width: 100% !important;\n    max-width: 100% !important;\n    gap: 4px !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-content: center !important;\n    overflow: hidden;\n}\n\n.popup-container {\n    position: fixed;\n    top: 0%;\n    left: 0%;\n    z-index: 10000 !important;\n    display: flex !important;\n    flex-direction: column;\n    align-items: flex-start;\n    flex: 1; /* or another suitable flex value */\n}\n\n.popup-table {\n    border-collapse: collapse;\n    width: auto;\n}\n\n.popup-table td {\n    padding: 0;\n    /* border: none; */\n    vertical-align: top;\n    /* Align cells to the top */\n    text-align: center;\n}\n\n.logo-cell {\n    width: 48px;\n    height: 48px;\n    vertical-align: middle;\n    /* Align the logo cell vertically */\n}\n\n.action-toggle-cell {\n    width: auto;\n    vertical-align: middle;\n    /* Align the action toggle cell vertically */\n}\n\n.feature-buttons-cell {\n    text-align: left;\n    /* Align the feature buttons cell to the left */\n    vertical-align: middle;\n    /* Vertically center the feature buttons cell */\n}\n\n.social-cell {\n    width: 48px;\n    vertical-align: top;\n    /* Align the social cell to the top */\n}\n\n.settings-cell {\n    width: auto;\n    text-align: left;\n    /* Align the settings cell to the left */\n    vertical-align: top;\n    /* Align the settings cell to the top */\n    display: none;\n    /* Hide settings cell by default */\n}\n\n/* Logo styles */\n\n.logo {\n    /* background-color: rgba(0, 0, 0, 0.5); */\n    /* border: 2px solid #e0681a; */\n    /* backdrop-filter: blur(3px); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border-radius: 50%; */\n    width: 48px;\n    height: 48px;\n    cursor: grab;\n    user-select: none;\n}\n\n.logo img {\n    width: 48px;\n    height: 48px;\n    pointer-events: none;\n}\n\n#settingsContainer {\n    flex: 1;\n}\n\n#layoutContainer {\n    display: flex;\n    flex: 1;\n}\n\n.ele-container {\n    display: flex;\n    flex: 1;\n}\n\n.set-button {\n    flex-shrink: 0;\n    padding: 4px;\n    background-color: rgba(0, 0, 0, 0);\n    color: #e0681a;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    max-width: 18px;\n    max-height: 18px;\n    justify-content: center;\n}\n\n.flex-end {\n    display: flex;\n}\n\n.flex-lock {\n    display: flex;\n    flex: 0;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.input-cell {\n    display: contents;\n    align-items: center;\n    gap: 4px; /* Space between inputs and buttons */\n    vertical-align: middle; /* Vertically center the input cell */\n}\n\n/* Prevent elements from being highlighted */\n\n* {\n    -webkit-tap-highlight-color: transparent;\n}\n\ntr {\n    border: none !important;\n}',
          "",
        ]);
        const h = C;
      },
      611: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "/* roll-screen.css */\n\n#rollScreen {\n    /* flex: 1; */\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.input-table {\n    border-collapse: collapse;\n    border-spacing: 0 4px; /* Add 4px spacing between rows */\n}\n\n.input-row {\n    display: table-row;\n    height: 40px; /* Adjust height to ensure proper vertical alignment */\n}\n\n.label-cell,\n.checkbox-cell {\n    padding: 8px;\n    border: none;\n    vertical-align: middle !important; /* Vertically center the content */\n}\n\n.label-cell {\n    text-align: left; /* Align the text label to the left */\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.checkbox-cell {\n    text-align: center;\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.roll-button {\n    color: #e0681a;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 0px 2px;\n    font-weight: bold;\n    border: 1px solid #e0681a;\n    margin-top: 4px;\n    flex: 1;\n}\n\nbutton {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #e0681a;\n    color: black;\n    cursor: pointer;\n    height: 36px; /* Set consistent height for inputs and buttons */\n    box-sizing: border-box; /* Ensure padding and border are included in height */\n}\n\n.accordion-toggle {\n    margin-bottom: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.accordion-content {\n    transition: all 0.3s ease;\n}\n\n.round-roll {\n    border-radius: 50%;\n    width: 32px;\n    min-width: 32px;\n    max-width: 32px;\n    height: 32px;\n    min-height: 32px;\n    max-height: 32px;\n    padding: 0;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}",
          "",
        ]);
        const h = C;
      },
      516: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "/* social.css */\n.social-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n    color: #e0681a;\n    padding: 4px;\n}\n\n/* Prevent background color change on click */\n.social-toggle:active {\n    background: transparent; /* Ensure background remains transparent */\n}\n\n/* If you want to prevent focus outline on click */\n.social-toggle:focus {\n    outline: none; /* Prevents focus outline */\n}\n\n/* Ensure hover state also remains transparent */\n.social-toggle:hover {\n    background: transparent;\n}\n\n.social-links {\n    display: none;\n    flex-direction: column;\n    gap: 6px;\n    align-items: center;\n    width: 100%;\n}\n\n.social-links.active {\n    display: flex;\n}\n\n.social-button img {\n    max-width: 20px;\n    max-height: 20px;\n}\n",
          "",
        ]);
        const h = C;
      },
      316: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "\n/* Ensure checkboxes are displayed correctly */\n.toggle-checkbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border: 2px solid #e0681a;\n    border-radius: 4px;\n    display: inline-block;\n    position: relative !important;\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.8);\n    vertical-align: middle;\n    box-sizing: border-box;\n    opacity: 1 !important;\n    margin: 0 !important;\n    pointer-events: all !important;\n}\n\n.toggle-checkbox:checked::before {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 10px;\n    height: 10px;\n    background-color: #e0681a;\n}\n",
          "",
        ]);
        const h = C;
      },
      283: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          '/* .number-input {\n    flex-grow: 1;\n    padding: 8px;\n    border: 1px solid #e0681a;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    width: 165px;\n    height: auto !important;\n    box-sizing: border-box;\n    font-size: 14px !important;\n    margin: 0px !important;\n    width: 165px;\n    border-bottom: 1px solid #e0681a !important;\n}\n\n.number-input:focus {\n    box-shadow: 0 1px 0 0 #e0681a !important;\n} */\n\n.date-component input {\n    font-family: "Roboto", sans-serif !important;\n    font-size: 14px !important;\n    width: 105px !important;\n    height: 18px !important;\n    border: 1px solid black !important;\n    border-radius: 4px !important;\n    background-color: rgba(224, 104, 26, 1) !important;\n    color: black !important;\n    padding-left: 4px !important;\n    padding-right: 2px !important;\n}\n\n.date-component input:focus {\n    box-shadow: 0 1px 0 0 #e0681a !important;\n}',
          "",
        ]);
        const h = C;
      },
      112: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "/* dropdown.css */\n.dropdown {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.8);\n    border: none;\n    color: white;\n    /* border-radius: 4px; */\n    padding: 0px !important;\n    min-width: 100px;\n    max-height: 18px;\n    box-sizing: border-box;\n    flex: 1;\n}\n",
          "",
        ]);
        const h = C;
      },
      596: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "fieldset {\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.8);\n    border: 1px solid #e0681a;\n    border-radius: 4px;\n    color: #e0681a;\n    flex: 1;\n    padding: 0px 4px 4px 4px !important;\n}",
          "",
        ]);
        const h = C;
      },
      304: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          ".header {\n    text-align: center; /* Center the header */\n    color: #e0681a;\n    margin: 8px 0px;\n    font-size: 24px !important;\n}\n",
          "",
        ]);
        const h = C;
      },
      614: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          ".number-input {\n    padding: 8px;\n    border: 1px solid #e0681a;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    height: auto !important;\n    box-sizing: border-box;\n    font-size: 14px !important;\n    margin: 0px !important;\n    border-bottom: 1px solid #e0681a !important;\n}\n\n.number-input:focus {\n    box-shadow: 0 1px 0 0 #e0681a !important;\n}\n\n.iv-input {\n    flex: 1 1 33%;\n    min-width: 50px;\n    max-width: 100%;\n}",
          "",
        ]);
        const h = C;
      },
      24: (e, n, t) => {
        t.d(n, {
          A: () => h,
        });
        var c = t(601);
        var o = t.n(c);
        var O = t(314);
        var C = t.n(O)()(o());
        C.push([
          e.id,
          "/* Single line container to ensure elements are in a single row */\n.single-line-container {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    justify-content: center;\n}\n",
          "",
        ]);
        const h = C;
      },
      314: (e) => {
        e.exports = function (e) {
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
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
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
              layer: l[5],
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
                references: 1,
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
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap &&
                n.supports === e.supports &&
                n.layer === e.layer
              ) {
                return;
              }
              t.update((e = n));
            } else {
              t.remove();
            }
          };
        }
        e.exports = function (e, o) {
          var O = c((e = e || []), (o = o || {}));
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
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var c = (function (e) {
            if (n[e] === undefined) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              ) {
                try {
                  t = t.contentDocument.head;
                } catch (c) {
                  t = null;
                }
              }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!c) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          c.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          e.setAttributes(n, e.attributes);
          e.insert(n, e.options);
          return n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          if (n) {
            e.setAttribute("nonce", n);
          }
        };
      },
      825: (e) => {
        e.exports = function (e) {
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
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) {
            n.styleSheet.cssText = e;
          } else {
            while (n.firstChild) {
              n.removeChild(n.firstChild);
            }
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    };
    var n = {};
    function t(c) {
      var o = n[c];
      if (o !== undefined) {
        return o.exports;
      }
      var O = (n[c] = {
        id: c,
        exports: {},
      });
      e[c](O, O.exports, t);
      return O.exports;
    }
    t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      t.d(n, {
        a: n,
      });
      return n;
    };
    t.d = (e, n) => {
      for (var c in n) {
        if (t.o(n, c) && !t.o(e, c)) {
          Object.defineProperty(e, c, {
            enumerable: true,
            get: n[c],
          });
        }
      }
    };
    t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
    t.r = (e) => {
      if (typeof Symbol != "undefined" && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(e, "__esModule", {
        value: true,
      });
    };
    t.nc = undefined;
    var c = {};
    (() => {
      t.r(c);
      var e = t(72);
      var n = t.n(e);
      var o = t(825);
      var O = t.n(o);
      var C = t(659);
      var h = t.n(C);
      var l = t(56);
      var s = t.n(l);
      var E = t(540);
      var a = t.n(E);
      var r = t(113);
      var A = t.n(r);
      var L = t(114);
      var I = {};
      I.styleTagTransform = A();
      I.setAttributes = s();
      I.insert = h().bind(null, "head");
      I.domAPI = O();
      I.insertStyleElement = a();
      n()(L.A, I);
      if (L.A && L.A.locals) {
        L.A.locals;
      }
      class i {
        constructor(e = null) {
          if (
            !e ||
            ((this.container = document.getElementById(e)), this.container)
          ) {
            this.table = document.createElement("table");
            this.table.className = "input-table";
            if (this.container) {
              this.container.appendChild(this.table);
            }
          } else {
            console.error(`Element with id '${e}' not found.`);
          }
        }
        addRow(...e) {
          const n = document.createElement("tr");
          n.className = "input-row";
          e.forEach((e) => {
            const t = document.createElement("td");
            t.className = "input-cell";
            t.appendChild(e);
            n.appendChild(t);
          });
          this.table.appendChild(n);
        }
        getElement() {
          return this.table;
        }
      }
      class w {
        constructor(e) {
          this.fieldset = document.createElement("fieldset");
          if (e) {
            const n = document.createElement("legend");
            n.textContent = e;
            this.fieldset.appendChild(n);
          }
        }
        addElement(e) {
          const n = document.createElement("div");
          n.className = "fieldset-element";
          n.appendChild(e);
          this.fieldset.appendChild(n);
        }
        getElement() {
          return this.fieldset;
        }
      }
      function R(e, n, t, c, o = undefined) {
        const O = document.createElement("div");
        const C = document.createElement("input");
        C.type = "text";
        C.className = "number-input";
        if (e.startsWith("IV_")) {
          C.classList.add("iv-input");
        }
        C.id = e;
        O.appendChild(C);
        const h = (e) => e.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const l = (e) =>
          e === "-" || e === "" ? e : e.replace(/(?!^-)[^0-9]/g, "");
        function s(e) {
          if (!C.contains(e.target)) {
            C.blur();
          }
        }
        ((e, n, t, c) => {
          e.dataset.min = n;
          e.dataset.max = t;
          e.value = h(c.toString());
        })(C, n, c, t);
        C.intValue = t;
        C.addEventListener("input", () => {
          (function (e) {
            const n = e.selectionStart;
            let t = l(e.value);
            const c = parseInt(e.dataset.min, 10);
            const O = parseInt(e.dataset.max, 10);
            let C;
            C =
              t === "" || t === "-"
                ? t
                : ((e, n, t) => Math.max(n, Math.min(t, e)))(
                    parseInt(t, 10),
                    c,
                    O,
                  ).toString();
            e.value = C.startsWith("-") ? `-${h(C.substring(1))}` : h(C);
            let s = n;
            const E = l(e.value.substring(0, n));
            s = E.length + Math.floor(E.length / 3);
            e.setSelectionRange(s, s);
            const a = t === "" || t === "-" ? 0 : parseInt(t, 10);
            if (e.intValue !== a) {
              e.intValue = a;
              if (o) {
                o(a);
              }
            }
          })(C);
        });
        C.addEventListener("keydown", function (e) {
          if (
            (e.key !== "-" ||
              C.selectionStart !== 0 ||
              C.value.indexOf("-") !== -1) &&
            !/[\d]/.test(e.key) &&
            ![
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Home",
              "End",
            ].includes(e.key) &&
            !e.ctrlKey &&
            !e.metaKey
          ) {
            e.preventDefault();
          }
        });
        C.addEventListener("blur", function () {
          const e =
            C.value === "" || C.value === "-" ? 0 : parseInt(l(C.value), 10);
          if (C.intValue !== e) {
            C.intValue = e;
            if (o) {
              o(e);
            }
          }
        });
        document.addEventListener("mousedown", s);
        document.addEventListener("touchstart", s);
        return O;
      }
      const N = '<select class="dropdown"></select>';
      function K(e, n, t) {
        const c = document.createElement("div");
        c.className = "ele-container";
        c.innerHTML = N;
        const o = c.querySelector(".dropdown");
        if (!o) {
          console.error(
            "No element with class 'dropdown' found within the provided HTML.",
          );
          return null;
        }
        o.id = t;
        o.innerHTML = "";
        e.forEach((e) => {
          const n = document.createElement("option");
          n.value = e.value;
          n.text = e.text;
          o.add(n);
        });
        o.addEventListener("change", function () {
          o.blur();
          n(this.value);
        });
        let O = false;
        function C(e) {
          if (!o.contains(e.target)) {
            o.blur();
            O = false;
          }
        }
        o.addEventListener("click", function (e) {
          if (O) {
            this.blur();
            O = false;
          } else {
            O = true;
          }
        });
        document.addEventListener("mousedown", C);
        document.addEventListener("touchstart", C);
        return c;
      }
      function U(e) {
        M.toast({
          html: e,
        });
      }
      const H = {
        COMMON: 0,
        GREAT: 1,
        ULTRA: 2,
        ROGUE: 3,
        MASTER: 4,
      };
      class d {
        constructor() {
          this.minInt = -Math.pow(2, 31);
          this.maxInt = Math.pow(2, 31) - 1;
          this.maxMoneyInt = Number.MAX_SAFE_INTEGER - this.maxInt;
        }
        get currentScene() {
          return Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys
            .battle;
        }
        get currentPhase() {
          return this.currentScene.phaseManager.currentPhase;
        }
        get currentPhaseName() {
          return this.currentPhase.phaseName;
        }
        playBuySound(e) {
          this.currentScene.playSound(e);
        }
        clearUI() {
          this.currentScene.ui.clearText();
        }
        setUIMode(e) {
          return this.currentScene.ui.setMode(e);
        }
      }
      class u extends d {
        constructor() {
          super();
        }
        setTeamLuck(e) {
          if (this.currentPhaseName === "SelectModifierPhase") {
            if (
              Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys
                .battle.gameMode.modeId !== 3
            ) {
              this.currentScene.getPlayerParty().forEach((n) => {
                n.luck = e;
              });
              U(`Set Luck to ${e} (Won't update the luck Text!)`);
            } else {
              U("[ERROR] You cant cheat in daily run!");
            }
          } else {
            U("[ERROR] Not in a roll phase!");
          }
        }
        setMoney(e) {
          if (this.currentPhaseName === "SelectModifierPhase") {
            if (
              Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys
                .battle.gameMode.modeId !== 3
            ) {
              this.currentScene.money = e;
              this.currentScene.updateMoneyText();
              this.currentScene.animateMoneyChanged(false);
              U(`Set Money to ${e}`);
            } else {
              U("[ERROR] You cant cheat in daily run!");
            }
          } else {
            U("[ERROR] Not in a roll phase!");
          }
        }
        setRollCount(e) {
          if (this.currentPhaseName === "SelectModifierPhase") {
            if (
              Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys
                .battle.gameMode.modeId !== 3
            ) {
              this.currentPhase.rollCount = e;
              U(`Set Roll Count to ${e}`);
            } else {
              U("[ERROR] You cant cheat in daily run!");
            }
          } else {
            U("[ERROR] Not in a roll phase!");
          }
        }
        lockRarities(e) {
          this.currentScene.lockModifierTiers = e;
          let n = this.currentScene.ui.getHandler();
          if (n && typeof n.updateLockRaritiesText == "function") {
            n.updateLockRaritiesText();
          }
        }
        rerollPhase(e, n, t) {
          const c =
            3 +
            (this.currentScene.modifiers.find(
              (e) => e.constructor.name === "ExtraModifierModifier",
            )?.stackCount ?? 0);
          let o = this.currentScene.phaseManager.currentPhase.typeOptions.map(
            (e) => e.type.tier,
          );
          this.lockRarities(n);
          let O =
            n === true && e === null
              ? o
              : e === null
                ? this.currentPhase.getModifierTypeOptions(c).map((e) => e.type)
                : new Array(c).fill(e);
          if (t === null) {
            t = this.currentPhase.rollCount + 1;
          }
          this.currentScene.reroll = true;
          this.currentScene.phaseManager.unshiftPhase(
            new this.currentPhase.constructor(t, O),
          );
        }
        execute(e, n, t, c, o) {
          if (this.currentPhaseName === "SelectModifierPhase") {
            if (
              Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys
                .battle.gameMode.modeId !== 3
            ) {
              if (c === null) {
                c = (this.currentPhase.rerollCount ?? 0) + 1;
              }
              this.rerollPhase(e, n, c);
              this.clearUI();
              this.setUIMode(0).then(() => this.currentPhase.end());
              if (o !== null) {
                this.setTeamLuck(o);
              }
              if (t !== null) {
                this.setMoney(t);
              } else {
                t = this.currentScene.money;
              }
              this.playBuySound("buy");
              U(`Roll Count: ${c ?? "no"}, Item Tier: ${e ?? "no"}`);
            } else {
              U("[ERROR] You cant cheat in daily run!");
            }
          } else {
            U("[ERROR] Not in a roll phase!");
          }
        }
      }
      class F extends d {
        constructor() {
          super();
        }
        execute() {
          if (this.currentPhaseName === "TitlePhase") {
            this.currentScene.gameData
              .saveAll(this.currentScene, true, true, true)
              .then((e) => {
                if (!e) {
                  return this.currentScene.reset(true);
                }
                this.currentScene.gameData
                  .tryClearSession(
                    this.currentScene,
                    this.currentScene.sessionSlotId,
                  )
                  .then((e) => {
                    if (!e[0]) {
                      return this.currentScene.reset(true);
                    }
                    this.currentScene.reset();
                    this.currentScene.unshiftPhase(
                      new this.currentScene.constructor(this.scene),
                    );
                    this.currentPhase.end();
                  });
              });
          } else {
            console.log("Go back to Title Screen first!");
          }
        }
      }
      const W = {
        _10K_MONEY: 0,
        _100K_MONEY: 1,
        _1M_MONEY: 2,
        _10M_MONEY: 3,
        _250_DMG: 4,
        _1000_DMG: 5,
        _2500_DMG: 6,
        _10000_DMG: 7,
        _250_HEAL: 8,
        _1000_HEAL: 9,
        _2500_HEAL: 10,
        _10000_HEAL: 11,
        LV_100: 12,
        LV_250: 13,
        LV_1000: 14,
        _10_RIBBONS: 15,
        _25_RIBBONS: 16,
        _50_RIBBONS: 17,
        _75_RIBBONS: 18,
        _100_RIBBONS: 19,
        TRANSFER_MAX_BATTLE_STAT: 20,
        MAX_FRIENDSHIP: 21,
        MEGA_EVOLVE: 22,
        GIGANTAMAX: 23,
        TERASTALLIZE: 24,
        STELLAR_TERASTALLIZE: 25,
        SPLICE: 26,
        MINI_BLACK_HOLE: 27,
        CATCH_MYTHICAL: 28,
        CATCH_SUB_LEGENDARY: 29,
        CATCH_LEGENDARY: 30,
        SEE_SHINY: 31,
        SHINY_PARTY: 32,
        HATCH_MYTHICAL: 33,
        HATCH_SUB_LEGENDARY: 34,
        HATCH_LEGENDARY: 35,
        HATCH_SHINY: 36,
        HIDDEN_ABILITY: 37,
        PERFECT_IVS: 38,
        CLASSIC_VICTORY: 39,
        MONO_GEN_ONE_VICTORY: 40,
        MONO_GEN_TWO_VICTORY: 41,
        MONO_GEN_THREE_VICTORY: 42,
        MONO_GEN_FOUR_VICTORY: 43,
        MONO_GEN_FIVE_VICTORY: 44,
        MONO_GEN_SIX_VICTORY: 45,
        MONO_GEN_SEVEN_VICTORY: 46,
        MONO_GEN_EIGHT_VICTORY: 47,
        MONO_GEN_NINE_VICTORY: 48,
        MONO_NORMAL: 49,
        MONO_FIGHTING: 50,
        MONO_FLYING: 51,
        MONO_POISON: 52,
        MONO_GROUND: 53,
        MONO_ROCK: 54,
        MONO_BUG: 55,
        MONO_GHOST: 56,
        MONO_STEEL: 57,
        MONO_FIRE: 58,
        MONO_WATER: 59,
        MONO_GRASS: 60,
        MONO_ELECTRIC: 61,
        MONO_PSYCHIC: 62,
        MONO_ICE: 63,
        MONO_DRAGON: 64,
        MONO_DARK: 65,
        MONO_FAIRY: 66,
        UNEVOLVED_CLASSIC_VICTORY: 67,
        FRESH_START: 68,
        INVERSE_BATTLE: 69,
        BREEDERS_IN_SPACE: 70,
        TRANSFER_MAX_STAT_STAGE: 71,
        FLIP_STATS: 72,
        FLIP_INVERSE: 73,
        DAILY_VICTORY: 74,
        LIMITED_CATCH: 75,
        LIMITED_SUPPORT: 76,
        HARDCORE: 76,
        NUZLOCKE: 78,
      };
      class S extends d {
        constructor() {
          super();
        }
        execute() {
          const e = document.getElementById("achievementDate").value;
          const n = new Date(e).getTime();
          U(`Date: ${e}, Timestamp: ${n}`);
          const t = n;
          this.currentScene.gameData.achvUnlocks = Object.keys(W).reduce(
            (e, n) => {
              e[n] = t;
              return e;
            },
            {},
          );
          this.save();
          U("All achievements unlocked!");
        }
        save() {
          this.currentScene.gameData.saveSystem();
        }
      }
      const T = new (class {
        constructor() {
          this.selectModifierPhaseScene = new u();
          this.dataResetter = new F();
          this.achvUnlocker = new S();
        }
        roll(e = null, n = true, t = null, c = null, o = null) {
          this.selectModifierPhaseScene.execute(e, n, t, c, o);
        }
        setMoney(e) {
          this.selectModifierPhaseScene.setMoney(e);
        }
        setTeamLuck(e) {
          this.selectModifierPhaseScene.setTeamLuck(e);
        }
        setRollCount(e) {
          this.selectModifierPhaseScene.setRollCount(e);
        }
        setLockRarities(e) {
          this.selectModifierPhaseScene.lockRarities(e);
        }
        allAchievements() {
          this.achvUnlocker.execute();
        }
        RESET() {
          this.dataResetter.execute();
        }
      })();
      const D = T;
      function p(e, n, t) {
        const c = document.createElement("div");
        c.className = "checkbox-container";
        const o = document.createElement("input");
        o.type = "checkbox";
        o.id = e;
        o.classList.add("toggle-checkbox");
        o.checked = n;
        c.appendChild(o);
        o.addEventListener("change", function () {
          o.blur();
          t(this.checked);
        });
        return c;
      }
      window.HACK = T;
      class g {
        constructor() {
          this.element = document.createElement("div");
          this.element.className = "single-line-container";
        }
        addElement(e) {
          this.element.appendChild(e);
        }
        getElement() {
          return this.element;
        }
      }
      function B(e) {
        const n = document.createElement("div");
        n.className = "date-component";
        const t = document.createElement("input");
        t.type = "date";
        t.id = e;
        const c = new Date();
        const o = `${c.getFullYear()}-${String(c.getMonth() + 1).padStart(2, "0")}-${String(c.getDate()).padStart(2, "0")}`;
        t.value = o;
        n.appendChild(t);
        return n;
      }
      const V = Object.fromEntries(
        Object.entries({
          ENDLESS_MODE: 0,
          MINI_BLACK_HOLE: 1,
          SPLICED_ENDLESS_MODE: 2,
        }).map(([e, n]) => [n, e]),
      );
      const z = Object.values({
        HARDY: 0,
        LONELY: 1,
        BRAVE: 2,
        ADAMANT: 3,
        NAUGHTY: 4,
        BOLD: 5,
        DOCILE: 6,
        RELAXED: 7,
        IMPISH: 8,
        LAX: 9,
        TIMID: 10,
        HASTY: 11,
        SERIOUS: 12,
        JOLLY: 13,
        NAIVE: 14,
        MODEST: 15,
        MILD: 16,
        QUIET: 17,
        BASHFUL: 18,
        RASH: 19,
        CALM: 20,
        GENTLE: 21,
        SASSY: 22,
        CAREFUL: 23,
        QUIRKY: 24,
      }).reduce((e, n) => e | (1 << n), 0);
      const P = [
        "25",
        "35",
        "39",
        "106",
        "107",
        "113",
        "122",
        "124",
        "125",
        "126",
        "143",
        "183",
        "185",
        "202",
        "226",
        "315",
        "358",
        "4122",
      ];
      const f = {
        BULBASAUR: 1,
        IVYSAUR: 2,
        VENUSAUR: 3,
        CHARMANDER: 4,
        CHARMELEON: 5,
        CHARIZARD: 6,
        SQUIRTLE: 7,
        WARTORTLE: 8,
        BLASTOISE: 9,
        CATERPIE: 10,
        METAPOD: 11,
        BUTTERFREE: 12,
        WEEDLE: 13,
        KAKUNA: 14,
        BEEDRILL: 15,
        PIDGEY: 16,
        PIDGEOTTO: 17,
        PIDGEOT: 18,
        RATTATA: 19,
        RATICATE: 20,
        SPEAROW: 21,
        FEAROW: 22,
        EKANS: 23,
        ARBOK: 24,
        PIKACHU: 25,
        RAICHU: 26,
        SANDSHREW: 27,
        SANDSLASH: 28,
        NIDORAN_F: 29,
        NIDORINA: 30,
        NIDOQUEEN: 31,
        NIDORAN_M: 32,
        NIDORINO: 33,
        NIDOKING: 34,
        CLEFAIRY: 35,
        CLEFABLE: 36,
        VULPIX: 37,
        NINETALES: 38,
        JIGGLYPUFF: 39,
        WIGGLYTUFF: 40,
        ZUBAT: 41,
        GOLBAT: 42,
        ODDISH: 43,
        GLOOM: 44,
        VILEPLUME: 45,
        PARAS: 46,
        PARASECT: 47,
        VENONAT: 48,
        VENOMOTH: 49,
        DIGLETT: 50,
        DUGTRIO: 51,
        MEOWTH: 52,
        PERSIAN: 53,
        PSYDUCK: 54,
        GOLDUCK: 55,
        MANKEY: 56,
        PRIMEAPE: 57,
        GROWLITHE: 58,
        ARCANINE: 59,
        POLIWAG: 60,
        POLIWHIRL: 61,
        POLIWRATH: 62,
        ABRA: 63,
        KADABRA: 64,
        ALAKAZAM: 65,
        MACHOP: 66,
        MACHOKE: 67,
        MACHAMP: 68,
        BELLSPROUT: 69,
        WEEPINBELL: 70,
        VICTREEBEL: 71,
        TENTACOOL: 72,
        TENTACRUEL: 73,
        GEODUDE: 74,
        GRAVELER: 75,
        GOLEM: 76,
        PONYTA: 77,
        RAPIDASH: 78,
        SLOWPOKE: 79,
        SLOWBRO: 80,
        MAGNEMITE: 81,
        MAGNETON: 82,
        FARFETCHD: 83,
        DODUO: 84,
        DODRIO: 85,
        SEEL: 86,
        DEWGONG: 87,
        GRIMER: 88,
        MUK: 89,
        SHELLDER: 90,
        CLOYSTER: 91,
        GASTLY: 92,
        HAUNTER: 93,
        GENGAR: 94,
        ONIX: 95,
        DROWZEE: 96,
        HYPNO: 97,
        KRABBY: 98,
        KINGLER: 99,
        VOLTORB: 100,
        ELECTRODE: 101,
        EXEGGCUTE: 102,
        EXEGGUTOR: 103,
        CUBONE: 104,
        MAROWAK: 105,
        HITMONLEE: 106,
        HITMONCHAN: 107,
        LICKITUNG: 108,
        KOFFING: 109,
        WEEZING: 110,
        RHYHORN: 111,
        RHYDON: 112,
        CHANSEY: 113,
        TANGELA: 114,
        KANGASKHAN: 115,
        HORSEA: 116,
        SEADRA: 117,
        GOLDEEN: 118,
        SEAKING: 119,
        STARYU: 120,
        STARMIE: 121,
        MR_MIME: 122,
        SCYTHER: 123,
        JYNX: 124,
        ELECTABUZZ: 125,
        MAGMAR: 126,
        PINSIR: 127,
        TAUROS: 128,
        MAGIKARP: 129,
        GYARADOS: 130,
        LAPRAS: 131,
        DITTO: 132,
        EEVEE: 133,
        VAPOREON: 134,
        JOLTEON: 135,
        FLAREON: 136,
        PORYGON: 137,
        OMANYTE: 138,
        OMASTAR: 139,
        KABUTO: 140,
        KABUTOPS: 141,
        AERODACTYL: 142,
        SNORLAX: 143,
        ARTICUNO: 144,
        ZAPDOS: 145,
        MOLTRES: 146,
        DRATINI: 147,
        DRAGONAIR: 148,
        DRAGONITE: 149,
        MEWTWO: 150,
        MEW: 151,
        CHIKORITA: 152,
        BAYLEEF: 153,
        MEGANIUM: 154,
        CYNDAQUIL: 155,
        QUILAVA: 156,
        TYPHLOSION: 157,
        TOTODILE: 158,
        CROCONAW: 159,
        FERALIGATR: 160,
        SENTRET: 161,
        FURRET: 162,
        HOOTHOOT: 163,
        NOCTOWL: 164,
        LEDYBA: 165,
        LEDIAN: 166,
        SPINARAK: 167,
        ARIADOS: 168,
        CROBAT: 169,
        CHINCHOU: 170,
        LANTURN: 171,
        PICHU: 172,
        CLEFFA: 173,
        IGGLYBUFF: 174,
        TOGEPI: 175,
        TOGETIC: 176,
        NATU: 177,
        XATU: 178,
        MAREEP: 179,
        FLAAFFY: 180,
        AMPHAROS: 181,
        BELLOSSOM: 182,
        MARILL: 183,
        AZUMARILL: 184,
        SUDOWOODO: 185,
        POLITOED: 186,
        HOPPIP: 187,
        SKIPLOOM: 188,
        JUMPLUFF: 189,
        AIPOM: 190,
        SUNKERN: 191,
        SUNFLORA: 192,
        YANMA: 193,
        WOOPER: 194,
        QUAGSIRE: 195,
        ESPEON: 196,
        UMBREON: 197,
        MURKROW: 198,
        SLOWKING: 199,
        MISDREAVUS: 200,
        UNOWN: 201,
        WOBBUFFET: 202,
        GIRAFARIG: 203,
        PINECO: 204,
        FORRETRESS: 205,
        DUNSPARCE: 206,
        GLIGAR: 207,
        STEELIX: 208,
        SNUBBULL: 209,
        GRANBULL: 210,
        QWILFISH: 211,
        SCIZOR: 212,
        SHUCKLE: 213,
        HERACROSS: 214,
        SNEASEL: 215,
        TEDDIURSA: 216,
        URSARING: 217,
        SLUGMA: 218,
        MAGCARGO: 219,
        SWINUB: 220,
        PILOSWINE: 221,
        CORSOLA: 222,
        REMORAID: 223,
        OCTILLERY: 224,
        DELIBIRD: 225,
        MANTINE: 226,
        SKARMORY: 227,
        HOUNDOUR: 228,
        HOUNDOOM: 229,
        KINGDRA: 230,
        PHANPY: 231,
        DONPHAN: 232,
        PORYGON2: 233,
        STANTLER: 234,
        SMEARGLE: 235,
        TYROGUE: 236,
        HITMONTOP: 237,
        SMOOCHUM: 238,
        ELEKID: 239,
        MAGBY: 240,
        MILTANK: 241,
        BLISSEY: 242,
        RAIKOU: 243,
        ENTEI: 244,
        SUICUNE: 245,
        LARVITAR: 246,
        PUPITAR: 247,
        TYRANITAR: 248,
        LUGIA: 249,
        HO_OH: 250,
        CELEBI: 251,
        TREECKO: 252,
        GROVYLE: 253,
        SCEPTILE: 254,
        TORCHIC: 255,
        COMBUSKEN: 256,
        BLAZIKEN: 257,
        MUDKIP: 258,
        MARSHTOMP: 259,
        SWAMPERT: 260,
        POOCHYENA: 261,
        MIGHTYENA: 262,
        ZIGZAGOON: 263,
        LINOONE: 264,
        WURMPLE: 265,
        SILCOON: 266,
        BEAUTIFLY: 267,
        CASCOON: 268,
        DUSTOX: 269,
        LOTAD: 270,
        LOMBRE: 271,
        LUDICOLO: 272,
        SEEDOT: 273,
        NUZLEAF: 274,
        SHIFTRY: 275,
        TAILLOW: 276,
        SWELLOW: 277,
        WINGULL: 278,
        PELIPPER: 279,
        RALTS: 280,
        KIRLIA: 281,
        GARDEVOIR: 282,
        SURSKIT: 283,
        MASQUERAIN: 284,
        SHROOMISH: 285,
        BRELOOM: 286,
        SLAKOTH: 287,
        VIGOROTH: 288,
        SLAKING: 289,
        NINCADA: 290,
        NINJASK: 291,
        SHEDINJA: 292,
        WHISMUR: 293,
        LOUDRED: 294,
        EXPLOUD: 295,
        MAKUHITA: 296,
        HARIYAMA: 297,
        AZURILL: 298,
        NOSEPASS: 299,
        SKITTY: 300,
        DELCATTY: 301,
        SABLEYE: 302,
        MAWILE: 303,
        ARON: 304,
        LAIRON: 305,
        AGGRON: 306,
        MEDITITE: 307,
        MEDICHAM: 308,
        ELECTRIKE: 309,
        MANECTRIC: 310,
        PLUSLE: 311,
        MINUN: 312,
        VOLBEAT: 313,
        ILLUMISE: 314,
        ROSELIA: 315,
        GULPIN: 316,
        SWALOT: 317,
        CARVANHA: 318,
        SHARPEDO: 319,
        WAILMER: 320,
        WAILORD: 321,
        NUMEL: 322,
        CAMERUPT: 323,
        TORKOAL: 324,
        SPOINK: 325,
        GRUMPIG: 326,
        SPINDA: 327,
        TRAPINCH: 328,
        VIBRAVA: 329,
        FLYGON: 330,
        CACNEA: 331,
        CACTURNE: 332,
        SWABLU: 333,
        ALTARIA: 334,
        ZANGOOSE: 335,
        SEVIPER: 336,
        LUNATONE: 337,
        SOLROCK: 338,
        BARBOACH: 339,
        WHISCASH: 340,
        CORPHISH: 341,
        CRAWDAUNT: 342,
        BALTOY: 343,
        CLAYDOL: 344,
        LILEEP: 345,
        CRADILY: 346,
        ANORITH: 347,
        ARMALDO: 348,
        FEEBAS: 349,
        MILOTIC: 350,
        CASTFORM: 351,
        KECLEON: 352,
        SHUPPET: 353,
        BANETTE: 354,
        DUSKULL: 355,
        DUSCLOPS: 356,
        TROPIUS: 357,
        CHIMECHO: 358,
        ABSOL: 359,
        WYNAUT: 360,
        SNORUNT: 361,
        GLALIE: 362,
        SPHEAL: 363,
        SEALEO: 364,
        WALREIN: 365,
        CLAMPERL: 366,
        HUNTAIL: 367,
        GOREBYSS: 368,
        RELICANTH: 369,
        LUVDISC: 370,
        BAGON: 371,
        SHELGON: 372,
        SALAMENCE: 373,
        BELDUM: 374,
        METANG: 375,
        METAGROSS: 376,
        REGIROCK: 377,
        REGICE: 378,
        REGISTEEL: 379,
        LATIAS: 380,
        LATIOS: 381,
        KYOGRE: 382,
        GROUDON: 383,
        RAYQUAZA: 384,
        JIRACHI: 385,
        DEOXYS: 386,
        TURTWIG: 387,
        GROTLE: 388,
        TORTERRA: 389,
        CHIMCHAR: 390,
        MONFERNO: 391,
        INFERNAPE: 392,
        PIPLUP: 393,
        PRINPLUP: 394,
        EMPOLEON: 395,
        STARLY: 396,
        STARAVIA: 397,
        STARAPTOR: 398,
        BIDOOF: 399,
        BIBAREL: 400,
        KRICKETOT: 401,
        KRICKETUNE: 402,
        SHINX: 403,
        LUXIO: 404,
        LUXRAY: 405,
        BUDEW: 406,
        ROSERADE: 407,
        CRANIDOS: 408,
        RAMPARDOS: 409,
        SHIELDON: 410,
        BASTIODON: 411,
        BURMY: 412,
        WORMADAM: 413,
        MOTHIM: 414,
        COMBEE: 415,
        VESPIQUEN: 416,
        PACHIRISU: 417,
        BUIZEL: 418,
        FLOATZEL: 419,
        CHERUBI: 420,
        CHERRIM: 421,
        SHELLOS: 422,
        GASTRODON: 423,
        AMBIPOM: 424,
        DRIFLOON: 425,
        DRIFBLIM: 426,
        BUNEARY: 427,
        LOPUNNY: 428,
        MISMAGIUS: 429,
        HONCHKROW: 430,
        GLAMEOW: 431,
        PURUGLY: 432,
        CHINGLING: 433,
        STUNKY: 434,
        SKUNTANK: 435,
        BRONZOR: 436,
        BRONZONG: 437,
        BONSLY: 438,
        MIME_JR: 439,
        HAPPINY: 440,
        CHATOT: 441,
        SPIRITOMB: 442,
        GIBLE: 443,
        GABITE: 444,
        GARCHOMP: 445,
        MUNCHLAX: 446,
        RIOLU: 447,
        LUCARIO: 448,
        HIPPOPOTAS: 449,
        HIPPOWDON: 450,
        SKORUPI: 451,
        DRAPION: 452,
        CROAGUNK: 453,
        TOXICROAK: 454,
        CARNIVINE: 455,
        FINNEON: 456,
        LUMINEON: 457,
        MANTYKE: 458,
        SNOVER: 459,
        ABOMASNOW: 460,
        WEAVILE: 461,
        MAGNEZONE: 462,
        LICKILICKY: 463,
        RHYPERIOR: 464,
        TANGROWTH: 465,
        ELECTIVIRE: 466,
        MAGMORTAR: 467,
        TOGEKISS: 468,
        YANMEGA: 469,
        LEAFEON: 470,
        GLACEON: 471,
        GLISCOR: 472,
        MAMOSWINE: 473,
        PORYGON_Z: 474,
        GALLADE: 475,
        PROBOPASS: 476,
        DUSKNOIR: 477,
        FROSLASS: 478,
        ROTOM: 479,
        UXIE: 480,
        MESPRIT: 481,
        AZELF: 482,
        DIALGA: 483,
        PALKIA: 484,
        HEATRAN: 485,
        REGIGIGAS: 486,
        GIRATINA: 487,
        CRESSELIA: 488,
        PHIONE: 489,
        MANAPHY: 490,
        DARKRAI: 491,
        SHAYMIN: 492,
        ARCEUS: 493,
        VICTINI: 494,
        SNIVY: 495,
        SERVINE: 496,
        SERPERIOR: 497,
        TEPIG: 498,
        PIGNITE: 499,
        EMBOAR: 500,
        OSHAWOTT: 501,
        DEWOTT: 502,
        SAMUROTT: 503,
        PATRAT: 504,
        WATCHOG: 505,
        LILLIPUP: 506,
        HERDIER: 507,
        STOUTLAND: 508,
        PURRLOIN: 509,
        LIEPARD: 510,
        PANSAGE: 511,
        SIMISAGE: 512,
        PANSEAR: 513,
        SIMISEAR: 514,
        PANPOUR: 515,
        SIMIPOUR: 516,
        MUNNA: 517,
        MUSHARNA: 518,
        PIDOVE: 519,
        TRANQUILL: 520,
        UNFEZANT: 521,
        BLITZLE: 522,
        ZEBSTRIKA: 523,
        ROGGENROLA: 524,
        BOLDORE: 525,
        GIGALITH: 526,
        WOOBAT: 527,
        SWOOBAT: 528,
        DRILBUR: 529,
        EXCADRILL: 530,
        AUDINO: 531,
        TIMBURR: 532,
        GURDURR: 533,
        CONKELDURR: 534,
        TYMPOLE: 535,
        PALPITOAD: 536,
        SEISMITOAD: 537,
        THROH: 538,
        SAWK: 539,
        SEWADDLE: 540,
        SWADLOON: 541,
        LEAVANNY: 542,
        VENIPEDE: 543,
        WHIRLIPEDE: 544,
        SCOLIPEDE: 545,
        COTTONEE: 546,
        WHIMSICOTT: 547,
        PETILIL: 548,
        LILLIGANT: 549,
        BASCULIN: 550,
        SANDILE: 551,
        KROKOROK: 552,
        KROOKODILE: 553,
        DARUMAKA: 554,
        DARMANITAN: 555,
        MARACTUS: 556,
        DWEBBLE: 557,
        CRUSTLE: 558,
        SCRAGGY: 559,
        SCRAFTY: 560,
        SIGILYPH: 561,
        YAMASK: 562,
        COFAGRIGUS: 563,
        TIRTOUGA: 564,
        CARRACOSTA: 565,
        ARCHEN: 566,
        ARCHEOPS: 567,
        TRUBBISH: 568,
        GARBODOR: 569,
        ZORUA: 570,
        ZOROARK: 571,
        MINCCINO: 572,
        CINCCINO: 573,
        GOTHITA: 574,
        GOTHORITA: 575,
        GOTHITELLE: 576,
        SOLOSIS: 577,
        DUOSION: 578,
        REUNICLUS: 579,
        DUCKLETT: 580,
        SWANNA: 581,
        VANILLITE: 582,
        VANILLISH: 583,
        VANILLUXE: 584,
        DEERLING: 585,
        SAWSBUCK: 586,
        EMOLGA: 587,
        KARRABLAST: 588,
        ESCAVALIER: 589,
        FOONGUS: 590,
        AMOONGUSS: 591,
        FRILLISH: 592,
        JELLICENT: 593,
        ALOMOMOLA: 594,
        JOLTIK: 595,
        GALVANTULA: 596,
        FERROSEED: 597,
        FERROTHORN: 598,
        KLINK: 599,
        KLANG: 600,
        KLINKLANG: 601,
        TYNAMO: 602,
        EELEKTRIK: 603,
        EELEKTROSS: 604,
        ELGYEM: 605,
        BEHEEYEM: 606,
        LITWICK: 607,
        LAMPENT: 608,
        CHANDELURE: 609,
        AXEW: 610,
        FRAXURE: 611,
        HAXORUS: 612,
        CUBCHOO: 613,
        BEARTIC: 614,
        CRYOGONAL: 615,
        SHELMET: 616,
        ACCELGOR: 617,
        STUNFISK: 618,
        MIENFOO: 619,
        MIENSHAO: 620,
        DRUDDIGON: 621,
        GOLETT: 622,
        GOLURK: 623,
        PAWNIARD: 624,
        BISHARP: 625,
        BOUFFALANT: 626,
        RUFFLET: 627,
        BRAVIARY: 628,
        VULLABY: 629,
        MANDIBUZZ: 630,
        HEATMOR: 631,
        DURANT: 632,
        DEINO: 633,
        ZWEILOUS: 634,
        HYDREIGON: 635,
        LARVESTA: 636,
        VOLCARONA: 637,
        COBALION: 638,
        TERRAKION: 639,
        VIRIZION: 640,
        TORNADUS: 641,
        THUNDURUS: 642,
        RESHIRAM: 643,
        ZEKROM: 644,
        LANDORUS: 645,
        KYUREM: 646,
        KELDEO: 647,
        MELOETTA: 648,
        GENESECT: 649,
        CHESPIN: 650,
        QUILLADIN: 651,
        CHESNAUGHT: 652,
        FENNEKIN: 653,
        BRAIXEN: 654,
        DELPHOX: 655,
        FROAKIE: 656,
        FROGADIER: 657,
        GRENINJA: 658,
        BUNNELBY: 659,
        DIGGERSBY: 660,
        FLETCHLING: 661,
        FLETCHINDER: 662,
        TALONFLAME: 663,
        SCATTERBUG: 664,
        SPEWPA: 665,
        VIVILLON: 666,
        LITLEO: 667,
        PYROAR: 668,
        FLABEBE: 669,
        FLOETTE: 670,
        FLORGES: 671,
        SKIDDO: 672,
        GOGOAT: 673,
        PANCHAM: 674,
        PANGORO: 675,
        FURFROU: 676,
        ESPURR: 677,
        MEOWSTIC: 678,
        HONEDGE: 679,
        DOUBLADE: 680,
        AEGISLASH: 681,
        SPRITZEE: 682,
        AROMATISSE: 683,
        SWIRLIX: 684,
        SLURPUFF: 685,
        INKAY: 686,
        MALAMAR: 687,
        BINACLE: 688,
        BARBARACLE: 689,
        SKRELP: 690,
        DRAGALGE: 691,
        CLAUNCHER: 692,
        CLAWITZER: 693,
        HELIOPTILE: 694,
        HELIOLISK: 695,
        TYRUNT: 696,
        TYRANTRUM: 697,
        AMAURA: 698,
        AURORUS: 699,
        SYLVEON: 700,
        HAWLUCHA: 701,
        DEDENNE: 702,
        CARBINK: 703,
        GOOMY: 704,
        SLIGGOO: 705,
        GOODRA: 706,
        KLEFKI: 707,
        PHANTUMP: 708,
        TREVENANT: 709,
        PUMPKABOO: 710,
        GOURGEIST: 711,
        BERGMITE: 712,
        AVALUGG: 713,
        NOIBAT: 714,
        NOIVERN: 715,
        XERNEAS: 716,
        YVELTAL: 717,
        ZYGARDE: 718,
        DIANCIE: 719,
        HOOPA: 720,
        VOLCANION: 721,
        ROWLET: 722,
        DARTRIX: 723,
        DECIDUEYE: 724,
        LITTEN: 725,
        TORRACAT: 726,
        INCINEROAR: 727,
        POPPLIO: 728,
        BRIONNE: 729,
        PRIMARINA: 730,
        PIKIPEK: 731,
        TRUMBEAK: 732,
        TOUCANNON: 733,
        YUNGOOS: 734,
        GUMSHOOS: 735,
        GRUBBIN: 736,
        CHARJABUG: 737,
        VIKAVOLT: 738,
        CRABRAWLER: 739,
        CRABOMINABLE: 740,
        ORICORIO: 741,
        CUTIEFLY: 742,
        RIBOMBEE: 743,
        ROCKRUFF: 744,
        LYCANROC: 745,
        WISHIWASHI: 746,
        MAREANIE: 747,
        TOXAPEX: 748,
        MUDBRAY: 749,
        MUDSDALE: 750,
        DEWPIDER: 751,
        ARAQUANID: 752,
        FOMANTIS: 753,
        LURANTIS: 754,
        MORELULL: 755,
        SHIINOTIC: 756,
        SALANDIT: 757,
        SALAZZLE: 758,
        STUFFUL: 759,
        BEWEAR: 760,
        BOUNSWEET: 761,
        STEENEE: 762,
        TSAREENA: 763,
        COMFEY: 764,
        ORANGURU: 765,
        PASSIMIAN: 766,
        WIMPOD: 767,
        GOLISOPOD: 768,
        SANDYGAST: 769,
        PALOSSAND: 770,
        PYUKUMUKU: 771,
        TYPE_NULL: 772,
        SILVALLY: 773,
        MINIOR: 774,
        KOMALA: 775,
        TURTONATOR: 776,
        TOGEDEMARU: 777,
        MIMIKYU: 778,
        BRUXISH: 779,
        DRAMPA: 780,
        DHELMISE: 781,
        JANGMO_O: 782,
        HAKAMO_O: 783,
        KOMMO_O: 784,
        TAPU_KOKO: 785,
        TAPU_LELE: 786,
        TAPU_BULU: 787,
        TAPU_FINI: 788,
        COSMOG: 789,
        COSMOEM: 790,
        SOLGALEO: 791,
        LUNALA: 792,
        NIHILEGO: 793,
        BUZZWOLE: 794,
        PHEROMOSA: 795,
        XURKITREE: 796,
        CELESTEELA: 797,
        KARTANA: 798,
        GUZZLORD: 799,
        NECROZMA: 800,
        MAGEARNA: 801,
        MARSHADOW: 802,
        POIPOLE: 803,
        NAGANADEL: 804,
        STAKATAKA: 805,
        BLACEPHALON: 806,
        ZERAORA: 807,
        MELTAN: 808,
        MELMETAL: 809,
        GROOKEY: 810,
        THWACKEY: 811,
        RILLABOOM: 812,
        SCORBUNNY: 813,
        RABOOT: 814,
        CINDERACE: 815,
        SOBBLE: 816,
        DRIZZILE: 817,
        INTELEON: 818,
        SKWOVET: 819,
        GREEDENT: 820,
        ROOKIDEE: 821,
        CORVISQUIRE: 822,
        CORVIKNIGHT: 823,
        BLIPBUG: 824,
        DOTTLER: 825,
        ORBEETLE: 826,
        NICKIT: 827,
        THIEVUL: 828,
        GOSSIFLEUR: 829,
        ELDEGOSS: 830,
        WOOLOO: 831,
        DUBWOOL: 832,
        CHEWTLE: 833,
        DREDNAW: 834,
        YAMPER: 835,
        BOLTUND: 836,
        ROLYCOLY: 837,
        CARKOL: 838,
        COALOSSAL: 839,
        APPLIN: 840,
        FLAPPLE: 841,
        APPLETUN: 842,
        SILICOBRA: 843,
        SANDACONDA: 844,
        CRAMORANT: 845,
        ARROKUDA: 846,
        BARRASKEWDA: 847,
        TOXEL: 848,
        TOXTRICITY: 849,
        SIZZLIPEDE: 850,
        CENTISKORCH: 851,
        CLOBBOPUS: 852,
        GRAPPLOCT: 853,
        SINISTEA: 854,
        POLTEAGEIST: 855,
        HATENNA: 856,
        HATTREM: 857,
        HATTERENE: 858,
        IMPIDIMP: 859,
        MORGREM: 860,
        GRIMMSNARL: 861,
        OBSTAGOON: 862,
        PERRSERKER: 863,
        CURSOLA: 864,
        SIRFETCHD: 865,
        MR_RIME: 866,
        RUNERIGUS: 867,
        MILCERY: 868,
        ALCREMIE: 869,
        FALINKS: 870,
        PINCURCHIN: 871,
        SNOM: 872,
        FROSMOTH: 873,
        STONJOURNER: 874,
        EISCUE: 875,
        INDEEDEE: 876,
        MORPEKO: 877,
        CUFANT: 878,
        COPPERAJAH: 879,
        DRACOZOLT: 880,
        ARCTOZOLT: 881,
        DRACOVISH: 882,
        ARCTOVISH: 883,
        DURALUDON: 884,
        DREEPY: 885,
        DRAKLOAK: 886,
        DRAGAPULT: 887,
        ZACIAN: 888,
        ZAMAZENTA: 889,
        ETERNATUS: 890,
        KUBFU: 891,
        URSHIFU: 892,
        ZARUDE: 893,
        REGIELEKI: 894,
        REGIDRAGO: 895,
        GLASTRIER: 896,
        SPECTRIER: 897,
        CALYREX: 898,
        WYRDEER: 899,
        KLEAVOR: 900,
        URSALUNA: 901,
        BASCULEGION: 902,
        SNEASLER: 903,
        OVERQWIL: 904,
        ENAMORUS: 905,
        SPRIGATITO: 906,
        FLORAGATO: 907,
        MEOWSCARADA: 908,
        FUECOCO: 909,
        CROCALOR: 910,
        SKELEDIRGE: 911,
        QUAXLY: 912,
        QUAXWELL: 913,
        QUAQUAVAL: 914,
        LECHONK: 915,
        OINKOLOGNE: 916,
        TAROUNTULA: 917,
        SPIDOPS: 918,
        NYMBLE: 919,
        LOKIX: 920,
        PAWMI: 921,
        PAWMO: 922,
        PAWMOT: 923,
        TANDEMAUS: 924,
        MAUSHOLD: 925,
        FIDOUGH: 926,
        DACHSBUN: 927,
        SMOLIV: 928,
        DOLLIV: 929,
        ARBOLIVA: 930,
        SQUAWKABILLY: 931,
        NACLI: 932,
        NACLSTACK: 933,
        GARGANACL: 934,
        CHARCADET: 935,
        ARMAROUGE: 936,
        CERULEDGE: 937,
        TADBULB: 938,
        BELLIBOLT: 939,
        WATTREL: 940,
        KILOWATTREL: 941,
        MASCHIFF: 942,
        MABOSSTIFF: 943,
        SHROODLE: 944,
        GRAFAIAI: 945,
        BRAMBLIN: 946,
        BRAMBLEGHAST: 947,
        TOEDSCOOL: 948,
        TOEDSCRUEL: 949,
        KLAWF: 950,
        CAPSAKID: 951,
        SCOVILLAIN: 952,
        RELLOR: 953,
        RABSCA: 954,
        FLITTLE: 955,
        ESPATHRA: 956,
        TINKATINK: 957,
        TINKATUFF: 958,
        TINKATON: 959,
        WIGLETT: 960,
        WUGTRIO: 961,
        BOMBIRDIER: 962,
        FINIZEN: 963,
        PALAFIN: 964,
        VAROOM: 965,
        REVAVROOM: 966,
        CYCLIZAR: 967,
        ORTHWORM: 968,
        GLIMMET: 969,
        GLIMMORA: 970,
        GREAVARD: 971,
        HOUNDSTONE: 972,
        FLAMIGO: 973,
        CETODDLE: 974,
        CETITAN: 975,
        VELUZA: 976,
        DONDOZO: 977,
        TATSUGIRI: 978,
        ANNIHILAPE: 979,
        CLODSIRE: 980,
        FARIGIRAF: 981,
        DUDUNSPARCE: 982,
        KINGAMBIT: 983,
        GREAT_TUSK: 984,
        SCREAM_TAIL: 985,
        BRUTE_BONNET: 986,
        FLUTTER_MANE: 987,
        SLITHER_WING: 988,
        SANDY_SHOCKS: 989,
        IRON_TREADS: 990,
        IRON_BUNDLE: 991,
        IRON_HANDS: 992,
        IRON_JUGULIS: 993,
        IRON_MOTH: 994,
        IRON_THORNS: 995,
        FRIGIBAX: 996,
        ARCTIBAX: 997,
        BAXCALIBUR: 998,
        GIMMIGHOUL: 999,
        GHOLDENGO: 1000,
        WO_CHIEN: 1001,
        CHIEN_PAO: 1002,
        TING_LU: 1003,
        CHI_YU: 1004,
        ROARING_MOON: 1005,
        IRON_VALIANT: 1006,
        KORAIDON: 1007,
        MIRAIDON: 1008,
        WALKING_WAKE: 1009,
        IRON_LEAVES: 1010,
        DIPPLIN: 1011,
        POLTCHAGEIST: 1012,
        SINISTCHA: 1013,
        OKIDOGI: 1014,
        MUNKIDORI: 1015,
        FEZANDIPITI: 1016,
        OGERPON: 1017,
        ARCHALUDON: 1018,
        HYDRAPPLE: 1019,
        GOUGING_FIRE: 1020,
        RAGING_BOLT: 1021,
        IRON_BOULDER: 1022,
        IRON_CROWN: 1023,
        TERAPAGOS: 1024,
        PECHARUNT: 1025,
        ALOLA_RATTATA: 2019,
        ALOLA_RATICATE: 2020,
        ALOLA_RAICHU: 2026,
        ALOLA_SANDSHREW: 2027,
        ALOLA_SANDSLASH: 2028,
        ALOLA_VULPIX: 2037,
        ALOLA_NINETALES: 2038,
        ALOLA_DIGLETT: 2050,
        ALOLA_DUGTRIO: 2051,
        ALOLA_MEOWTH: 2052,
        ALOLA_PERSIAN: 2053,
        ALOLA_GEODUDE: 2074,
        ALOLA_GRAVELER: 2075,
        ALOLA_GOLEM: 2076,
        ALOLA_GRIMER: 2088,
        ALOLA_MUK: 2089,
        ALOLA_EXEGGUTOR: 2103,
        ALOLA_MAROWAK: 2105,
        ETERNAL_FLOETTE: 2670,
        GALAR_MEOWTH: 4052,
        GALAR_PONYTA: 4077,
        GALAR_RAPIDASH: 4078,
        GALAR_SLOWPOKE: 4079,
        GALAR_SLOWBRO: 4080,
        GALAR_FARFETCHD: 4083,
        GALAR_WEEZING: 4110,
        GALAR_MR_MIME: 4122,
        GALAR_ARTICUNO: 4144,
        GALAR_ZAPDOS: 4145,
        GALAR_MOLTRES: 4146,
        GALAR_SLOWKING: 4199,
        GALAR_CORSOLA: 4222,
        GALAR_ZIGZAGOON: 4263,
        GALAR_LINOONE: 4264,
        GALAR_DARUMAKA: 4554,
        GALAR_DARMANITAN: 4555,
        GALAR_YAMASK: 4562,
        GALAR_STUNFISK: 4618,
        HISUI_GROWLITHE: 6058,
        HISUI_ARCANINE: 6059,
        HISUI_VOLTORB: 6100,
        HISUI_ELECTRODE: 6101,
        HISUI_TYPHLOSION: 6157,
        HISUI_QWILFISH: 6211,
        HISUI_SNEASEL: 6215,
        HISUI_SAMUROTT: 6503,
        HISUI_LILLIGANT: 6549,
        HISUI_ZORUA: 6570,
        HISUI_ZOROARK: 6571,
        HISUI_BRAVIARY: 6628,
        HISUI_SLIGGOO: 6705,
        HISUI_GOODRA: 6706,
        HISUI_AVALUGG: 6713,
        HISUI_DECIDUEYE: 6724,
        PALDEA_TAUROS: 8128,
        PALDEA_WOOPER: 8194,
        BLOODMOON_URSALUNA: 8901,
      };
      const Y = 15;
      const m = 54;
      const y = 59;
      const v = 86;
      const G = 90;
      const Q = 106;
      const x = 142;
      const b = 148;
      const X = 169;
      const Z = 175;
      const j = 178;
      const q = 184;
      const J = 189;
      const k = 209;
      const _ = 222;
      const $ = 227;
      const ee = 235;
      const ne = 237;
      const te = 246;
      const ce = 253;
      const oe = 258;
      const Oe = 264;
      const Ce = 274;
      const he = 282;
      const le = 283;
      const se = 285;
      const Ee = 295;
      const ae = 304;
      const re = 310;
      const Ae = 323;
      const Le = 340;
      const Ie = 345;
      const ie = 348;
      const we = 350;
      const Re = 356;
      const Ne = 367;
      const Ke = 370;
      const Ue = 371;
      const He = 390;
      const de = 395;
      const ue = 397;
      const Fe = 409;
      const We = 410;
      const Se = 413;
      const Te = 415;
      const De = 418;
      const Me = 419;
      const pe = 434;
      const ge = 455;
      const Be = 457;
      const Ve = 458;
      const ze = 466;
      const Pe = 481;
      const fe = 483;
      const Ye = 484;
      const me = 501;
      const ye = 504;
      const ve = 505;
      const Ge = 509;
      const Qe = 534;
      const xe = 541;
      const be = 546;
      const Xe = 549;
      const Ze = 551;
      const je = 553;
      const qe = 557;
      const Je = 558;
      const ke = 571;
      const _e = 574;
      const $e = 576;
      const en = 577;
      const nn = 586;
      const tn = 587;
      const cn = 589;
      const on = 592;
      const On = 593;
      const Cn = 597;
      const hn = 614;
      const ln = 615;
      const sn = 616;
      const En = 660;
      const an = 661;
      const rn = 662;
      const An = 665;
      const Ln = 666;
      const In = 668;
      const wn = 669;
      const Rn = 677;
      const Nn = 681;
      const Kn = 682;
      const Un = 688;
      const Hn = 693;
      const dn = 695;
      const un = 706;
      const Fn = 710;
      const Wn = 711;
      const Sn = 713;
      const Tn = 717;
      const Dn = 719;
      const Mn = 722;
      const pn = 723;
      const gn = 730;
      const Bn = 731;
      const Vn = 732;
      const zn = 734;
      const Pn = 735;
      const fn = 736;
      const Yn = 737;
      const mn = 738;
      const yn = 739;
      const vn = 741;
      const Gn = 743;
      const Qn = 749;
      const xn = 752;
      const bn = 756;
      const Xn = 776;
      const Zn = 777;
      const jn = 782;
      const qn = 788;
      const Jn = 798;
      const kn = 805;
      const _n = 813;
      const $n = 814;
      const et = 816;
      const nt = 818;
      const tt = 819;
      const ct = 821;
      const ot = 823;
      const Ot = 824;
      const Ct = 825;
      const ht = 826;
      const lt = 828;
      const st = 829;
      const Et = 831;
      const at = 833;
      const rt = 837;
      const At = 838;
      const Lt = 839;
      const It = 844;
      const it = 846;
      const wt = 851;
      const Rt = 888;
      const Nt = 889;
      const Kt = 891;
      const Ut = 894;
      const Ht = 895;
      const dt = 896;
      const ut = 897;
      const Ft = 898;
      const Wt = 902;
      const St = 904;
      const Tt = 905;
      const Dt = 906;
      const Mt = 908;
      const pt = 909;
      const gt = 910;
      const Bt = 912;
      const Vt = 913;
      const zt = 914;
      const Pt = 916;
      const ft = 925;
      const Yt = 927;
      const mt = 928;
      const yt = 930;
      const vt = 932;
      const Gt = 933;
      const Qt = 934;
      const xt = 936;
      const bt = 938;
      const Xt = 939;
      const Zt = 942;
      const jt = 943;
      const qt = 944;
      const Jt = 945;
      const kt = 950;
      const _t = 953;
      const $t = {
        [f.BULBASAUR]: [203, J, Te, yn],
        [f.CHARMANDER]: [we, ft, Te, hn],
        [f.SQUIRTLE]: [y, 400, zn, 619],
        [f.CATERPIE]: [849, 886, 922, 847],
        [f.WEEDLE]: [ln, Y, ge, vt],
        [f.PIDGEY]: [oe, 412, Ke, 848],
        [f.RATTATA]: [159, 707, 425, te],
        [f.SPEAROW]: [Vn, te, Pt, It],
        [f.EKANS]: [vt, we, ae, zt],
        [f.SANDSHREW]: [In, it, En, qt],
        [f.NIDORAN_F]: [Qn, rn, 849, _t],
        [f.NIDORAN_M]: [vt, cn, Qn, 620],
        [f.VULPIX]: [nn, y, ee, Ee],
        [f.ZUBAT]: [Vn, lt, Y, nt],
        [f.ODDISH]: [J, je, zn, b],
        [f.PARAS]: [x, 533, 153, yn],
        [f.VENONAT]: [J, ne, Te, at],
        [f.DIGLETT]: [180, Y, $n, Lt],
        [f.MEOWTH]: [344, Y, 25, 542],
        [f.PSYDUCK]: [Bn, Dt, ue, at],
        [f.MANKEY]: [We, 584, re, Qn],
        [f.GROWLITHE]: [Tn, $e, ee, _],
        [f.POLIWAG]: [ae, 848, We, tt],
        [f.ABRA]: [nn, m, v, xe],
        [f.MACHOP]: [Gt, re, rt, 91],
        [f.BELLSPROUT]: [670, wn, Nn, At],
        [f.TENTACOOL]: [rn, wn, zn, _t],
        [f.GEODUDE]: [Zn, Le, En, Ve],
        [f.PONYTA]: [In, Nn, Y, Ie],
        [f.SLOWPOKE]: [zn, m, at, zt],
        [f.MAGNEMITE]: [ke, Zn, y, jt],
        [f.FARFETCHD]: [$, Qe, Re, At],
        [f.DODUO]: [$n, Dn, Vn, It],
        [f.SEEL]: [_e, zn, ae, On],
        [f.GRIMER]: [He, Z, wn, vt],
        [f.SHELLDER]: [351, 595, rn, 199],
        [f.GASTLY]: [J, ue, De, ht],
        [f.ONIX]: [En, Zn, 485, on],
        [f.DROWZEE]: [139, Q, Nt, 465],
        [f.KRABBY]: [qe, Wn, bt, ve],
        [f.VOLTORB]: [kn, 316, y, De],
        [f.EXEGGCUTE]: [at, qn, pe, 941],
        [f.CUBONE]: [Ve, 453, 426, ft],
        [f.LICKITUNG]: [35, Nn, 789, k],
        [f.KOFFING]: [ye, Q, nn, _t],
        [f.RHYHORN]: [En, Ln, Fn, Ve],
        [f.TANGELA]: [wn, 612, $e, yn],
        [f.KANGASKHAN]: [613, 919, Oe, 70],
        [f.HORSEA]: [746, 525, 543, ct],
        [f.GOLDEEN]: [530, _n, we, bn],
        [f.STARYU]: [ie, zn, nn, at],
        [f.SCYTHER]: [qt, 451, Pe, Gn],
        [f.PINSIR]: [G, x, Ue, te],
        [f.TAUROS]: [In, yt, Wn, Gt],
        [f.MAGIKARP]: [_n, Ht, Kn, 621],
        [f.LAPRAS]: [Q, _e, ve, On],
        [f.DITTO]: [103, 384, 383, 119],
        [f.EEVEE]: [Ce, 687, gn, Qn],
        [f.PORYGON]: [jt, ue, m, 547],
        [f.OMANYTE]: [_e, Te, Fe, On],
        [f.KABUTO]: [it, In, 535, qt],
        [f.AERODACTYL]: [Vn, Ve, Y, qt],
        [f.ARTICUNO]: [ue, ie, dn, j],
        [f.ZAPDOS]: [312, ie, 849, Xt],
        [f.MOLTRES]: [et, ie, j, Tt],
        [f.DRATINI]: [Hn, Vn, Nn, Dn],
        [f.MEWTWO]: [re, nn, Mn, pn],
        [f.MEW]: [pn, nn, ht, ve],
        [f.CHIKORITA]: [b, Et, we, yn],
        [f.CYNDAQUIL]: [De, et, je, Vt],
        [f.TOTODILE]: [10, we, $n, bn],
        [f.SENTRET]: [Pt, X, 610, te],
        [f.HOOTHOOT]: [ie, 841, tn, hn],
        [f.LEDYBA]: [Rn, X, $e, b],
        [f.SPINARAK]: [$e, ge, 381, wn],
        [f.CHINCHOU]: [jt, zn, 522, Ee],
        [f.PICHU]: [kn, Bn, Vn, jt],
        [f.CLEFFA]: [wt, Fe, Ce, 618],
        [f.IGGLYBUFF]: [We, 789, 136, te],
        [f.TOGEPI]: [et, Re, nn, je],
        [f.NATU]: [j, Re, ie, Nt],
        [f.MAREEP]: [y, ke, Un, Ee],
        [f.HOPPIP]: [Vn, wn, b, yn],
        [f.AIPOM]: [Pt, Pe, ce, Ut],
        [f.SUNKERN]: [b, yn, je, gt],
        [f.YANMA]: [De, Te, oe, 847],
        [f.WOOPER]: [fn, Q, Z, tt],
        [f.MURKROW]: [It, Vn, Pt, nt],
        [f.MISDREAVUS]: [wt, nn, ue, ht],
        [f.UNOWN]: [268, Ae, 247, at],
        [f.GIRAFARIG]: [at, 540, Q, tn],
        [f.PINECO]: [369, 680, Zn, En],
        [f.DUNSPARCE]: [35, Qt, yt, te],
        [f.GLIGAR]: [Vn, sn, Re, qt],
        [f.SNUBBULL]: [Oe, G, Y, te],
        [f.QWILFISH]: [840, rn, le, bn],
        [f.SHUCKLE]: [748, Be, Zn, Ft],
        [f.HERACROSS]: [351, an, 334, we],
        [f.SNEASEL]: [lt, He, $n, nt],
        [f.TEDDIURSA]: [lt, Oe, Le, ae],
        [f.SLUGMA]: [Zt, Fe, 77, 464],
        [f.SWINUB]: [Ht, Lt, qt, Ct],
        [f.CORSOLA]: [ye, _e, wn, Ft],
        [f.REMORAID]: [595, 746, be, Xt],
        [f.DELIBIRD]: [530, Vn, Qn, Ct],
        [f.SKARMORY]: [Re, Zn, Cn, 691],
        [f.HOUNDOUR]: [oe, ot, 77, gt],
        [f.PHANPY]: [En, Y, qe, Bt],
        [f.STANTLER]: [Ot, 305, Le, pn],
        [f.SMEARGLE]: [161, Zt, Ft, 465],
        [f.TYROGUE]: [At, 931, re, Bt],
        [f.SMOOCHUM]: [Jn, ue, 740, Ye],
        [f.ELEKID]: [yt, Pt, rt, gn],
        [f.MAGBY]: [jt, Te, 924, un],
        [f.MILTANK]: [Zn, Le, he, fn],
        [f.RAIKOU]: [jt, De, y, ke],
        [f.ENTEI]: [Zt, we, G, qt],
        [f.SUICUNE]: [Q, De, _e, On],
        [f.LARVITAR]: [we, rt, En, on],
        [f.LUGIA]: [wt, me, ye, hn],
        [f.HO_OH]: [Y, G, 414, ut],
        [f.CELEBI]: [at, me, Ae, ze],
        [f.TREECKO]: [De, ct, Xe, ze],
        [f.TORCHIC]: [137, kt, le, Je],
        [f.MUDKIP]: [En, qe, Le, tt],
        [f.POOCHYENA]: [747, Ue, lt, Qn],
        [f.ZIGZAGOON]: [te, 610, In, Pt],
        [f.WURMPLE]: [$, 847, me, _t],
        [f.LOTAD]: [687, qn, y, Ye],
        [f.SEEDOT]: [Y, Qe, 903, ft],
        [f.TAILLOW]: [tn, Oe, Lt, Qn],
        [f.WINGULL]: [88, _n, ie, On],
        [f.RALTS]: [pt, ft, Qn, tn],
        [f.SURSKIT]: [Rn, je, zn, j],
        [f.SHROOMISH]: [Fn, 919, Pe, yn],
        [f.SLAKOTH]: [Oe, We, le, 286],
        [f.NINCADA]: [ge, 565, 663, ve],
        [f.WHISMUR]: [948, pe, An, Tt],
        [f.MAKUHITA]: [Pe, ae, 536, Gn],
        [f.AZURILL]: [Kt, Qt, Y, tt],
        [f.NOSEPASS]: [En, Zn, ie, Jt],
        [f.SKITTY]: [Ot, 495, Pt, Je],
        [f.SABLEYE]: [Q, en, Z, Ft],
        [f.MAWILE]: [Me, Qt, G, Gn],
        [f.ARON]: [Ve, Zn, En, Ft],
        [f.MEDITITE]: [Ot, He, Me, pn],
        [f.ELECTRIKE]: [kn, m, De, y],
        [f.PLUSLE]: [m, Yn, Bn, Ee],
        [f.MINUN]: [y, mn, vn, Ee],
        [f.VOLBEAT]: [$, 680, 778, At],
        [f.ILLUMISE]: [$e, Yn, 601, Ye],
        [f.GULPIN]: [wn, Te, 75, _t],
        [f.CARVANHA]: [423, Y, 793, tt],
        [f.WAILMER]: [wt, zn, ae, mt],
        [f.NUMEL]: [pe, Se, ee, 552],
        [f.TORKOAL]: [ee, Zt, Zn, gt],
        [f.SPOINK]: [ue, k, Jn, Ee],
        [f.SPINDA]: [277, ae, un, Je],
        [f.TRAPINCH]: [Nn, xn, ln, ct],
        [f.CACNEA]: [Te, it, 540, bt],
        [f.SWABLU]: [Re, De, Vn, tn],
        [f.ZANGOOSE]: [Oe, In, te, Pt],
        [f.SEVIPER]: [y, ft, He, Qn],
        [f.LUNATONE]: [Fe, 540, ve, Nt],
        [f.SOLROCK]: [st, qt, ve, _],
        [f.BARBOACH]: [we, Tn, Ht, tt],
        [f.CORPHISH]: [it, Kt, He, ve],
        [f.BALTOY]: [Q, me, Zn, at],
        [f.LILEEP]: [Fe, ye, wn, yn],
        [f.ANORITH]: [an, x, we, qt],
        [f.FEEBAS]: [ie, _e, nn, On],
        [f.CASTFORM]: [tn, gt, se, Ye],
        [f.KECLEON]: [We, we, te, Dn],
        [f.SHUPPET]: [Pe, Pt, $e, Sn],
        [f.DUSKULL]: [Le, We, wn, 923],
        [f.TROPIUS]: [748, Te, qn, yn],
        [f.ABSOL]: [903, Qe, pt, ft],
        [f.WYNAUT]: [Q, zt, 270, mt],
        [f.SNORUNT]: [dn, 305, Te, Qn],
        [f.SPHEAL]: [_n, _e, ae, On],
        [f.CLAMPERL]: [Ht, Wn, Te, On],
        [f.RELICANTH]: [Zn, En, 835, bn],
        [f.LUVDISC]: [$, 392, Yn, ut],
        [f.BAGON]: [Vn, Nn, we, dt],
        [f.BELDUM]: [In, Q, $n, Ge],
        [f.REGIROCK]: [Et, Zn, Q, Ft],
        [f.REGICE]: [Te, wt, Q, _e],
        [f.REGISTEEL]: [Zn, sn, Q, Yt],
        [f.LATIAS]: [Un, be, ct, Ye],
        [f.LATIOS]: [Un, be, ct, Ye],
        [f.KYOGRE]: [zn, 543, 88, Ee],
        [f.GROUDON]: [Et, 670, ee, _],
        [f.RAYQUAZA]: [Je, xn, ct, hn],
        [f.JIRACHI]: [443, Vn, 158, Ge],
        [f.DEOXYS]: [Bt, Te, $e, Nt],
        [f.TURTWIG]: [ve, qt, Ht, yn],
        [f.CHIMCHAR]: [je, Xe, $n, _],
        [f.PIPLUP]: [cn, Jt, Re, On],
        [f.STARLY]: [Y, 544, de, te],
        [f.BIDOOF]: [te, Ae, Kn, Dt],
        [f.KRICKETOT]: [156, At, Et, Ut],
        [f.SHINX]: [Nn, $n, Oe, Ze],
        [f.BUDEW]: [je, fe, b, Ye],
        [f.CRANIDOS]: [we, Fn, Lt, Ie],
        [f.SHIELDON]: [En, Zn, cn, on],
        [f.BURMY]: [Zn, 456, Be, yn],
        [f.COMBEE]: [b, Vn, cn, At],
        [f.PACHIRISU]: [mn, fn, Ke, gn],
        [f.BUIZEL]: [Kt, $n, kt, tt],
        [f.CHERUBI]: [b, wn, je, St],
        [f.SHELLOS]: [zn, et, _e, On],
        [f.DRIFLOON]: [262, 721, ie, hn],
        [f.BUNEARY]: [$n, Y, Ot, Dn],
        [f.GLAMEOW]: [Ke, In, Le, te],
        [f.CHINGLING]: [Pn, 827, Tt, tn],
        [f.STUNKY]: [it, le, Q, lt],
        [f.BRONZOR]: [Q, Jt, 138, Nt],
        [f.BONSLY]: [Et, 349, wn, Ve],
        [f.MIME_JR]: [ie, nn, fn, Nt],
        [f.HAPPINY]: [539, 70, fn, ut],
        [f.CHATOT]: [An, Tt, $, tn],
        [f.SPIRITOMB]: [$e, mn, wn, Sn],
        [f.GIBLE]: [we, ft, En, ln],
        [f.MUNCHLAX]: [Z, Zn, le, ae],
        [f.RIOLU]: [Ot, Me, $n, Gn],
        [f.HIPPOPOTAS]: [Zn, Et, 335, Ft],
        [f.SKORUPI]: [it, lt, $e, nt],
        [f.CROAGUNK]: [lt, 9, Ot, At],
        [f.CARNIVINE]: [wn, Nn, 490, yn],
        [f.FINNEON]: [Ye, zn, _e, 619],
        [f.MANTYKE]: [Bn, 115, De, hn],
        [f.SNOVER]: [In, wn, dn, bt],
        [f.ROTOM]: [wn, je, Bn, Vt],
        [f.UXIE]: [Ae, Zn, Q, vn],
        [f.MESPRIT]: [Ee, ue, Q, Nt],
        [f.AZELF]: [xe, y, nn, Ee],
        [f.DIALGA]: [Un, wt, Q, Mt],
        [f.PALKIA]: [Q, wt, 324, ct],
        [f.HEATRAN]: [Tt, Q, Jt, xt],
        [f.REGIGIGAS]: [286, Q, te, Yt],
        [f.GIRATINA]: [we, dt, Q, Sn],
        [f.CRESSELIA]: [Ae, Xe, fn, Nt],
        [f.PHIONE]: [zn, _e, Bn, Ye],
        [f.MANAPHY]: [zn, _e, Bn, Ye],
        [f.DARKRAI]: [ot, nn, be, b],
        [f.SHAYMIN]: [xt, je, j, Ye],
        [f.ARCEUS]: [Ye, Bt, At, Sn],
        [f.VICTINI]: [Q, Ze, pn, At],
        [f.SNIVY]: [m, 692, Mt, un],
        [f.TEPIG]: [835, Ie, We, At],
        [f.OSHAWOTT]: [$n, 802, Qe, ve],
        [f.PATRAT]: [ce, 138, 224, te],
        [f.LILLIPUP]: [Ue, X, In, Rt],
        [f.PURRLOIN]: [228, 275, $e, nt],
        [f.PANSAGE]: [Y, Nn, G, bt],
        [f.PANSEAR]: [De, gt, et, Tt],
        [f.PANPOUR]: [De, Se, Te, On],
        [f.MUNNA]: [Ae, ue, Te, at],
        [f.PIDOVE]: [442, Pt, Vn, It],
        [f.BLITZLE]: [In, Ot, de, Ie],
        [f.ROGGENROLA]: [Zn, Z, En, on],
        [f.WOOBAT]: [841, me, 596, hn],
        [f.DRILBUR]: [443, Ht, Ge, ln],
        [f.AUDINO]: [267, nn, Ce, 850],
        [f.TIMBURR]: [q, We, Ln, Gn],
        [f.TYMPOLE]: [Kt, In, Le, tt],
        [f.THROH]: [We, ae, re, Qn],
        [f.SAWK]: [We, q, 284, At],
        [f.SEWADDLE]: [Et, 428, Pt, ft],
        [f.VENIPEDE]: [Y, x, vt, Kn],
        [f.COTTONEE]: [Rn, $e, 80, ze],
        [f.PETILIL]: [Ot, An, Dt, je],
        [f.BASCULIN]: [Rt, Ue, Bn, Qn],
        [f.SANDILE]: [lt, In, Nn, nt],
        [f.DARUMAKA]: [We, Tn, G, Je],
        [f.MARACTUS]: [et, Ye, je, ze],
        [f.DWEBBLE]: [153, Et, x, qt],
        [f.SCRAGGY]: [He, Me, we, Bt],
        [f.SIGILYPH]: [me, wt, 822, hn],
        [f.YAMASK]: [wn, 845, ue, ht],
        [f.TIRTOUGA]: [Ht, Wn, En, qt],
        [f.ARCHEN]: [Re, G, Vn, qt],
        [f.TRUBBISH]: [Pt, Q, lt, Yt],
        [f.ZORUA]: [m, nn, ue, ot],
        [f.MINCCINO]: [334, Pt, le, Ut],
        [f.GOTHITA]: [Q, nn, ue, Nt],
        [f.SOLOSIS]: [Jn, pe, ue, 618],
        [f.DUCKLETT]: [Bn, Te, 848, Ye],
        [f.VANILLITE]: [Te, dn, ie, vn],
        [f.DEERLING]: [Pt, St, 35, Gt],
        [f.EMOLGA]: [Re, oe, Ne, Tn],
        [f.KARRABLAST]: [x, Be, In, Gn],
        [f.FOONGUS]: [Rn, $e, 493, yn],
        [f.FRILLISH]: [wn, 845, _e, On],
        [f.ALOMOMOLA]: [_n, 392, 93, Yn],
        [f.JOLTIK]: [88, ke, Te, Ye],
        [f.FERROSEED]: [wn, Zn, Cn, yn],
        [f.KLINK]: [de, In, 560, Gn],
        [f.TYNAMO]: [ye, wn, Nn, Mn],
        [f.ELGYEM]: [at, pe, me, ht],
        [f.LITWICK]: [je, Te, nn, ht],
        [f.AXEW]: [dt, lt, Nn, At],
        [f.CUBCHOO]: [$n, Wn, Y, Bt],
        [f.CRYOGONAL]: [58, dn, De, 740],
        [f.SHELMET]: [Fe, De, Te, On],
        [f.STUNFISK]: [Cn, G, wn, jt],
        [f.MIENFOO]: [442, kt, le, rt],
        [f.DRUDDIGON]: [Nn, Re, xn, Xn],
        [f.GOLETT]: [Ge, We, Lt, 923],
        [f.PAWNIARD]: [He, it, ft, Rt],
        [f.BOUFFALANT]: [ae, 27, Ve, de],
        [f.RUFFLET]: [Vn, nn, oe, 755],
        [f.VULLABY]: [93, Zn, Re, en],
        [f.HEATMOR]: [Te, 316, v, Je],
        [f.DURANT]: [In, an, Y, 783],
        [f.DEINO]: [ot, 841, fe, 941],
        [f.LARVESTA]: [v, xt, Te, Tt],
        [f.COBALION]: [jn, Zn, it, At],
        [f.TERRAKION]: [qt, Lt, it, At],
        [f.VIRIZION]: [pt, yn, it, At],
        [f.TORNADUS]: [Te, Ke, y, hn],
        [f.THUNDURUS]: [Te, 543, jt, Xt],
        [f.RESHIRAM]: [Re, wt, se, ct],
        [f.ZEKROM]: [we, Ot, Hn, 755],
        [f.LANDORUS]: [Et, ln, Re, Vn],
        [f.KYUREM]: [xn, ct, Qn, Ct],
        [f.KELDEO]: [zn, v, _e, On],
        [f.MELOETTA]: [Tt, Ye, It, tn],
        [f.GENESECT]: [te, Ke, Jt, Ee],
        [f.CHESPIN]: [We, 236, it, yn],
        [f.FENNEKIN]: [Jn, nn, v, Tt],
        [f.FROAKIE]: [nn, 802, ot, 324],
        [f.BUNNELBY]: [We, Pt, Oe, te],
        [f.FLETCHLING]: [530, Ke, Ve, Ie],
        [f.SCATTERBUG]: [nn, Rn, Ne, oe],
        [f.LITLEO]: [Te, De, he, Tt],
        [f.FLABEBE]: [Yn, 596, 817, Ye],
        [f.SKIDDO]: [In, 804, Et, yn],
        [f.PANCHAM]: [We, ce, Me, nt],
        [f.FURFROU]: [Pt, ae, 344, Dn],
        [f.ESPURR]: [138, nn, ue, xe],
        [f.HONEDGE]: [Jt, 810, ft, jn],
        [f.SPRITZEE]: [pe, 493, Ce, ut],
        [f.SWIRLIX]: [188, He, Qt, ut],
        [f.INKAY]: [Kn, 893, Q, 355],
        [f.BINACLE]: [$n, Fn, lt, qt],
        [f.SKRELP]: [Q, Un, ie, _t],
        [f.CLAUNCHER]: [ve, 924, 595, 619],
        [f.HELIOPTILE]: [312, gt, Te, tn],
        [f.TYRUNT]: [Hn, de, Ie, 887],
        [f.AMAURA]: [Q, dn, Fe, 602],
        [f.HAWLUCHA]: [$n, In, Vn, nt],
        [f.DEDENNE]: [tn, ce, De, ut],
        [f.CARBINK]: [Zn, En, vn, on],
        [f.GOOMY]: [ye, Q, ie, Mt],
        [f.KLEFKI]: [378, 228, en, 690],
        [f.PHANTUMP]: [663, pe, 236, yn],
        [f.PUMPKABOO]: [663, Nn, lt, yn],
        [f.BERGMITE]: [Et, 369, Zn, Ct],
        [f.NOIBAT]: [j, 787, De, 692],
        [f.XERNEAS]: [be, Nt, wn, Ee],
        [f.YVELTAL]: [fe, Kn, ot, Xn],
        [f.ZYGARDE]: [xn, Be, At, Gn],
        [f.DIANCIE]: [Qt, Zn, En, 602],
        [f.HOOPA]: [pn, Xe, ot, ve],
        [f.VOLCANION]: [gt, ie, Se, 464],
        [f.ROWLET]: [ln, 810, an, At],
        [f.LITTEN]: [ce, $e, ee, _],
        [f.POPPLIO]: [951, zn, 948, Tt],
        [f.PIKIPEK]: [815, 199, Zt, Ut],
        [f.YUNGOOS]: [te, le, Pt, Dn],
        [f.GRUBBIN]: [y, Te, jt, Ye],
        [f.CRABRAWLER]: [Kt, En, He, tt],
        [f.ORICORIO]: [Ye, je, jt, hn],
        [f.CUTIEFLY]: [565, nn, oe, b],
        [f.ROCKRUFF]: [In, Pt, Ht, qt],
        [f.WISHIWASHI]: [Be, Ht, we, Kt],
        [f.MAREANIE]: [it, fn, Zn, 74],
        [f.MUDBRAY]: [Zn, he, En, sn],
        [f.DEWPIDER]: [Kt, 886, Y, Dt],
        [f.FOMANTIS]: [277, Lt, Ln, ft],
        [f.MORELULL]: [ie, yn, 578, xt],
        [f.SALANDIT]: [ce, fe, Un, se],
        [f.STUFFUL]: [We, re, Ln, 923],
        [f.BOUNSWEET]: [$n, Dt, Ot, yn],
        [f.COMFEY]: [ut, Rn, wn, xt],
        [f.ORANGURU]: [817, he, 267, Nt],
        [f.PASSIMIAN]: [ce, He, Y, 781],
        [f.WIMPOD]: [$n, 793, Kt, tt],
        [f.SANDYGAST]: [et, Bn, Z, Ft],
        [f.PYUKUMUKU]: [mt, rn, 391, Ft],
        [f.TYPE_NULL]: [lt, Q, te, Qn],
        [f.MINIOR]: [Te, Vn, Tn, on],
        [f.KOMALA]: [ae, te, le, Bt],
        [f.TURTONATOR]: [Zt, ee, Zn, Un],
        [f.TOGEDEMARU]: [ce, 369, re, Ze],
        [f.MIMIKYU]: [Qt, Pt, fn, Sn],
        [f.BRUXISH]: [424, 425, _n, Wt],
        [f.DRAMPA]: [ae, m, Un, Xn],
        [f.DHELMISE]: [810, wn, Wn, yn],
        [f.JANGMO_O]: [787, 802, Xe, dt],
        [f.TAPU_KOKO]: [Qt, $n, kn, Mn],
        [f.TAPU_LELE]: [ne, De, oe, Jn],
        [f.TAPU_BULU]: [yn, We, Qt, At],
        [f.TAPU_FINI]: [ue, Te, Q, Ye],
        [f.COSMOG]: [At, Ye, _, pn],
        [f.NIHILEGO]: [wn, Ye, Se, _t],
        [f.BUZZWOLE]: [x, Me, 664, Bt],
        [f.PHEROMOSA]: [ue, Mt, ge, Bt],
        [f.XURKITREE]: [316, 203, Ee, jt],
        [f.CELESTEELA]: [Q, Pn, Te, hn],
        [f.KARTANA]: [qt, it, ft, jn],
        [f.GUZZLORD]: [He, mt, ae, 911],
        [f.NECROZMA]: [Ae, _, ht, Xn],
        [f.MAGEARNA]: [wn, Te, Ae, Mt],
        [f.MARSHADOW]: [613, $n, Pe, Gn],
        [f.POIPOLE]: [J, 406, be, ct],
        [f.STAKATAKA]: [485, En, Z, Ft],
        [f.BLACEPHALON]: [De, ue, 836, ht],
        [f.ZERAORA]: [Y, $n, Ze, 781],
        [f.MELTAN]: [Me, We, Le, Mn],
        [f.GROOKEY]: [In, Xn, 804, yn],
        [f.SCORBUNNY]: [te, 137, $n, Ze],
        [f.SOBBLE]: [j, 525, be, On],
        [f.SKWOVET]: [le, ae, Zn, Ut],
        [f.ROOKIDEE]: [Re, Zn, 443, cn],
        [f.BLIPBUG]: [Be, Jn, b, Ee],
        [f.NICKIT]: [mn, 808, vn, ot],
        [f.GOSSIFLEUR]: [Ne, wn, $e, ze],
        [f.WOOLOO]: [st, k, Zn, Dn],
        [f.CHEWTLE]: [425, Fn, ve, bn],
        [f.YAMPER]: [424, Y, 423, gn],
        [f.ROLYCOLY]: [ft, Zn, Le, on],
        [f.APPLIN]: [947, Hn, St, wn],
        [f.SILICOBRA]: [En, zt, 445, 620],
        [f.CRAMORANT]: [qn, 58, et, hn],
        [f.ARROKUDA]: [kt, le, Ht, Wt],
        [f.TOXEL]: [De, 406, An, Tt],
        [f.SIZZLIPEDE]: [Zt, Tn, an, At],
        [f.CLOBBOPUS]: [Pe, Kt, q, tt],
        [f.SINISTEA]: [ye, wt, vn, xt],
        [f.HATENNA]: [Q, nn, Pn, be],
        [f.IMPIDIMP]: [228, $e, en, nt],
        [f.MILCERY]: [nn, 937, Te, be],
        [f.FALINKS]: [Gt, st, Be, Ut],
        [f.PINCURCHIN]: [pe, kn, wn, jt],
        [f.SNOM]: [nn, 58, Te, je],
        [f.STONJOURNER]: [Zn, 271, Fn, on],
        [f.EISCUE]: [$n, Dt, ve, Ct],
        [f.INDEEDEE]: [xt, Jn, nn, ut],
        [f.MORPEKO]: [$n, 793, Y, Bt],
        [f.CUFANT]: [Wn, Z, Gt, Yt],
        [f.DRACOZOLT]: [$n, Hn, Nn, we],
        [f.ARCTOZOLT]: [$n, Wn, In, Ge],
        [f.DRACOVISH]: [$n, Hn, 423, we],
        [f.ARCTOVISH]: [$n, kt, In, Ge],
        [f.DURALUDON]: [y, Zn, Q, Un],
        [f.DREEPY]: [ct, 613, yt, Sn],
        [f.ZACIAN]: [Qt, qt, it, ft],
        [f.ZAMAZENTA]: [st, Zn, ae, At],
        [f.ETERNATUS]: [Zn, ct, _t, Ee],
        [f.KUBFU]: [re, We, Kt, we],
        [f.ZARUDE]: [yn, $e, nt, At],
        [f.REGIELEKI]: [De, y, Te, Vt],
        [f.REGIDRAGO]: [re, m, wt, xn],
        [f.GLASTRIER]: [pe, ae, In, Ct],
        [f.SPECTRIER]: [Te, $e, ue, ht],
        [f.CALYREX]: [yn, Q, Xe, pn],
        [f.ENAMORUS]: [un, wt, me, hn],
        [f.SPRIGATITO]: [Nn, $n, He, nt],
        [f.FUECOCO]: [948, ae, 787, 715],
        [f.QUAXLY]: [we, $n, 689, Ot],
        [f.LECHONK]: [k, yt, Wt, Dn],
        [f.TAROUNTULA]: [Et, x, X, b],
        [f.NYMBLE]: [le, 566, ge, nt],
        [f.PAWMI]: [We, 9, q, Mn],
        [f.TANDEMAUS]: [$, X, fn, ut],
        [f.FIDOUGH]: [Ce, Zn, fn, Pt],
        [f.SMOLIV]: [wn, Te, ie, tn],
        [f.SQUAWKABILLY]: [$e, G, de, te],
        [f.NACLI]: [Zn, 93, Z, on],
        [f.CHARCADET]: [Qe, pn, nn, Sn],
        [f.TADBULB]: [ke, ye, Te, Xt],
        [f.WATTREL]: [De, Ne, oe, Xt],
        [f.MASCHIFF]: [$e, Ue, 707, Qn],
        [f.SHROODLE]: [381, $e, 93, 167],
        [f.BRAMBLIN]: [Ne, wn, St, Rt],
        [f.TOEDSCOOL]: [wn, en, $e, yn],
        [f.KLAWF]: [153, En, qt, ve],
        [f.CAPSAKID]: [wn, qn, 525, Tt],
        [f.RELLOR]: [378, Q, oe, Nt],
        [f.FLITTLE]: [Ae, ue, Re, je],
        [f.TINKATINK]: [Qt, 781, Ln, Ge],
        [f.WIGLETT]: [ve, qe, 403, tt],
        [f.BOMBIRDIER]: [Vn, Y, He, qt],
        [f.FINIZEN]: [$n, We, Lt, tt],
        [f.VAROOM]: [Gt, Ke, yt, vt],
        [f.CYCLIZAR]: [$, yt, le, Xn],
        [f.ORTHWORM]: [fn, 490, Zn, En],
        [f.GLIMMET]: [ie, Te, je, _t],
        [f.GREAVARD]: [709, he, En, Bt],
        [f.FLAMIGO]: [Ot, $n, Vn, At],
        [f.CETODDLE]: [$n, In, Q, we],
        [f.VELUZA]: [it, _n, Ht, pt],
        [f.DONDOZO]: [136, Ht, 93, Ft],
        [f.TATSUGIRI]: [y, Wt, Un, On],
        [f.GREAT_TUSK]: [Et, ee, we, Bt],
        [f.SCREAM_TAIL]: [Tt, Yn, ne, vn],
        [f.BRUTE_BONNET]: [664, wn, G, yn],
        [f.FLUTTER_MANE]: [ne, m, Te, ht],
        [f.SLITHER_WING]: [le, At, Nn, Ot],
        [f.SANDY_SHOCKS]: [ee, y, De, jt],
        [f.IRON_TREADS]: [kt, Le, En, Gn],
        [f.IRON_BUNDLE]: [Te, zn, De, 324],
        [f.IRON_HANDS]: [We, Le, Mn, Ln],
        [f.IRON_JUGULIS]: [ot, Re, De, hn],
        [f.IRON_MOTH]: [Te, oe, Ye, _t],
        [f.IRON_THORNS]: [on, En, Ge, Mn],
        [f.FRIGIBAX]: [xn, we, G, Ct],
        [f.GIMMIGHOUL]: [924, me, Te, ht],
        [f.WO_CHIEN]: [b, ot, yn, wn],
        [f.CHIEN_PAO]: [le, $e, ft, Ct],
        [f.TING_LU]: [En, nt, yn, ln],
        [f.CHI_YU]: [ot, gt, Tt, se],
        [f.ROARING_MOON]: [Nn, Hn, He, nt],
        [f.IRON_VALIANT]: [Mn, Qn, Xe, Qt],
        [f.KORAIDON]: [ft, ee, dt, Xn],
        [f.MIRAIDON]: [y, Xn, kn, ct],
        [f.WALKING_WAKE]: [zn, De, Te, ct],
        [f.IRON_LEAVES]: [b, Ke, qt, ft],
        [f.POLTCHAGEIST]: [ve, zn, 74, vn],
        [f.OKIDOGI]: [We, le, lt, At],
        [f.MUNKIDORI]: [xe, oe, Te, _t],
        [f.FEZANDIPITI]: [840, At, $n, Qt],
        [f.OGERPON]: [St, 156, $n, Yt],
        [f.GOUGING_FIRE]: [kt, Le, _, dt],
        [f.RAGING_BOLT]: [De, m, ee, Vt],
        [f.IRON_BOULDER]: [pt, 903, Et, ft],
        [f.IRON_CROWN]: [De, Xe, pn, Vt],
        [f.TERAPAGOS]: [nn, Q, y, ve],
        [f.PECHARUNT]: [391, Zn, 507, rn],
        [f.ALOLA_RATTATA]: [Pe, 584, Pt, Ut],
        [f.ALOLA_SANDSHREW]: [Cn, 929, Ge, Ct],
        [f.ALOLA_VULPIX]: [nn, $e, m, 740],
        [f.ALOLA_DIGLETT]: [sn, Y, 899, rt],
        [f.ALOLA_MEOWTH]: [mn, Pn, $e, Mt],
        [f.ALOLA_GEODUDE]: [In, Le, Et, te],
        [f.ALOLA_GRIMER]: [He, lt, wn, tt],
        [f.ETERNAL_FLOETTE]: [je, 836, Rn, Ye],
        [f.GALAR_MEOWTH]: [929, le, Me, 783],
        [f.GALAR_PONYTA]: [790, te, de, pn],
        [f.GALAR_SLOWPOKE]: [pe, mn, nn, Tt],
        [f.GALAR_FARFETCHD]: [Re, Qe, cn, jn],
        [f.GALAR_ARTICUNO]: [ue, hn, y, xe],
        [f.GALAR_ZAPDOS]: [Pt, Vn, Re, 755],
        [f.GALAR_MOLTRES]: [Re, J, m, hn],
        [f.GALAR_CORSOLA]: [ve, nn, Ae, ht],
        [f.GALAR_ZIGZAGOON]: [it, Oe, $e, te],
        [f.GALAR_DARUMAKA]: [Ht, 204, We, Je],
        [f.GALAR_YAMASK]: [wn, lt, sn, Sn],
        [f.GALAR_STUNFISK]: [Cn, G, wn, jt],
        [f.HISUI_GROWLITHE]: [453, Ve, ee, we],
        [f.HISUI_VOLTORB]: [y, De, kn, ze],
        [f.HISUI_QWILFISH]: [it, le, wn, bn],
        [f.HISUI_SNEASEL]: [Ot, le, $n, At],
        [f.HISUI_ZORUA]: [nn, ue, $e, 935],
        [f.PALDEA_TAUROS]: [Qn, yt, Dt, Ot],
        [f.PALDEA_WOOPER]: [Q, Et, rn, yn],
        [f.BLOODMOON_URSALUNA]: [De, pe, v, tn],
      };
      const ec = {
        ABILITY_1: 1,
        ABILITY_2: 2,
        ABILITY_HIDDEN: 4,
      };
      const nc = Math.pow(2, 31) - 1;
      const tc = {
        BULBASAUR: 3,
        CHARMANDER: 3,
        SQUIRTLE: 3,
        CATERPIE: 2,
        WEEDLE: 1,
        PIDGEY: 1,
        RATTATA: 1,
        SPEAROW: 1,
        EKANS: 2,
        PIKACHU: 4,
        SANDSHREW: 2,
        NIDORAN_F: 3,
        NIDORAN_M: 3,
        VULPIX: 3,
        ZUBAT: 3,
        ODDISH: 3,
        PARAS: 2,
        VENONAT: 2,
        DIGLETT: 2,
        MEOWTH: 3,
        PSYDUCK: 2,
        MANKEY: 4,
        GROWLITHE: 4,
        POLIWAG: 2,
        ABRA: 4,
        MACHOP: 3,
        BELLSPROUT: 2,
        TENTACOOL: 3,
        GEODUDE: 3,
        PONYTA: 2,
        SLOWPOKE: 3,
        MAGNEMITE: 4,
        FARFETCHD: 2,
        DODUO: 3,
        SEEL: 1,
        GRIMER: 2,
        SHELLDER: 5,
        GASTLY: 4,
        ONIX: 3,
        DROWZEE: 2,
        KRABBY: 3,
        VOLTORB: 2,
        EXEGGCUTE: 3,
        CUBONE: 3,
        LICKITUNG: 3,
        KOFFING: 2,
        RHYHORN: 4,
        TANGELA: 3,
        KANGASKHAN: 4,
        HORSEA: 3,
        GOLDEEN: 2,
        STARYU: 3,
        SCYTHER: 5,
        PINSIR: 4,
        TAUROS: 4,
        MAGIKARP: 4,
        LAPRAS: 4,
        DITTO: 2,
        EEVEE: 3,
        PORYGON: 4,
        OMANYTE: 3,
        KABUTO: 3,
        AERODACTYL: 5,
        ARTICUNO: 5,
        ZAPDOS: 6,
        MOLTRES: 6,
        DRATINI: 4,
        MEWTWO: 8,
        MEW: 5,
        CHIKORITA: 2,
        CYNDAQUIL: 3,
        TOTODILE: 3,
        SENTRET: 1,
        HOOTHOOT: 2,
        LEDYBA: 1,
        SPINARAK: 1,
        CHINCHOU: 2,
        PICHU: 4,
        CLEFFA: 2,
        IGGLYBUFF: 1,
        TOGEPI: 3,
        NATU: 2,
        MAREEP: 2,
        HOPPIP: 2,
        AIPOM: 2,
        SUNKERN: 1,
        YANMA: 3,
        WOOPER: 2,
        MURKROW: 3,
        MISDREAVUS: 3,
        UNOWN: 1,
        GIRAFARIG: 3,
        PINECO: 2,
        DUNSPARCE: 3,
        GLIGAR: 3,
        SNUBBULL: 2,
        QWILFISH: 3,
        SHUCKLE: 3,
        HERACROSS: 5,
        SNEASEL: 4,
        TEDDIURSA: 4,
        SLUGMA: 2,
        SWINUB: 3,
        CORSOLA: 2,
        REMORAID: 2,
        DELIBIRD: 2,
        SKARMORY: 4,
        HOUNDOUR: 3,
        PHANPY: 3,
        STANTLER: 3,
        SMEARGLE: 1,
        TYROGUE: 3,
        SMOOCHUM: 3,
        ELEKID: 3,
        MAGBY: 3,
        MILTANK: 4,
        RAIKOU: 6,
        ENTEI: 6,
        SUICUNE: 6,
        LARVITAR: 4,
        LUGIA: 8,
        HO_OH: 8,
        CELEBI: 5,
        TREECKO: 3,
        TORCHIC: 4,
        MUDKIP: 3,
        POOCHYENA: 2,
        ZIGZAGOON: 2,
        WURMPLE: 1,
        LOTAD: 3,
        SEEDOT: 2,
        TAILLOW: 3,
        WINGULL: 2,
        RALTS: 4,
        SURSKIT: 2,
        SHROOMISH: 3,
        SLAKOTH: 4,
        NINCADA: 4,
        WHISMUR: 2,
        MAKUHITA: 3,
        AZURILL: 4,
        NOSEPASS: 2,
        SKITTY: 1,
        SABLEYE: 2,
        MAWILE: 2,
        ARON: 3,
        MEDITITE: 3,
        ELECTRIKE: 2,
        PLUSLE: 2,
        MINUN: 2,
        VOLBEAT: 2,
        ILLUMISE: 2,
        GULPIN: 1,
        CARVANHA: 3,
        WAILMER: 2,
        NUMEL: 2,
        TORKOAL: 3,
        SPOINK: 2,
        SPINDA: 1,
        TRAPINCH: 3,
        CACNEA: 2,
        SWABLU: 2,
        ZANGOOSE: 4,
        SEVIPER: 3,
        LUNATONE: 3,
        SOLROCK: 3,
        BARBOACH: 2,
        CORPHISH: 3,
        BALTOY: 2,
        LILEEP: 3,
        ANORITH: 3,
        FEEBAS: 4,
        CASTFORM: 1,
        KECLEON: 2,
        SHUPPET: 2,
        DUSKULL: 3,
        TROPIUS: 3,
        ABSOL: 4,
        WYNAUT: 2,
        SNORUNT: 2,
        SPHEAL: 2,
        CLAMPERL: 3,
        RELICANTH: 3,
        LUVDISC: 1,
        BAGON: 4,
        BELDUM: 4,
        REGIROCK: 6,
        REGICE: 5,
        REGISTEEL: 6,
        LATIAS: 7,
        LATIOS: 7,
        KYOGRE: 9,
        GROUDON: 9,
        RAYQUAZA: 9,
        JIRACHI: 7,
        DEOXYS: 7,
        TURTWIG: 3,
        CHIMCHAR: 3,
        PIPLUP: 3,
        STARLY: 3,
        BIDOOF: 2,
        KRICKETOT: 1,
        SHINX: 2,
        BUDEW: 3,
        CRANIDOS: 2,
        SHIELDON: 3,
        BURMY: 2,
        COMBEE: 2,
        PACHIRISU: 2,
        BUIZEL: 2,
        CHERUBI: 1,
        SHELLOS: 3,
        DRIFLOON: 2,
        BUNEARY: 2,
        GLAMEOW: 2,
        CHINGLING: 2,
        STUNKY: 2,
        BRONZOR: 3,
        BONSLY: 2,
        MIME_JR: 2,
        HAPPINY: 2,
        CHATOT: 2,
        SPIRITOMB: 4,
        GIBLE: 4,
        MUNCHLAX: 4,
        RIOLU: 3,
        HIPPOPOTAS: 3,
        SKORUPI: 3,
        CROAGUNK: 2,
        CARNIVINE: 2,
        FINNEON: 1,
        MANTYKE: 2,
        SNOVER: 2,
        ROTOM: 4,
        UXIE: 5,
        MESPRIT: 5,
        AZELF: 6,
        DIALGA: 8,
        PALKIA: 8,
        HEATRAN: 7,
        REGIGIGAS: 7,
        GIRATINA: 8,
        CRESSELIA: 6,
        PHIONE: 4,
        MANAPHY: 7,
        DARKRAI: 7,
        SHAYMIN: 6,
        ARCEUS: 9,
        VICTINI: 6,
        SNIVY: 3,
        TEPIG: 3,
        OSHAWOTT: 3,
        PATRAT: 1,
        LILLIPUP: 3,
        PURRLOIN: 2,
        PANSAGE: 2,
        PANSEAR: 2,
        PANPOUR: 2,
        MUNNA: 2,
        PIDOVE: 1,
        BLITZLE: 2,
        ROGGENROLA: 3,
        WOOBAT: 3,
        DRILBUR: 4,
        AUDINO: 3,
        TIMBURR: 4,
        TYMPOLE: 3,
        THROH: 4,
        SAWK: 4,
        SEWADDLE: 2,
        VENIPEDE: 3,
        COTTONEE: 3,
        PETILIL: 3,
        BASCULIN: 4,
        SANDILE: 4,
        DARUMAKA: 4,
        MARACTUS: 2,
        DWEBBLE: 2,
        SCRAGGY: 3,
        SIGILYPH: 4,
        YAMASK: 3,
        TIRTOUGA: 3,
        ARCHEN: 3,
        TRUBBISH: 2,
        ZORUA: 3,
        MINCCINO: 3,
        GOTHITA: 3,
        SOLOSIS: 3,
        DUCKLETT: 2,
        VANILLITE: 3,
        DEERLING: 2,
        EMOLGA: 2,
        KARRABLAST: 3,
        FOONGUS: 3,
        FRILLISH: 3,
        ALOMOMOLA: 4,
        JOLTIK: 3,
        FERROSEED: 3,
        KLINK: 3,
        TYNAMO: 2,
        ELGYEM: 2,
        LITWICK: 3,
        AXEW: 4,
        CUBCHOO: 2,
        CRYOGONAL: 4,
        SHELMET: 2,
        STUNFISK: 3,
        MIENFOO: 3,
        DRUDDIGON: 4,
        GOLETT: 3,
        PAWNIARD: 4,
        BOUFFALANT: 4,
        RUFFLET: 3,
        VULLABY: 3,
        HEATMOR: 3,
        DURANT: 4,
        DEINO: 4,
        LARVESTA: 4,
        COBALION: 6,
        TERRAKION: 6,
        VIRIZION: 6,
        TORNADUS: 7,
        THUNDURUS: 7,
        RESHIRAM: 8,
        ZEKROM: 8,
        LANDORUS: 7,
        KYUREM: 8,
        KELDEO: 6,
        MELOETTA: 7,
        GENESECT: 6,
        CHESPIN: 3,
        FENNEKIN: 3,
        FROAKIE: 4,
        BUNNELBY: 3,
        FLETCHLING: 3,
        SCATTERBUG: 2,
        LITLEO: 2,
        FLABEBE: 3,
        SKIDDO: 2,
        PANCHAM: 3,
        FURFROU: 3,
        ESPURR: 2,
        HONEDGE: 4,
        SPRITZEE: 2,
        SWIRLIX: 3,
        INKAY: 3,
        BINACLE: 3,
        SKRELP: 2,
        CLAUNCHER: 3,
        HELIOPTILE: 3,
        TYRUNT: 3,
        AMAURA: 2,
        HAWLUCHA: 4,
        DEDENNE: 2,
        CARBINK: 2,
        GOOMY: 4,
        KLEFKI: 3,
        PHANTUMP: 2,
        PUMPKABOO: 2,
        BERGMITE: 3,
        NOIBAT: 3,
        XERNEAS: 8,
        YVELTAL: 8,
        ZYGARDE: 8,
        DIANCIE: 7,
        HOOPA: 7,
        VOLCANION: 7,
        ETERNAL_FLOETTE: 4,
        ROWLET: 3,
        LITTEN: 3,
        POPPLIO: 4,
        PIKIPEK: 2,
        YUNGOOS: 2,
        GRUBBIN: 3,
        CRABRAWLER: 3,
        ORICORIO: 3,
        CUTIEFLY: 3,
        ROCKRUFF: 3,
        WISHIWASHI: 2,
        MAREANIE: 2,
        MUDBRAY: 3,
        DEWPIDER: 3,
        FOMANTIS: 2,
        MORELULL: 2,
        SALANDIT: 3,
        STUFFUL: 3,
        BOUNSWEET: 3,
        COMFEY: 4,
        ORANGURU: 4,
        PASSIMIAN: 4,
        WIMPOD: 3,
        SANDYGAST: 3,
        PYUKUMUKU: 2,
        TYPE_NULL: 5,
        MINIOR: 4,
        KOMALA: 3,
        TURTONATOR: 4,
        TOGEDEMARU: 3,
        MIMIKYU: 4,
        BRUXISH: 4,
        DRAMPA: 4,
        DHELMISE: 4,
        JANGMO_O: 4,
        TAPU_KOKO: 6,
        TAPU_LELE: 7,
        TAPU_BULU: 6,
        TAPU_FINI: 5,
        COSMOG: 7,
        NIHILEGO: 6,
        BUZZWOLE: 6,
        PHEROMOSA: 7,
        XURKITREE: 6,
        CELESTEELA: 6,
        KARTANA: 8,
        GUZZLORD: 6,
        NECROZMA: 8,
        MAGEARNA: 7,
        MARSHADOW: 8,
        POIPOLE: 8,
        STAKATAKA: 6,
        BLACEPHALON: 7,
        ZERAORA: 6,
        MELTAN: 6,
        ALOLA_RATTATA: 1,
        ALOLA_SANDSHREW: 2,
        ALOLA_VULPIX: 3,
        ALOLA_DIGLETT: 2,
        ALOLA_MEOWTH: 3,
        ALOLA_GEODUDE: 3,
        ALOLA_GRIMER: 3,
        GROOKEY: 3,
        SCORBUNNY: 4,
        SOBBLE: 3,
        SKWOVET: 2,
        ROOKIDEE: 3,
        BLIPBUG: 2,
        NICKIT: 1,
        GOSSIFLEUR: 2,
        WOOLOO: 2,
        CHEWTLE: 3,
        YAMPER: 2,
        ROLYCOLY: 3,
        APPLIN: 3,
        SILICOBRA: 3,
        CRAMORANT: 3,
        ARROKUDA: 3,
        TOXEL: 3,
        SIZZLIPEDE: 3,
        CLOBBOPUS: 2,
        SINISTEA: 3,
        HATENNA: 3,
        IMPIDIMP: 3,
        MILCERY: 3,
        FALINKS: 4,
        PINCURCHIN: 3,
        SNOM: 3,
        STONJOURNER: 3,
        EISCUE: 3,
        INDEEDEE: 4,
        MORPEKO: 3,
        CUFANT: 3,
        DRACOZOLT: 5,
        ARCTOZOLT: 4,
        DRACOVISH: 5,
        ARCTOVISH: 4,
        DURALUDON: 5,
        DREEPY: 4,
        ZACIAN: 9,
        ZAMAZENTA: 8,
        ETERNATUS: 10,
        KUBFU: 6,
        ZARUDE: 5,
        REGIELEKI: 6,
        REGIDRAGO: 6,
        GLASTRIER: 6,
        SPECTRIER: 8,
        CALYREX: 8,
        ENAMORUS: 7,
        GALAR_MEOWTH: 3,
        GALAR_PONYTA: 2,
        GALAR_SLOWPOKE: 3,
        GALAR_FARFETCHD: 3,
        GALAR_ARTICUNO: 6,
        GALAR_ZAPDOS: 6,
        GALAR_MOLTRES: 6,
        GALAR_CORSOLA: 3,
        GALAR_ZIGZAGOON: 3,
        GALAR_DARUMAKA: 4,
        GALAR_YAMASK: 3,
        GALAR_STUNFISK: 2,
        HISUI_GROWLITHE: 4,
        HISUI_VOLTORB: 3,
        HISUI_QWILFISH: 4,
        HISUI_SNEASEL: 5,
        HISUI_ZORUA: 3,
        SPRIGATITO: 4,
        FUECOCO: 4,
        QUAXLY: 4,
        LECHONK: 2,
        TAROUNTULA: 1,
        NYMBLE: 3,
        PAWMI: 3,
        TANDEMAUS: 4,
        FIDOUGH: 2,
        SMOLIV: 3,
        SQUAWKABILLY: 2,
        NACLI: 4,
        CHARCADET: 4,
        TADBULB: 3,
        WATTREL: 3,
        MASCHIFF: 3,
        SHROODLE: 2,
        BRAMBLIN: 3,
        TOEDSCOOL: 3,
        KLAWF: 3,
        CAPSAKID: 3,
        RELLOR: 2,
        FLITTLE: 3,
        TINKATINK: 4,
        WIGLETT: 2,
        BOMBIRDIER: 3,
        FINIZEN: 3,
        VAROOM: 4,
        CYCLIZAR: 4,
        ORTHWORM: 4,
        GLIMMET: 4,
        GREAVARD: 3,
        FLAMIGO: 4,
        CETODDLE: 3,
        VELUZA: 4,
        DONDOZO: 4,
        TATSUGIRI: 4,
        GREAT_TUSK: 7,
        SCREAM_TAIL: 5,
        BRUTE_BONNET: 5,
        FLUTTER_MANE: 7,
        SLITHER_WING: 6,
        SANDY_SHOCKS: 6,
        IRON_TREADS: 6,
        IRON_BUNDLE: 6,
        IRON_HANDS: 6,
        IRON_JUGULIS: 6,
        IRON_MOTH: 6,
        IRON_THORNS: 5,
        FRIGIBAX: 4,
        GIMMIGHOUL: 4,
        WO_CHIEN: 5,
        CHIEN_PAO: 7,
        TING_LU: 6,
        CHI_YU: 7,
        ROARING_MOON: 7,
        IRON_VALIANT: 6,
        KORAIDON: 9,
        MIRAIDON: 9,
        WALKING_WAKE: 7,
        IRON_LEAVES: 6,
        POLTCHAGEIST: 4,
        OKIDOGI: 6,
        MUNKIDORI: 6,
        FEZANDIPITI: 5,
        OGERPON: 7,
        GOUGING_FIRE: 7,
        RAGING_BOLT: 7,
        IRON_BOULDER: 7,
        IRON_CROWN: 7,
        TERAPAGOS: 9,
        PECHARUNT: 6,
        PALDEA_TAUROS: 5,
        PALDEA_WOOPER: 3,
        BLOODMOON_URSALUNA: 5,
      };
      const cc = {
        BROCK: 0,
        MISTY: 1,
        LT_SURGE: 2,
        ERIKA: 3,
        JANINE: 4,
        SABRINA: 5,
        BLAINE: 6,
        GIOVANNI: 7,
        FALKNER: 8,
        BUGSY: 9,
        WHITNEY: 10,
        MORTY: 11,
        CHUCK: 12,
        JASMINE: 13,
        PRYCE: 14,
        CLAIR: 15,
        ROXANNE: 16,
        BRAWLY: 17,
        WATTSON: 18,
        FLANNERY: 19,
        NORMAN: 20,
        WINONA: 21,
        TATE: 22,
        LIZA: 23,
        JUAN: 24,
        ROARK: 25,
        GARDENIA: 26,
        MAYLENE: 27,
        CRASHER_WAKE: 28,
        FANTINA: 29,
        BYRON: 30,
        CANDICE: 31,
        VOLKNER: 32,
        CILAN: 33,
        CHILI: 34,
        CRESS: 35,
        CHEREN: 36,
        LENORA: 37,
        ROXIE: 38,
        BURGH: 39,
        ELESA: 40,
        CLAY: 41,
        SKYLA: 42,
        BRYCEN: 43,
        DRAYDEN: 44,
        MARLON: 45,
        VIOLA: 46,
        GRANT: 47,
        KORRINA: 48,
        RAMOS: 49,
        CLEMONT: 50,
        VALERIE: 51,
        OLYMPIA: 52,
        WULFRIC: 53,
        MILO: 54,
        NESSA: 55,
        KABU: 56,
        BEA: 57,
        ALLISTER: 58,
        OPAL: 59,
        BEDE: 60,
        GORDIE: 61,
        MELONY: 62,
        PIERS: 63,
        MARNIE: 64,
        RAIHAN: 65,
        KATY: 66,
        BRASSIUS: 67,
        IONO: 68,
        KOFU: 69,
        LARRY: 70,
        RYME: 71,
        TULIP: 72,
        GRUSHA: 73,
        LORELEI: 74,
        BRUNO: 75,
        AGATHA: 76,
        LANCE: 77,
        WILL: 78,
        KOGA: 79,
        KAREN: 80,
        SIDNEY: 81,
        PHOEBE: 82,
        GLACIA: 83,
        DRAKE: 84,
        AARON: 85,
        BERTHA: 86,
        FLINT: 87,
        LUCIAN: 88,
        SHAUNTAL: 89,
        MARSHAL: 90,
        GRIMSLEY: 91,
        CAITLIN: 92,
        MALVA: 93,
        SIEBOLD: 94,
        WIKSTROM: 95,
        DRASNA: 96,
        HALA: 97,
        MOLAYNE: 98,
        OLIVIA: 99,
        ACEROLA: 100,
        KAHILI: 101,
        MARNIE_ELITE: 102,
        NESSA_ELITE: 103,
        BEA_ELITE: 104,
        ALLISTER_ELITE: 105,
        RAIHAN_ELITE: 106,
        RIKA: 107,
        POPPY: 108,
        LARRY_ELITE: 109,
        HASSEL: 110,
        CRISPIN: 111,
        AMARYS: 112,
        LACEY: 113,
        DRAYTON: 114,
        BLUE: 115,
        RED: 116,
        LANCE_CHAMPION: 117,
        STEVEN: 118,
        WALLACE: 119,
        CYNTHIA: 120,
        ALDER: 121,
        IRIS: 122,
        DIANTHA: 123,
        HAU: 124,
        LEON: 125,
        GEETA: 126,
        NEMONA: 127,
        KIERAN: 128,
        CLASSIC_VICTORY: 129,
        ROCKET_BOSS_GIOVANNI_1: 130,
        ROCKET_BOSS_GIOVANNI_2: 131,
        MAXIE: 132,
        MAXIE_2: 133,
        ARCHIE: 134,
        ARCHIE_2: 135,
        CYRUS: 136,
        CYRUS_2: 137,
        GHETSIS: 138,
        GHETSIS_2: 139,
        LYSANDRE: 140,
        LYSANDRE_2: 141,
        LUSAMINE: 142,
        LUSAMINE_2: 143,
        GUZMA: 144,
        GUZMA_2: 145,
        ROSE: 146,
        ROSE_2: 147,
        PENNY: 148,
        PENNY_2: 149,
        KUKUI: 150,
        MUSTARD: 151,
      };
      const oc = {
        REGULAR: 0,
        PLUS: 1,
        PREMIUM: 2,
        GOLDEN: 3,
      };
      const Oc = Object.fromEntries(Object.entries(oc).map(([e, n]) => [n, e]));
      const Cc = Object.fromEntries(Object.entries(oc).map(([e, n]) => [n, e]));
      const hc = Object.fromEntries(Object.entries(oc).map(([e, n]) => [n, e]));
      function lc() {
        const e = document.getElementById("layoutContainer");
        if (!e) {
          console.error("Element with id 'settingsContainer' not found.");
          return;
        }
        const n = document.createElement("div");
        n.id = "accountScreen";
        n.className = "container";
        n.style.display = "none";
        e.appendChild(n);
        const t = K(
          [
            "Achievements",
            "Starters",
            "Gamemodes",
            "Vouchers",
            "Voucher Unlocks",
            "Egg MOD",
            "Gamestats",
            "Egg Pity",
            "Unlock Pity",
          ].map((e) => ({
            value: e.toLowerCase(),
            text: e,
          })),
          (e) => {
            o(e);
          },
          "accountOptionsSelect",
        );
        n.appendChild(t);
        const c = document.createElement("div");
        function o(e) {
          c.innerHTML = "";
          switch (e) {
            case "achievements":
              (function (e) {
                const n = new i();
                const t = B("achievementDate");
                const c = document.createElement("button");
                c.id = "unlockAllButton";
                c.textContent = "Unlock All";
                c.addEventListener("click", async function () {
                  this.blur();
                  const e = document.getElementById("unlockAllButton");
                  e.disabled = true;
                  try {
                    await D.allAchievements();
                    setTimeout(() => {
                      e.disabled = false;
                    }, 5000);
                  } catch (n) {
                    console.error(n);
                    e.disabled = false;
                  }
                });
                e.appendChild(t);
                e.appendChild(c);
                e.appendChild(n.getElement());
              })(c);
              break;
            case "starters":
              (function (e) {
                const n = new i();
                function t(e, n, t, c) {
                  const o = new w(e);
                  const O = new g();
                  const C = R(`${e}Input`, n, t, c);
                  O.addElement(C);
                  o.addElement(O.getElement());
                  return o.getElement();
                }
                const c = new w("Select Starter");
                const o = K(
                  ["All", ...Object.keys(tc)].map((e) => ({
                    value: e.toLowerCase(),
                    text: e,
                  })),
                  (e) => {
                    if (e.toLowerCase() === "all") {
                      return;
                    }
                    const n = e.toUpperCase();
                    const t = f[n].toString();
                    const { dexData: c, starterData: o } =
                      D.achvUnlocker.currentScene.gameData;
                    if (c[t]) {
                      const e = c[t];
                      ["Hp", "Atk", "Def", "SpAtk", "SpDef", "Spd"].forEach(
                        (n, t) => {
                          const c = document.getElementById(`IV_${n}`);
                          if (c && e.ivs?.[t] != null) {
                            c.value = e.ivs[t];
                          }
                        },
                      );
                      document.getElementById("SeenCountInput").intValue =
                        e.seenCount ?? 0;
                      document.getElementById("CaughtCountInput").intValue =
                        e.caughtCount ?? 0;
                      document.getElementById("HatchedCountInput").intValue =
                        e.hatchedCount ?? 0;
                    }
                    if (o[t]) {
                      const e = o[t];
                      document.getElementById("CandysInput").intValue =
                        e.candyCount ?? 0;
                      document.getElementById("FriendshipInput").intValue =
                        e.friendship ?? 0;
                      document.getElementById("ValueReductionInput").intValue =
                        e.valueReduction ?? 0;
                    }
                  },
                  "selectPokemonSpecies",
                );
                c.addElement(o);
                const O = (() => {
                  const e = new w("IVs");
                  const n = document.createElement("div");
                  n.style.display = "flex";
                  n.style.flexDirection = "column";
                  n.style.gap = "4px";
                  ["Hp", "Atk", "Def", "SpAtk", "SpDef", "Spd"].forEach((e) => {
                    const t = new w(e);
                    t.getElement().style.maxWidth = "60px";
                    const c = new g();
                    const o = R(
                      `IV_${e}`,
                      Number.MIN_SAFE_INTEGER,
                      31,
                      Number.MAX_SAFE_INTEGER,
                    );
                    c.addElement(o);
                    t.addElement(c.getElement());
                    n.appendChild(t.getElement());
                  });
                  e.addElement(n);
                  return e.getElement();
                })();
                const C = t("Candys", Number.MIN_SAFE_INTEGER, 999, 999);
                const h = t(
                  "Friendship",
                  Number.MIN_SAFE_INTEGER,
                  Number.MAX_SAFE_INTEGER,
                  Number.MAX_SAFE_INTEGER,
                );
                const l = t("ValueReduction", Number.MIN_SAFE_INTEGER, 10, 99);
                const s = t("SeenCount", 0, 1, nc);
                const E = t("CaughtCount", 0, 1, nc);
                const a = t("HatchedCount", 0, 1, nc);
                const r = document.createElement("button");
                r.id = "unlockAllButton";
                r.textContent = "⚠️ Save ⚠️";
                r.addEventListener("click", function () {
                  r.blur();
                  const e = document.getElementById("unlockAllButton");
                  e.disabled = true;
                  try {
                    const n = ["Hp", "Atk", "Def", "SpAtk", "SpDef", "Spd"].map(
                      (e) => {
                        const n = document.getElementById(`IV_${e}`);
                        return (n && n.intValue) || 0;
                      },
                    );
                    const t = document.getElementById("CandysInput").intValue;
                    const c =
                      document.getElementById("FriendshipInput").intValue;
                    const o = document.getElementById(
                      "ValueReductionInput",
                    ).intValue;
                    const O =
                      document.getElementById("SeenCountInput").intValue;
                    const C =
                      document.getElementById("CaughtCountInput").intValue;
                    const h =
                      document.getElementById("HatchedCountInput").intValue;
                    const l = document
                      .getElementById("selectPokemonSpecies")
                      .value.toUpperCase();
                    const { dexData: s, starterData: E } =
                      D.achvUnlocker.currentScene.gameData;
                    if (l === "ALL") {
                      Object.keys(s).forEach((e) => {
                        const t = s[e];
                        t.seenAttr = BigInt(Number.MAX_SAFE_INTEGER);
                        t.caughtAttr = BigInt(Number.MAX_SAFE_INTEGER);
                        t.natureAttr = z;
                        t.seenCount = O;
                        t.caughtCount = C;
                        t.hatchedCount = h;
                        t.ivs = [...n];
                      });
                      Object.keys(E).forEach((e) => {
                        const n = E[e];
                        n.moveset = $t[e] || null;
                        n.eggMoves = $t.hasOwnProperty(e) ? 15 : 0;
                        n.candyCount = t;
                        n.friendship = c;
                        n.abilityAttr =
                          ec.ABILITY_1 | ec.ABILITY_2 | ec.ABILITY_HIDDEN;
                        n.passiveAttr = P.includes(e) ? 0 : 3;
                        n.valueReduction = o;
                        n.classicWinCount = isNaN(n.classicWinCount)
                          ? 1
                          : n.classicWinCount + 1;
                      });
                      U("All starters modded!");
                    } else {
                      const e = f[l].toString();
                      if (s[e]) {
                        const t = s[e];
                        t.seenAttr = BigInt(Number.MAX_SAFE_INTEGER);
                        t.caughtAttr = BigInt(Number.MAX_SAFE_INTEGER);
                        t.natureAttr = z;
                        t.seenCount = O;
                        t.caughtCount = C;
                        t.hatchedCount = h;
                        t.ivs = [...n];
                      }
                      if (E[e]) {
                        const n = E[e];
                        n.moveset = $t[e] || null;
                        n.eggMoves = $t.hasOwnProperty(e) ? 15 : 0;
                        n.candyCount = t;
                        n.friendship = c;
                        n.abilityAttr =
                          ec.ABILITY_1 | ec.ABILITY_2 | ec.ABILITY_HIDDEN;
                        n.passiveAttr = P.includes(e) ? 0 : 3;
                        n.valueReduction = o;
                        n.classicWinCount = isNaN(n.classicWinCount)
                          ? 1
                          : n.classicWinCount + 1;
                      }
                      const a = () => {
                        const e = D.achvUnlocker.currentScene.ui.getHandler();
                        const { cursor: n } = e;
                        const t = n === 0 ? 1 : n - 1;
                        e.setCursor(t);
                        e.setCursor(n);
                      };
                      if (
                        Phaser.Display.Canvas.CanvasPool.pool[0].parent.game.scene.keys.battle.ui.getHandler()
                          .__proto__.constructor.name ===
                        "StarterSelectUiHandler"
                      ) {
                        a();
                      }
                      U(`Only ${l} modded!`);
                    }
                    D.achvUnlocker.save();
                    setTimeout(() => {
                      e.disabled = false;
                    }, 5000);
                  } catch (n) {
                    console.error("Error unlocking starters:", n);
                    e.disabled = false;
                  }
                });
                e.appendChild(c.getElement());
                const A = document.createElement("div");
                A.style.display = "flex";
                A.style.marginBottom = "8px";
                const L = document.createElement("div");
                L.style.display = "flex";
                L.style.flexDirection = "column";
                L.appendChild(O);
                const I = document.createElement("div");
                I.style.display = "flex";
                I.style.flexDirection = "column";
                I.appendChild(C);
                I.appendChild(h);
                I.appendChild(l);
                I.appendChild(s);
                I.appendChild(E);
                I.appendChild(a);
                A.appendChild(L);
                A.appendChild(I);
                e.appendChild(A);
                r.style.gap = "8px";
                e.appendChild(r);
                e.appendChild(n.getElement());
              })(c);
              break;
            case "gamemodes":
              (function (e) {
                const n = new i();
                const t = D.achvUnlocker.currentScene.gameData.unlocks;
                function c(e, n) {
                  const c = new w(
                    V[e]
                      .toLowerCase()
                      .split("_")
                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                      .join(" "),
                  );
                  const o = new g();
                  const O = p(`gamemodeCheckbox-${e}`, n, (n) => {
                    t[e] = n;
                  });
                  o.addElement(O);
                  c.addElement(o.getElement());
                  return c.getElement();
                }
                for (const o of Object.keys(t)) {
                  const n = c(o, t[o]);
                  e.appendChild(n);
                }
                e.appendChild(n.getElement());
              })(c);
              break;
            case "vouchers":
              (function (e) {
                const n = new i();
                const t = D.achvUnlocker.currentScene;
                const c = t.gameData.voucherCounts;
                function o(e, n) {
                  const o = new w(
                    Oc[e]
                      .toLowerCase()
                      .split("_")
                      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                      .join(" "),
                  );
                  const O = new g();
                  const C = R(
                    `voucherNumberInput-${e}`,
                    0,
                    n,
                    Math.pow(2, 31) - 1,
                    (n) => {
                      c[e] = n;
                      const o = t.ui.getHandler();
                      if (o.constructor.name === "EggGachaUiHandler") {
                        o.updateVoucherCounts();
                      }
                    },
                  );
                  O.addElement(C);
                  o.addElement(O.getElement());
                  return o.getElement();
                }
                for (const O of Object.keys(c)) {
                  const n = o(O, c[O]);
                  e.appendChild(n);
                }
                e.appendChild(n.getElement());
              })(c);
              break;
            case "voucher unlocks":
              (function (e) {
                const n = new i();
                const t = B("voucherDate");
                const c = document.createElement("button");
                c.id = "unlockAllButton";
                c.textContent = "Unlock All";
                c.addEventListener("click", async function () {
                  this.blur();
                  const e = document.getElementById("unlockAllButton");
                  e.disabled = true;
                  try {
                    const n = document.getElementById("voucherDate").value;
                    const t = new Date(n).getTime();
                    U(`Date: ${n}, Timestamp: ${t}`);
                    const c = t;
                    D.achvUnlocker.currentScene.gameData.voucherUnlocks =
                      Object.keys(cc).reduce((e, n) => {
                        e[n] = c;
                        return e;
                      }, {});
                    D.achvUnlocker.save();
                    U("All vouchers unlocked!");
                    setTimeout(() => {
                      e.disabled = false;
                    }, 5000);
                  } catch (n) {
                    console.error(n);
                    e.disabled = false;
                  }
                });
                e.appendChild(t);
                e.appendChild(c);
                e.appendChild(n.getElement());
              })(c);
              break;
            case "egg mod":
              (function (e) {
                const n = new i();
                e.appendChild(n.getElement());
              })(c);
              break;
            case "gamestats":
              (function (e) {
                const n = new i();
                e.appendChild(n.getElement());
              })(c);
              break;
            case "egg pity":
              (function (e) {
                const n = D.achvUnlocker.currentScene.gameData.eggPity;
                n.forEach((t, c) => {
                  const o = (function (e, t) {
                    const c = new w(
                      Cc[e]
                        .toLowerCase()
                        .split("_")
                        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                        .join(" "),
                    );
                    const o = new g();
                    const O = R(
                      `eggNumberInput-${e}`,
                      0,
                      t,
                      Math.pow(2, 31) - 1,
                    );
                    O.intValue = t;
                    const C = document.createElement("button");
                    C.className = "set-button";
                    C.innerHTML =
                      '<span class="material-symbols-outlined">play_arrow</span>';
                    C.addEventListener("click", function () {
                      C.blur();
                      const t = document.getElementById(
                        `eggNumberInput-${e}`,
                      ).intValue;
                      n[parseInt(e)] = t;
                    });
                    o.addElement(O);
                    o.addElement(C);
                    c.addElement(o.getElement());
                    return c.getElement();
                  })(c, t);
                  e.appendChild(o);
                });
              })(c);
              break;
            case "unlock pity":
              (function (e) {
                const n = D.achvUnlocker.currentScene.gameData.unlockPity;
                n.forEach((t, c) => {
                  const o = (function (e, t) {
                    const c = new w(
                      hc[e]
                        .toLowerCase()
                        .split("_")
                        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                        .join(" "),
                    );
                    const o = new g();
                    const O = R(
                      `unlockNumberInput-${e}`,
                      0,
                      t,
                      Math.pow(2, 31) - 1,
                    );
                    const C = document.createElement("button");
                    C.className = "set-button";
                    C.innerHTML =
                      '<span class="material-symbols-outlined">play_arrow</span>';
                    C.addEventListener("click", function () {
                      C.blur();
                      const t = document.getElementById(
                        `unlockNumberInput-${e}`,
                      ).intValue;
                      n[parseInt(e)] = t;
                    });
                    o.addElement(O);
                    o.addElement(C);
                    c.addElement(o.getElement());
                    return c.getElement();
                  })(c, t);
                  e.appendChild(o);
                });
              })(c);
              break;
            default:
              console.error("Unknown layout selected.");
          }
        }
        c.id = "subLayoutContainer";
        n.appendChild(c);
        console.log("Account screen initialized with dropdown and sublayouts.");
        n.style.display = "flex";
        o("achievements");
      }
      document.addEventListener("DOMContentLoaded", () => {
        lc();
      });
      let sc = 0;
      function Ec() {
        console.log("Initializing popup");
        const e = document.createElement("link");
        e.rel = "stylesheet";
        e.href =
          "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
        e.onload = () => console.log("Material Icons stylesheet loaded.");
        e.onerror = () =>
          console.error("Failed to load Material Icons stylesheet.");
        document.head.appendChild(e);
        (function () {
          const e = document.getElementById("layoutContainer");
          if (!e) {
            console.error("Element with id 'layoutContainer' not found.");
            return;
          }
          const n = document.createElement("div");
          n.id = "rollScreen";
          n.className = "container";
          n.style.display = "none";
          e.appendChild(n);
          const t = new i();
          const c = (e, n, t, c, o, O, C) => {
            const h = new w(e);
            const l = new g();
            const s = p(C, false, (n) => {
              console.log(`${e} checkbox:`, n);
            });
            const E = R(n, t, c, o);
            E.classList.add("ele-container");
            const a = document.createElement("button");
            a.className = "set-button";
            a.innerHTML =
              '<span class="material-symbols-outlined">play_arrow</span>';
            a.addEventListener("click", () => {
              a.blur();
              O(E.firstChild.intValue);
            });
            l.addElement(s);
            l.addElement(E);
            l.addElement(a);
            h.addElement(l.getElement());
            return h;
          };
          const o = -Math.pow(2, 31);
          const O = Math.pow(2, 31) - 1;
          const C = -Math.pow(2, 53);
          const h = Math.pow(2, 53) - 1;
          const l = c(
            "Luck",
            "luck-input",
            o,
            99,
            O,
            (e) => {
              D.setTeamLuck(e);
            },
            "luckCheckbox",
          );
          const s = c(
            "Money",
            "money-input",
            C,
            10000,
            h,
            (e) => {
              D.setMoney(e);
            },
            "moneyCheckbox",
          );
          const E = c(
            "Count",
            "rollCount-input",
            o,
            10,
            O,
            (e) => {
              D.setRollCount(e);
            },
            "rollCountCheckbox",
          );
          const a = new g();
          const r = new w("Tier");
          const A = K(
            Object.keys(H).map((e) => ({
              value: H[e],
              text: e,
            })),
            (e) => {
              console.log("Selected item tier:", e);
            },
            "itemTierSelect",
          );
          const L = new w("Lock");
          const I = new g();
          const N = p("lockShopToggle", false, (e) => {
            D.setLockRarities(e);
            U((e ? "Locked" : "Unlocked") + " Shop!");
          });
          I.addElement(N);
          L.addElement(I.getElement());
          const d = new g();
          let u = false;
          const F = p("itemTierCheckbox", false, (e) => {
            const n = document.getElementById("lockShopToggle");
            if (n) {
              if (e) {
                u = n.checked;
                n.checked = true;
                n.disabled = true;
                n.dispatchEvent(new Event("change"));
              } else {
                n.checked = u;
                n.disabled = false;
                n.dispatchEvent(new Event("change"));
              }
            }
          });
          d.addElement(F);
          d.addElement(A);
          r.addElement(d.getElement());
          a.addElement(L.getElement());
          a.addElement(r.getElement());
          const W = a.getElement();
          W.className = "flex-end";
          t.addRow(l.getElement());
          t.addRow(s.getElement());
          t.addRow(E.getElement());
          t.addRow(W);
          const S = document.createElement("fieldset");
          S.className = "settings-fieldset";
          const T = document.createElement("legend");
          T.id = "settingsToggle";
          T.style.cursor = "pointer";
          T.style.userSelect = "none";
          T.innerHTML =
            '\n        <span class="material-symbols-outlined">settings</span>\n        <span class="material-symbols-outlined" id="settingsToggleIcon">keyboard_arrow_down</span>\n    ';
          const M = document.createElement("div");
          M.id = "settingsContent";
          M.style.display = "block";
          M.appendChild(t.getElement());
          S.appendChild(T);
          S.appendChild(M);
          const B = document.createElement("button");
          B.id = "rollActionButton";
          B.className = "roll-button";
          B.textContent = "Roll";
          const V = document.createElement("div");
          V.className = "single-line-container";
          V.appendChild(B);
          n.appendChild(S);
          n.appendChild(V);
          n.style.display = "flex";
          const z = document.getElementById("settingsToggleIcon");
          T.addEventListener("click", () => {
            const e = M.style.display !== "none";
            M.style.display = e ? "none" : "block";
            z.textContent = e ? "keyboard_arrow_down" : "";
            z.hidden = !!e;
            if (e) {
              B.innerHTML =
                '<span class="material-icons-outlined">casino</span>';
              B.classList.add("round-roll");
              n.style.flexGrow = 0;
            } else {
              B.textContent = "Roll";
              B.classList.remove("round-roll");
              n.style.flexGrow = 1;
            }
          });
          B.addEventListener("click", async function () {
            this.blur();
            B.disabled = true;
            try {
              const e =
                parseInt(document.getElementById("luck-input").intValue, 10) ||
                0;
              const n =
                parseInt(document.getElementById("money-input").intValue, 10) ||
                0;
              const t =
                parseInt(
                  document.getElementById("rollCount-input").intValue,
                  10,
                ) || 0;
              const c = parseInt(
                document.getElementById("itemTierSelect").value,
              );
              const o = document.getElementById("itemTierCheckbox").checked;
              const O = document.getElementById("lockShopToggle").checked;
              const C = document.getElementById("moneyCheckbox").checked;
              const h = document.getElementById("rollCountCheckbox").checked;
              const l = document.getElementById("luckCheckbox").checked;
              await D.roll(
                o ? c : null,
                O,
                C ? n : null,
                h ? t : null,
                l ? e : null,
              );
              setTimeout(() => {
                B.disabled = false;
              }, 1250);
            } catch (e) {
              U(e);
              console.error(e);
              B.disabled = false;
            }
          });
        })();
        lc();
        (function () {
          const e = document.getElementById("layoutContainer");
          if (!e) {
            console.error("Element with id 'settingsContainer' not found.");
            return;
          }
          const n = document.createElement("div");
          n.id = "dataScreen";
          n.style.display = "none";
          e.appendChild(n);
        })();
        document
          .getElementById("rollButton")
          .addEventListener("click", function () {
            this.blur();
            sc = 0;
            Ac("rollButton");
            ac("rollScreen");
          });
        document
          .getElementById("accountButton")
          .addEventListener("click", function () {
            this.blur();
            sc = 1;
            Ac("accountButton");
            ac("accountScreen");
          });
        document
          .getElementById("dataButton")
          .addEventListener("click", function () {
            this.blur();
            sc = 2;
            Ac("dataButton");
            ac("dataScreen");
          });
        const n = document.getElementById("popupContainer");
        const t = document.getElementById("logoContainer");
        let c;
        let o;
        let O = false;
        function C(e, t) {
          const O = e - c;
          const C = t - o;
          const h = window.innerWidth - n.offsetWidth;
          const l = window.innerHeight - n.offsetHeight;
          n.style.left = `${Math.min(Math.max(O, 0), h)}px`;
          n.style.top = `${Math.min(Math.max(C, 0), l)}px`;
        }
        t.addEventListener("mousedown", (e) => {
          O = true;
          c = e.clientX - n.offsetLeft;
          o = e.clientY - n.offsetTop;
          t.style.cursor = "grabbing";
        });
        document.addEventListener("mousemove", (e) => {
          if (O) {
            C(e.clientX, e.clientY);
          }
        });
        document.addEventListener("mouseup", () => {
          O = false;
          t.style.cursor = "grab";
        });
        t.addEventListener(
          "touchstart",
          (e) => {
            O = true;
            const t = e.touches[0];
            c = t.clientX - n.offsetLeft;
            o = t.clientY - n.offsetTop;
          },
          {
            passive: true,
          },
        );
        document.addEventListener(
          "touchmove",
          (e) => {
            if (O) {
              const n = e.touches[0];
              C(n.clientX, n.clientY);
            }
          },
          {
            passive: true,
          },
        );
        document.addEventListener("touchend", () => {
          O = false;
        });
        window.addEventListener("resize", () => {
          const e = n.getBoundingClientRect();
          const t = window.innerWidth - n.offsetWidth;
          const c = window.innerHeight - n.offsetHeight;
          const o = Math.min(Math.max(e.left, 0), t);
          const O = Math.min(Math.max(e.top, 0), c);
          n.style.left = `${o}px`;
          n.style.top = `${O}px`;
        });
        const h = document.getElementById("actionToggle");
        const l = document.getElementById("featureButtons");
        const s = document.getElementById("socialToggle");
        const E = document.getElementById("socialLinks");
        const a = document.getElementById("settingsContainer");
        h.addEventListener("click", function () {
          this.blur();
          const e = l.classList.toggle("active");
          a.style.display = e ? "flex" : "none";
          h.innerHTML = e
            ? '<span class="material-icons-outlined">chevron_left</span>'
            : '<span class="material-icons-outlined">chevron_right</span>';
          if (e) {
            (function () {
              switch (sc) {
                case 0:
                  ac("rollScreen");
                  break;
                case 1:
                  ac("accountScreen");
                  break;
                case 2:
                  ac("dataScreen");
              }
            })();
          } else {
            rc();
          }
        });
        s.addEventListener("click", function () {
          this.blur();
          E.classList.toggle("active");
          s.innerHTML = E.classList.contains("active")
            ? '<span class="material-icons-outlined">keyboard_arrow_up</span>'
            : '<span class="material-icons-outlined">keyboard_arrow_down</span>';
        });
        document
          .getElementById("videoButton")
          .addEventListener("click", function () {
            this.blur();
            window.open("https://youtu.be/L_c9TXFbDIM", "_blank");
          });
        document
          .getElementById("codeButton")
          .addEventListener("click", function () {
            this.blur();
            window.open("https://github.com/PokeRogueMOD/JsPoRoMOD", "_blank");
          });
        document
          .getElementById("twitchButton")
          .addEventListener("click", function () {
            this.blur();
            window.open("https://www.twitch.tv/mpb_rip", "_blank");
          });
        Ac("rollButton");
        console.log("Popup initialized");
      }
      function ac(e) {
        rc();
        document.getElementById(e).style.display = "flex";
      }
      function rc() {
        document.getElementById("rollScreen").style.display = "none";
        document.getElementById("accountScreen").style.display = "none";
        document.getElementById("dataScreen").style.display = "none";
      }
      function Ac(e) {
        document.querySelectorAll(".icon-button").forEach((e) => {
          e.classList.remove("selected");
        });
        document.getElementById(e).classList.add("selected");
      }
      document.addEventListener("DOMContentLoaded", () => {
        Ec();
      });
      (function () {
        if (
          !document.querySelector(
            'link[href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"]',
          )
        ) {
          const e = document.createElement("link");
          e.href =
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";
          e.rel = "stylesheet";
          document.head.appendChild(e);
          const n = document.createElement("script");
          n.src =
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
          document.body.appendChild(n);
        }
      })();
      (function () {
        if (
          !document.querySelector(
            'link[href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"]',
          )
        ) {
          const e = document.createElement("link");
          e.href =
            "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
          e.rel = "stylesheet";
          document.head.appendChild(e);
        }
      })();
      document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div class="popup-container" id="popupContainer">
            <table class="popup-table">
                <tr>
                    <td class="logo-cell" id="logoContainer">
                        <div class="logo" id="logoButton">
                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Logo">
                        </div>
                    </td>
                    <td class="action-toggle-cell">
                        <button class="action-toggle" id="actionToggle">
                            <span class="material-icons-outlined">chevron_right</span>
                        </button>
                    </td>
                    <td class="feature-buttons-cell" id="featureButtonsCell">
                        <div class="feature-buttons" id="featureButtons">
                            <button class="icon-button" id="rollButton">
                                <span class="material-icons-outlined">casino</span>
                                <span class="tooltip">Roll</span>
                            </button>
                            <button class="icon-button" id="accountButton">
                                <span class="material-icons-outlined">manage_accounts</span>
                                <span class="tooltip">MOD</span>
                            </button>
                            <button class="icon-button" id="dataButton">
                                <span class="material-icons-outlined">save</span>
                                <span class="tooltip">Manage</span>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="social-cell">
                        <button class="social-toggle" id="socialToggle">
                            <span class="material-icons-outlined">keyboard_arrow_down</span>
                        </button>
                        <div class="social-links" id="socialLinks">
                            <button class="social-button" id="videoButton">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube">
                            </button>
                            <button class="social-button" id="codeButton">
                                <span class="material-icons-outlined">code</span>
                            </button>
                            <button class="social-button" id="twitchButton">
                                <img src="https://avatars.githubusercontent.com/u/1795021" alt="Twitch">
                            </button>
                        </div>
                    </td>
                    <td></td>
                    <td class="settings-cell" id="settingsContainer">
                        <div id="layoutContainer">
        
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        `,
      );
      Ec();
      console.log("initPopup called");
    })();
    return c;
  })(),
);
