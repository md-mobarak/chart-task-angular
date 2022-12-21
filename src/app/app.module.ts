import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SpAdAnalysisTowComponent } from './sp-ad-analysis-tow/sp-ad-analysis-tow.component';

@NgModule({
  declarations: [
    AppComponent,
    SpAdAnalysisTowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
