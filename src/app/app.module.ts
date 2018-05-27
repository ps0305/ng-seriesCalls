import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { CustomerService } from './services/customer.service';
import { CountriesService } from './services/countries.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [CustomerService,CountriesService],
  bootstrap: [SeriesComponent]
})
export class AppModule { }
