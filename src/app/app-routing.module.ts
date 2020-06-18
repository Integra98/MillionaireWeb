import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservComponent } from './reserv/reserv.component';
import { MenuComponent } from './menu/menu.component';
import { GaleryComponent } from './galery/galery.component';
import { VipHallComponent } from './vip-hall/vip-hall.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'isLeft'} },
  { path: 'gallery', component: GaleryComponent, data: { animation: 'isRight'}  },
  { path: 'menu', component: MenuComponent, data: { animation: 'isLeft'}  },
  { path: 'reservation', component: ReservComponent, data: { animation: 'isLeft'}  },
  { path: 'vip', component: VipHallComponent, data: { animation: 'isRight'}  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
