var client;
var GeoJSONs;
// define a global variable to hold the layer so that we can use it later on
var GeoJSONlayer;


function getGeoJSONs(){
	client = new XMLHttpRequest();
//    console.log(httpPortNumber);
    client.open('GET','http://developer.cege.ucl.ac.uk:' + httpPortNumber + '/getAllQuestions');
	client.onreadystatechange = GeoJSONResponse; // note don't use GeoJSONResponse() with brackets as that doesn't work
	client.send();
	}


function GeoJSONResponse() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
	// once the data is ready, process the data
	var GeoJSONdata = client.responseText;
	loadGeoJSONlayer(GeoJSONdata);
	}
	}



// convert the received data - which is text - to JSON GeoJSONat and add it to the map
function loadGeoJSONlayer(GeoJSONdata) {
	// convert the text to JSON
	var GeoJSONjson = JSON.parse(GeoJSONdata);

	GeoJSONs = GeoJSONjson[0];
	// add the JSON layer onto the map - it will appear using the default icons
	GeoJSONlayer = L.geoJson(GeoJSONs).addTo(mymap);
	// change the map zoom so that all the data is shown
	mymap.fitBounds(GeoJSONlayer.getBounds());
	}


function removeGeoJSONLayer() {
    mymap.removeLayer(GeoJSONlayer);
    mymap.setView([51.524257,-0.134503], 13);
    }