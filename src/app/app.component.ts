import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public map;

  constructor() { }

  ngOnInit() {

  }

  onMapReady(map) {
    console.log('map', map);
    this.map = map;

    // Define OSM map type pointing at the OpenStreetMap tile server
    this.map.mapTypes.set('OSM', new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        // "Wrap" x (logitude) at 180th meridian properly
        const tilesPerGlobe = 1 << zoom;
        let x = coord.x % tilesPerGlobe;
        if (x < 0) { x = tilesPerGlobe + x; }
        return 'https://tile.openstreetmap.org/' + zoom + '/' + x + '/' + coord.y + '.png';
      },
      tileSize: new google.maps.Size(256, 256),
      name: 'OpenStreetMap',
      maxZoom: 18
    }));


  }
  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {

  }
}
