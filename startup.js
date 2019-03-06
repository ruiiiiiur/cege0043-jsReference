function trackAndCircle(){
getPort();
addPointLinePoly();
trackLocation();   
getEarthquakes();
callDivChange();
loadW3HTML();
}


function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}