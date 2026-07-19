var c = require("./601.js");
var o = c;
var O = require("./314.js");
var C = O(o);
C.push([
  module.id,
  "/* roll-screen.css */\n\n#rollScreen {\n    /* flex: 1; */\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.input-table {\n    border-collapse: collapse;\n    border-spacing: 0 4px; /* Add 4px spacing between rows */\n}\n\n.input-row {\n    display: table-row;\n    height: 40px; /* Adjust height to ensure proper vertical alignment */\n}\n\n.label-cell,\n.checkbox-cell {\n    padding: 8px;\n    border: none;\n    vertical-align: middle !important; /* Vertically center the content */\n}\n\n.label-cell {\n    text-align: left; /* Align the text label to the left */\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.checkbox-cell {\n    text-align: center;\n    width: 1%; /* Shrink to fit content */\n    white-space: nowrap; /* Prevent line break */\n}\n\n.roll-button {\n    color: #e0681a;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin: 0px 2px;\n    font-weight: bold;\n    border: 1px solid #e0681a;\n    margin-top: 4px;\n    flex: 1;\n}\n\nbutton {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    background-color: #e0681a;\n    color: black;\n    cursor: pointer;\n    height: 36px; /* Set consistent height for inputs and buttons */\n    box-sizing: border-box; /* Ensure padding and border are included in height */\n}\n\n.accordion-toggle {\n    margin-bottom: 10px;\n    padding: 8px 16px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.accordion-content {\n    transition: all 0.3s ease;\n}\n\n.round-roll {\n    border-radius: 50%;\n    width: 32px;\n    min-width: 32px;\n    max-width: 32px;\n    height: 32px;\n    min-height: 32px;\n    max-height: 32px;\n    padding: 0;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}",
  "",
]);
export const A = C;
