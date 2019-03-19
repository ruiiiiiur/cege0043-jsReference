
function quizStartup(){
loadW3HTML();
getPort();
trackLocation();  
//addPoint();
addBuffer();

}

function quizstartup() {
document.addEventListener('DOMContentLoaded', function() {
quizStartup ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}