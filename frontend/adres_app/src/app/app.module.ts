import { NgModule,  LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { AcquisitionComponent } from './components/acquisition/acquisition.component';
import { AcquisitionsComponent } from './components/acquisitions/acquisitions.component';
import { HistoricComponent } from './components/historic/historic.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeEs, 'es-CO');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AcquisitionComponent,
    AcquisitionsComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
