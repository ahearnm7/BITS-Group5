import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatModule } from './mat/mat.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ChartdailyComponent } from './views/chart/chartdaily/chartdaily.component';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './views/nav/nav/nav.component';
import { LocationSearchComponent } from './views/location/location-search/location-search.component';
import { MapComponent } from './views/map/map/map.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './views/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartdailyComponent,
    NavComponent,
    LocationSearchComponent,
    MapComponent,
    MessageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatModule,
    ChartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
