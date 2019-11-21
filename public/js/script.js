const cultureMap = L.map('mapid').setView([51.215860, 4.410800], 14);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
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

/*$.getJSON("/markers.json", function(json) {
  const culturespots = json.culturespots;
  for (var i=0; i<culturespots.length; i++) {

    if (culturespots[i].categorie === "Museum") {
      new L.marker(culturespots[i].geolocation, {
          icon: museum
        }).bindPopup(`
					<img src="${culturespots[i].marker}" alt="museum marker" class="popup-marker">
					<h1>Campus ${culturespots[i].naam}</h1>
					<h2>${culturespots[i].categorie}</h2>
					<p>
					${culturespots[i].straat} ${culturespots[i].huisnr} <br>
					${culturespots[i].postcode} ${culturespots[i].gemeente} <br>
					</p>
					`)
        .addTo(cultureMap);
    }

    if (culturespots[i].categorie === "Archief | Erfgoedbibliotheek") {
      new L.marker(culturespots[i].geolocation, {
          icon: kerk
				}).bindPopup(`
					<img src="${culturespots[i].marker}" alt="kerk marker" class="popup-marker">
					<h1>Campus ${culturespots[i].naam}</h1>
					<h2>${culturespots[i].categorie}</h2>
					<p>
					${culturespots[i].straat} ${culturespots[i].huisnr} <br>
					${culturespots[i].postcode} ${culturespots[i].gemeente} <br>
					</p>
					`)
				.addTo(cultureMap);
		}

		if (culturespots[i].categorie === "Archief | Erfgoedbibliotheek") {
			new L.marker(culturespots[i].geolocation, {
					icon: bibliotheek
				}).bindPopup(`
					<img src="${culturespots[i].marker}" alt="bibliotheek marker" class="popup-marker">
					<h1>Campus ${culturespots[i].naam}</h1>
					<h2>${culturespots[i].categorie}</h2>
					<p>
					${culturespots[i].straat} ${culturespots[i].huisnr} <br>
					${culturespots[i].postcode} ${culturespots[i].gemeente} <br>
					</p>
					`)
				.addTo(cultureMap);
		}
				//function onClick(e) {
      	//window.open(this.options.win_url); }
  }
});*/
