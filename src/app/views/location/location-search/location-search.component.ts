import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ilocation, LocationsService } from 'src/app/services/locations.service';
// import { ilocation } from '../location';


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  // filterTerm!: string;


    locations: ilocation[] = [
    {name: "Coles", suburb: "Northcote", postcode: 3070, lastExposure: "15/10/21", monthExposure: 5, totalExposure: 15, timeExposure: 1900},
    {name: "Bunnings", suburb: "Preston", postcode: 3072, lastExposure: "1/11/21", monthExposure: 7, totalExposure: 44, timeExposure: 1400}
];

// export class locations {

// filterTerm!: string;

// locations = [{
//   "name": "Coles",
//   "suburb": "Northcote",
//   "Postcode": 3070,
//   "lastExposure": "15/10/21",
//   "monthExposure": 5,
//   "totalExposure": 15,
//   "timeExposure": 1900
// },
// {
//   "name": "Bunnings",
//   "suburb": "Preston",
//   "Postcode": 3072,
//   "lastExposure": "01/11/21",
//   "monthExposure": 7,
//   "totalExposure": 44,
//   "timeExposure": 1400
// }
// ]
// };

name = new FormControl('');
suburb = new FormControl('');


pos: any = -2;

search: any;
result: any;

  constructor(private locationsService:LocationsService) { }


  ngOnInit(): void {
  }

  updateName() {

    this.pos = this.name.value;

  }

  //  function searchMatch(ilocation) {
  //   return this.locations.name === 'Coles';

  updateName2() {

    this.search = this.name.value;
    //  this.result = this.locations.findIndex(this.search);
    //  this.pos = this.result;

    //  this. result = this.locations.indexOf(this.search);
    //  this.pos = this.result;


    this.result = this.locations.findIndex(locations => locations.name == this.search);
    this.pos = this.result;

    // updateName2() {

    //    this.search = this.name.value;
    //    this.result = this.locations.findIndex(this.search);
    //    this.pos = this.result;


    //  this.result = this.locations.findIndex(function(item) {
    //    if (this.search == this.locations.name) return true;
    //  }, this.locations);



  }
  //  if (this.pos = -1) {

  //  }

}



