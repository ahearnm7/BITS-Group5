import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatModule } from './mat/mat.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChartdailyComponent } from './views/chart/chartdaily/chartdaily.component';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './views/nav/nav/nav.component';
import { LocationSearchComponent } from './views/location/location-search/location-search.component';
import { GmapComponent } from './views/map/gmap/gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartdailyComponent,
    NavComponent,
    LocationSearchComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
