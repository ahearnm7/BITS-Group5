/* message.component.ts is used to process the value (number of days) coming */
/* from message.services.ts (see comments in message.services.ts) */ 

import { MessageService } from 'src/app/services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {
    message: number;

    constructor(private messageservice: MessageService) {
      this.message = this.messageservice.getMessage();
   }
}



