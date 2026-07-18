document.addEventListener('DOMContentLoaded', function() {
    var s = document.createElement("script");
    s.src = chrome.runtime.getURL("mod.min.js");
    s.type = "text/javascript";
    document.head.appendChild(s);
    console.log("PokeRogue Mini-Hack Injected.");
});