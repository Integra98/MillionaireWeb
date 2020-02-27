import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservComponent } from './reserv/reserv.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { PublicHallComponent } from './public-hall/public-hall.component';
import { VipHallComponent } from './vip-hall/vip-hall.component';
import { FormaComponent } from './forma/forma.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GaleryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservation', component: ReservComponent },
  { path: 'common', component: PublicHallComponent},
  { path: 'vip', component: VipHallComponent},
  { path: 'reservationForm', component: FormaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
