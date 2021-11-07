import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ilocation, LocationsService } from 'src/app/services/locations.service';
// import { ilocation } from '../location';


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

    locations: ilocation[] = [
    {name: "Coles", suburb: "Northcote", postcode: 3070, lastExposure: "15/10/21", monthExposure: 5, totalExposure: 15, timeExposure: 1900},
    {name: "Bunnings", suburb: "Preston", postcode: 3072, lastExposure: "1/11/21", monthExposure: 7, totalExposure: 44, timeExposure: 1400}
];

name = new FormControl('');

pos: any = 1;

  constructor(private locationsService:LocationsService) { }

  ngOnInit(): void {
  }

  updateName() {

    this.pos = this.name.value;
    
  }


}
