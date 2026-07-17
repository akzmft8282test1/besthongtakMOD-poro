var c = require("./601.js");
var o = c;
var O = require("./314.js");
var C = O(o);
C.push([module.id, "\n/* Ensure checkboxes are displayed correctly */\n.toggle-checkbox {\n    appearance: none;\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border: 2px solid #e0681a;\n    border-radius: 4px;\n    display: inline-block;\n    position: relative !important;\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.8);\n    vertical-align: middle;\n    box-sizing: border-box;\n    opacity: 1 !important;\n    margin: 0 !important;\n    pointer-events: all !important;\n}\n\n.toggle-checkbox:checked::before {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 10px;\n    height: 10px;\n    background-color: #e0681a;\n}\n", ""]);
export const A = C;