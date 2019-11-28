const cultureMap = L.map('mapid').locate({setView: true});;
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 14,
}).addTo(cultureMap);
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(cultureMap).bindPopup("<p class='here'>START YOUR JOURNEY HERE</p><p class='here'>currently accurate to " + radius + " meters</p>").openPopup();
    L.circle(e.latlng, radius).addTo(cultureMap);
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
