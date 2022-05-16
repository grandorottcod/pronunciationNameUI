import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupNameComponent } from './lookup-name/lookup-name.component';
import { RecordNameComponent } from './record-name/record-name.component';
import {FormsModule} from "@angular/forms"
import { NgAudioRecorderModule } from 'ng-audio-recorder';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    LookupNameComponent,
    RecordNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgAudioRecorderModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
