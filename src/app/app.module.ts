import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapitRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnMOqnUA_TdGa3WB-CuUcq-XTD84Y62V4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
