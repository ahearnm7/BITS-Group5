import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatModule } from './mat/mat.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChartdailyComponent } from './views/chart/chartdaily/chartdaily.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartdailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
