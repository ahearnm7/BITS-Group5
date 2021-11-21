import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessage(): number {

    return 5;

  constructor() { }
}
