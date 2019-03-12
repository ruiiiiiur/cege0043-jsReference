function trackAndCircle(){
loadW3HTML();
getPort();
addPointLinePoly();
trackLocation();   
//getEarthquakes();
//getforms();
//callDivChange();
}



function quizStartup(){

	
}

function startup() {
document.addEventListener('DOMContentLoaded', function() {
quizStartup ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}