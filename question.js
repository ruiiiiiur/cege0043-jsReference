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


var testMarkerBlue = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'blue'
});

function addPoint(){
//  add it to the map
L.geoJSON(geojsonFeature, {
pointToLayer: function (feature, latlng) {
return L.marker(latlng, {icon:testMarkerBlue});
}
}).addTo(mymap).bindPopup("<b>" + "You are at " +  geojsonFeature.properties.popupContent + "<b>");}


//Function 3. Add the buffer of the point


// add a circle around UCL main gate
function addBuffer(){
L.circle([51.524257, -0.134503], 0.2, {
	color: 'blue',
	fillColor: '#f03',
	fillOpacity: 0.5
	}).addTo(mymap).bindPopup("You are sugguested to create questions within this area.");}