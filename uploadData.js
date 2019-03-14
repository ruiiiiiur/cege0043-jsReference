function startDataUpload() {
//alert ("start data upload");
var question_title = document.getElementById("question_title").value;
var question_text = document.getElementById("question_text").value;
var answer_1 = document.getElementById("answer_1").value;
var answer_2 = document.getElementById("answer_2").value;
var answer_3 = document.getElementById("answer_3").value;
var answer_4 = document.getElementById("answer_4").value;
var postString = "question_title="+question_title +"&question_text="+question_text+"&answer_1="+answer_1+"&answer_2="+answer_2+"&answer_3="+answer_3+"&answer_4="+answer_4;

// now get the geometry values
//var latitude = document.getElementById("latitude").value;
//var longitude = document.getElementById("longitude").value;
//postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;




// now get the checkbox values - separate them with a | so that they can be
// split later on if necessary
//var checkString = "";
//for (var i = 1;i< 5;i++){
//if (document.getElementById("check"+i).checked === true) {
//checkString = checkString + document.getElementById("check"+i).value + "||"
//}
//}
//postString = postString + "&modulelist="+checkString;
// now get the radio button values
//if (document.getElementById("morning").checked) {
//postString=postString+"&lecturetime=morning";}
//if (document.getElementById("afternoon").checked) {
//postString=postString+"&lecturetime=afternoon";}



// now get the select box values
var correct_answer = document.getElementById("answerselectbox").value;
postString = postString + "&correct_answer="+correct_answer;

alert (postString);
processData(postString);
}


var client; // the global variable that holds the request


// week6 part2 
function processData(postString) {
client = new XMLHttpRequest();
postString = postString + "&port_id=" + httpPortNumber;
var url = 'http://developer.cege.ucl.ac.uk:'+ httpPortNumber + "/uploadData";
client.open('POST',url,true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);
}



// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}