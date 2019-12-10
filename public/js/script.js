const cultureMap = L.map('mapid').locate({setView: true});
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 14,
        watch: true,
}).addTo(cultureMap);
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(cultureMap).bindPopup("<p class='here'>START YOUR JOURNEY HERE</p><p class='here'>currently accurate to " + radius + " meters</p>").openPopup();
    L.circle(e.latlng, radius).addTo(cultureMap);

    L.Routing.control({
    waypoints: [
    L.latLng(e.latlng),//live locatie
    L.latLng(arMarkers[0][0], arMarkers[0][1]),
    L.latLng(arMarkers[1][0], arMarkers[1][1]),
    L.latLng(arMarkers[2][0], arMarkers[2][1]),
    L.latLng(arMarkers[3][0], arMarkers[3][1]),
    L.latLng(arMarkers[4][0], arMarkers[4][1]),
    L.latLng(arMarkers[5][0], arMarkers[5][1]),

  ]
}).addTo(cultureMap);
}
cultureMap.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}
cultureMap.on('locationerror', onLocationError);

const basis = L.icon({
  iconUrl: '../img/marker-basis.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const museum = L.icon({
  iconUrl: '../img/marker-museum.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const kerk = L.icon({
  iconUrl: '../img/marker-kerk.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const bibliotheek = L.icon({
  iconUrl: '../img/marker-bibliotheek.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const erfgoed = L.icon({
  iconUrl: '../img/marker-erfgoed.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
