import { Injectable } from '@angular/core';

export interface ilocation {
  name:string;
  suburb:string;
  postcode:number;
  lastExposure:string;
  monthExposure:number;
  totalExposure:number;
  timeExposure:number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() {

  }

}
 