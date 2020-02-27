import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { ReservComponent } from './reserv/reserv.component';
import { PublicHallComponent } from './public-hall/public-hall.component';
import { VipHallComponent } from './vip-hall/vip-hall.component';
import { FormaComponent } from './forma/forma.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GaleryComponent,
    ReservComponent,
    PublicHallComponent,
    VipHallComponent,
    FormaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
