var map = L.map('map').
setView([-18.018557263616668, -70.2499292790085], 
17);
 
L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.018557263616668, -70.2499292790085], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.00564512726733, -70.25112232844617], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.0089103804099, -70.24548924675513], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.00261394690697, -70.24898678429818], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.039663028611137, -70.245748118392], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.015935281134553, -70.24818916338984], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.02167288792121, -70.2684634879678], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.009182195777296, -70.23745507447552], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.049539085527677, -70.28417830331054], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);

L.control.scale().addTo(map);
L.marker([-18.04694701668365, -70.25030397486178], {draggable: true}).addTo(map);
var circle = L.circle([-17.988737677018996, -70.23812920617935], {
    color: '#060606',
    fillColor: '#E8DF17',
    fillOpacity: 0.1,
    radius: 5
}).addTo(map);


var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var wmsUrl ='https://www.idep.gob.pe/geoportal/services/IMAGENES/ORTOFOTO_ILO/MapServer/WMSServer';
  var ortoica=L.tileLayer.wms(wmsUrl, {
    layers: '0', // Ortomosaico de Ica
    format: 'image/png',
    transparent: true
  });
  ortoica.addTo(map);

  L.control.scale({
    imperial: false
  }).addTo(map);


