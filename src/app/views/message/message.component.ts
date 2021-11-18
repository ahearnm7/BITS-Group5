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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
