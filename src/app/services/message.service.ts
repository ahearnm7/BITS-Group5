/* alert.services is used as a substitute / simulation of reading in the age */
/* of a state's COVID-19 cases Vs location database.*/ 
/* The AlertService return value is used to simulate the age in days*/
/* of the database. The AlertService value (e.g. 3) will determine what*/
/* message is displayed to the user */

/* The returned value is read in through alert.component.ts*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    getMessage(){
        return '3';

    }

  constructor() { }
}






