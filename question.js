// Function 1. Pop up the lat/log when user click the map

// create a custom popup
var popup = L.popup();
// create an event detector to wait for the user's click event and then use the popup to show them where they clicked
// note that you don't need to do any complicated maths to convert screen coordinates to real world coordiantes - the Leaflet API does this for you
function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent("You just clicked the map at " + e.latlng.toString())
	.openOn(mymap);
	//var lat_lng = e.latlng.toString();
	document.getElementsByName("lat")[0].value = e.latlng.lat;
	document.getElementsByName("lon")[0].value = e.latlng.lng;	
	}

// now add the click event detector to the map
mymap.on('click', onMapClick);



// Function 2. Add the location of the UCL main gate


// create a geoJSON feature -
var geojsonFeature = {
	"type": "Feature",
	"properties": {
				"name": "UCL main gate",
				"popupContent": "UCL main gate"
				},
	"geometry": {
				"type": "Point",
				"coordinates": [-0.134503, 51.524257]
				}
	};


//var testMarkerBlue = L.AwesomeMarkers.icon({
//icon: 'play',
//markerColor: 'blue'
//});
var testMarkerGreen = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'green'
});

var testMarkerRed = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'red'
});

var testMarkerPink = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'pink'
});

var testMarkerBlack = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'black'
});


function addPoint(){
//  add it to the map
L.geoJSON(geojsonFeature, {
pointToLayer: function (feature, latlng) {
return L.marker(latlng,{icon:testMarkerBlack});
}
}).addTo(mymap).bindPopup("<b>" + "This is " +  geojsonFeature.properties.popupContent + "<b>" + ". You are sugguested to create your questions within the red circle.").openPopup();}

//Function 3. Add the buffer of the point


// add a circle around UCL main gate
function addBuffer(){
L.circle([51.524257, -0.134503], 200, {
	color: 'red',
	fillColor: '#CA3640',
	fillOpacity: 0.3
	}).addTo(mymap);}

