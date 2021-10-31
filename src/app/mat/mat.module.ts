import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'

const matComp = [

  BrowserAnimationsModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatToolbarModule,

]

@NgModule({
  declarations: [],

  exports: [
    ...matComp
  ]
})
export class MatModule { }
