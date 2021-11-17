/* alert.component.ts is used to process the value (number of days) coming */
/* from alert.services.ts (see comments in alert.services.ts) */ 
/* getMessage()>2; else is used to decide which message to display to the user */
/* Currently the code compares the value read in (numer of days) to 2. If the */ 
/* If the value from getMessage() is > 2 then the warning message is displayed */
/* if the value from getMessage() is < 2 then a standard message is displayed */


import { MessageService } from 'src/app/services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <div *ngIf="getMessage()>2; else elseBlock"><h2><p style="border:5px; 
    border-style:solid; border-color:#808080; padding: 2em;
    "> Warning: Information displayed for your searched location is not up to date.
    </p></h2></div>
    <ng-template #elseBlock><h2><p style="border:5px; border-style:solid; 
    border-color:#808080; padding: 2em;
    "> Information for your searched location is up to date.</p></h2>
    </ng-template>
    
    <h2>{{ getMessage() }}</h2>
  `,

/* The line of code above can be removed. Used in demo activity */

  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    message:any;

    getMessage() {
      return this.message;
    }

  constructor() {
      let service = new MessageService();
      this.message = service.getMessage();
   }

  ngOnInit(): void {
  }

}



