import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covidify';

//export class AppComponent implements OnInit {

  // ngOnInit(): void {
  //   let loader = new Loader({
  //     apiKey: 'AIzaSyCr-NSSMoEVi725-k6escXY6h8D6LBB1r8'
  //   })

  //   loader.load().then(() => {
  //     new google.maps.Map(document.getElementById("map"),{
  //       center: { lat: 51.233334, lng: 6.78333},
  //       zoom: 6
  //     })
  //   })
  // }
}
