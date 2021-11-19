import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lat!: number;
  lng!: number;
  geo: string | JSON | null | undefined;
  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        if (pos) {
          this.lat = pos.coords.latitude;
          this.lng = pos.coords.longitude;
          let position = [{ lat: this.lat, long: this.lng }];
          this.setLocalStorage('position', JSON.stringify(position));
        }
      })
    }
  }
  getLocalGeo() {
    return localStorage.getItem('position')
  }
  setLocalStorage(str: string, data: string): void {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('position', jsonData)
  }
}

