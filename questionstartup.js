
function questionStartup(){
loadW3HTML();
getPort();
trackLocation();  
//addPoint();
addBuffer();

}

function questionstartup() {
document.addEventListener('DOMContentLoaded', function() {
questionStartup ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}