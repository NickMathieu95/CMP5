const campusMap = L.map('mapid').setView([51.215860, 4.410800], 14);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  maxZoom: 18,
}).addTo(campusMap);

const management = L.icon({
  iconUrl: '/img/marker-manag.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const onderwijs = L.icon({
  iconUrl: '/img/marker-onderwijs.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const wetenschap = L.icon({
  iconUrl: '/img/marker-wetenschap.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const conservatorium = L.icon({
  iconUrl: '/img/marker-conserv.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const kunsten = L.icon({
  iconUrl: '/img/marker-kunsten.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const graduaat = L.icon({
  iconUrl: '/img/marker-graduaat.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const hoofdzetel = L.icon({
  iconUrl: '/img/marker-hoofd.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});

$.getJSON("/ap.json", function(json) {
  const campussen = json.campussen;
  for (var i=0; i<campussen.length; i++) {
    if (campussen[i].department === "Management & Communicatie") {
      new L.marker(campussen[i].geolocation, {
          icon: management
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Onderwijs & Training | Gezondheid & Welzijn") {
      new L.marker(campussen[i].geolocation, {
          icon: onderwijs
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="onderwijs marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Wetenschappen & Techniek") {
      new L.marker(campussen[i].geolocation, {
          icon: wetenschap
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Koninklijk Conservatorium") {
      new L.marker(campussen[i].geolocation, {
          icon: conservatorium
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Koninklijke Academie Voor Schone Kunsten") {
      new L.marker(campussen[i].geolocation, {
          icon: kunsten
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Graduaat") {
      new L.marker(campussen[i].geolocation, {
          icon: graduaat
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
        .addTo(campusMap);
    }
    if (campussen[i].department === "Hoofdzetel") {
      new L.marker(campussen[i].geolocation, {
          icon: hoofdzetel
        }).bindPopup(`
					<img src="${campussen[i].marker}" alt="management marker" class="popup-marker">
					<h1>Campus ${campussen[i].name}</h1>
					<h2>${campussen[i].department}</h2>
					<p>
					${campussen[i].street} ${campussen[i].number} <br>
					${campussen[i].postal} ${campussen[i].city} <br>
					${campussen[i].telephone} <br>
					</p>
					`)
				.addTo(campusMap);
				//function onClick(e) {
      	//window.open(this.options.win_url); }
    }
  }
})
