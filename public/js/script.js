const cultureMap = L.map('mapid').setView([51.215860, 4.410800], 14);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 18,
}).addTo(cultureMap);

const museum = L.icon({
  iconUrl: '/img/marker-museum.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const kerk = L.icon({
  iconUrl: '/img/marker-kerk.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});
const bibliotheek = L.icon({
  iconUrl: '/img/marker-bibliotheek.png',
  iconSize: [50, 50],
  iconAnchor: [0, 0],
  popupAnchor: [25, 0]
});

/*
for (var i = 0; i < gebouwen.length; i++) {
  if (gebouwen[i].length.categorie === "Museum") {
    new L.marker(gebouwen[i].geometry, {
      icon: museum
    })
  }
}

if(gebouwen[i].categorie === "Museum"){
	new L.marker(gebouwen[i].geolocation, {
			icon: museum
})
}*/

$.getJSON(data, function(json) {
  const gebouwen = json.gebouwen;
  for (var i=0; i<gebouwen.length; i++) {

    if (gebouwen[i].categorie === "Museum") {
      new L.marker(gebouwen[i].geolocation, {
          icon: museum
        }).bindPopup(`
					<img src="${gebouwen[i].marker}" alt="museum marker" class="popup-marker">
					<h1>${gebouwen[i].naam}</h1>
					<h2>${gebouwen[i].categorie}</h2>
					<p>
					${gebouwen[i].straat} ${gebouwen[i].huisnr} <br>
					${gebouwen[i].postcode} ${gebouwen[i].gemeente} <br>
					</p>
					`).addTo(cultureMap);
    }

    if (gebouwen[i].categorie === "Archief | Erfgoedbibliotheek") {
      new L.marker(gebouwen[i].geolocation, {
          icon: kerk
				}).bindPopup(`
					<img src="${gebouwen[i].marker}" alt="kerk marker" class="popup-marker">
					<h1>Campus ${gebouwen[i].naam}</h1>
					<h2>${gebouwen[i].categorie}</h2>
					<p>
					${gebouwen[i].straat} ${gebouwen[i].huisnr} <br>
					${gebouwen[i].postcode} ${gebouwen[i].gemeente} <br>
					</p>
					`)
				.addTo(cultureMap);
		}

		if (gebouwen[i].categorie === "Archief | Erfgoedbibliotheek") {
			new L.marker(gebouwen[i].geolocation, {
					icon: bibliotheek
				}).bindPopup(`
					<img src="${gebouwen[i].marker}" alt="bibliotheek marker" class="popup-marker">
					<h1>Campus ${gebouwen[i].naam}</h1>
					<h2>${gebouwen[i].categorie}</h2>
					<p>
					${gebouwen[i].straat} ${gebouwen[i].huisnr} <br>
					${gebouwen[i].postcode} ${gebouwen[i].gemeente} <br>
					</p>
					`)
				.addTo(cultureMap);
		}
				//function onClick(e) {
      	//window.open(this.options.win_url); }
  }
});
