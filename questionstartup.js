
function questionStartup(){
loadW3HTML();
getPort();
addPointLinePoly();
trackLocation();  
addPoint();
addBuffer();
}

function startup() {
document.addEventListener('DOMContentLoaded', function() {
questionStartup ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}