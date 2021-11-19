import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  @ViewChild('googleMap', { static: true })
  googleMapRef!: ElementRef;

  // Will contain the reference of rendered map instance
  map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    const mapOptions: google.maps.MapOptions = {
      // Centered to Melbourne
      center: new google.maps.LatLng(-37.81513161171227, 144.93942835432566),
      zoom: 9,

    };

    this.map = new google.maps.Map(this.googleMapRef.nativeElement, mapOptions);

    new google.maps.Marker({
      position: { lat: -37.81513161171227, lng: 144.93942835432566 },
      map: this.map,
      title: "High Risk",

    });

    new google.maps.Marker({
      position: { lat: -37.67472169324012, lng: 144.9693990515025 },
      map: this.map,
      title: "High Risk",
    });

    new google.maps.Marker({
      position: { lat: -37.77680171117305, lng: 145.13528735383707 },
      map: this.map,
      title: "High Risk",
    });

    const svgMarker1 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.84591980320815, lng: 144.74137846304774 },
      map: this.map,
      icon: svgMarker1,
      title: "Safe",
    });

    const svgMarker2 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.639406481782075, lng: 144.75618250311499 },
      map: this.map,
      icon: svgMarker2,
      title: "Safe",
    });

    const svgMarker3 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.887202998237775, lng: 145.38520004872646 },
      map: this.map,
      icon: svgMarker3,
      title: "Safe",
    });

    const svgMarker4 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "orange",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -38.01746414519748, lng: 145.2475362761179 },
      map: this.map,
      icon: svgMarker4,
      title: "Caution",
    });

    const svgMarker5 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "orange",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.52527588211193, lng: 145.31530921032518 },
      map: this.map,
      icon: svgMarker5,
      title: "Caution",
    });

    const svgMarker6 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "orange",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.763408513593916, lng: 144.32836585593142 },
      map: this.map,
      icon: svgMarker6,
      title: "Caution",
    });

    const svgMarker7 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.39414603924569, lng: 144.8620777167283 },
      map: this.map,
      icon: svgMarker7,
      title: "Safe",
    });

    const svgMarker8 = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "green",
      fillOpacity: 0.6,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    new google.maps.Marker({
      position: { lat: -37.99243186164386, lng: 144.23306017111682 },
      map: this.map,
      icon: svgMarker8,
      title: "Safe",
    });

  }

}
