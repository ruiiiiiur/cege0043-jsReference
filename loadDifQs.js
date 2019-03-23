// define a global variable to hold the layer so that we can use it later on

var xhrFormData5;
var quizPoints5;

function startFormDataLoad5() {
    xhrFormData5 = new XMLHttpRequest();
    var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber;
    url = url + "/FiveMostDifficultQuestions";
    xhrFormData5.open("GET", url, true);
    xhrFormData5.onreadystatechange = formDataResponse5;
    xhrFormData5.send();
}

function formDataResponse5() {
    if (xhrFormData5.readyState == 4) {
        // once the data is ready, process the data
        var formData5 = xhrFormData5.responseText;
        loadFormData5(formData5);
    }
}

// keep the layer global so that we can automatically pop up a
// pop-up menu on a point if necessary
// we can also use this to determine distance for the proximity alert


// 'JSON' data included as above
//[{"array_to_json":[{"rank":18}]}]

function loadFormData5(formData5) {
    // convert the text received from the server to JSON
    var formJSON5 = JSON.parse(formData5);
    //alert("The most difficult questions is " + formJSON5[0].array_to_json[0].question_text + " among all users.");
    
    document.getElementById("mostDifQs").innerHTML = "Five most difficult questions: ";
    document.getElementById("mostDifQs1").innerHTML = "Top 1:" + formJSON5[0].array_to_json[0].question_text;
    document.getElementById("mostDifQs2").innerHTML = "Top 2:" + formJSON5[0].array_to_json[1].question_text;
    document.getElementById("mostDifQs3").innerHTML = "Top 3:" + formJSON5[0].array_to_json[2].question_text;
    document.getElementById("mostDifQs4").innerHTML = "Top 4:" + formJSON5[0].array_to_json[3].question_text;
    document.getElementById("mostDifQs5").innerHTML = "Top 5:" + formJSON5[0].array_to_json[4].question_text;
}


