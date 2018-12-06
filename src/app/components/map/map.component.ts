import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myfrugalmap = L.map('frugalmap').locate({setView: true, maxZoom: 15});

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);

  function onLocationFound(e) {
    const radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(myfrugalmap);
    L.circle(e.latlng, radius).addTo(myfrugalmap);
}

myfrugalmap.on('locationfound', onLocationFound);

  }

}
