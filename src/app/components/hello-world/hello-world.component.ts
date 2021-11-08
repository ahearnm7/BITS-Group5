import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  @ViewChild('googleMap', { static: true })
  googleMapRef!: ElementRef;

  // Will contain the reference of rendered map instance
  // Will contain the reference of rendered map instance
  map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    const mapOptions: google.maps.MapOptions = {
      // Centered to Hyderabad, India
      center: new google.maps.LatLng(-37.81513161171227, 144.93942835432566),
      zoom: 10,
    };

    this.map = new google.maps.Map(this.googleMapRef.nativeElement, mapOptions);
  }

}
