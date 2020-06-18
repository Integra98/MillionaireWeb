import { MainService } from './main.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';
import { slider } from './router-animations';
import { NavbarComponent } from 'angular-bootstrap-md/lib/free/navbars/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent {
  title = 'millionaireWeb';
  @ViewChild('navbarid', {static: true}) navbaridRef: NavbarComponent;

  constructor(private service: MainService, private router: Router){
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
  

  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }

  cleanLocalStorage(){
    localStorage.setItem('routerFlag', null);
  }

  scrollIntoViewEvent(flag: string){
    if(window.location.pathname !== '/home'){
      localStorage.setItem('routerFlag', flag);
      this.router.navigate(['/home']);
    }
    this.service.scrolEvent.next(flag);

  }

  onClick(): void {
    if (this.navbaridRef.shown) {
    this.navbaridRef.toggle();
    }
  }



}
