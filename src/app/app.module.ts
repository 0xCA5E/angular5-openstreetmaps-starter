import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBFuqRdU6LwckS0z8k5Mw_fbuSPZyCp0Y8'})
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
