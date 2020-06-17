import { MainService } from './main.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'millionaireWeb';

  constructor(private service: MainService, private router: Router){
  }
  

  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }

  scrollIntoViewEvent(flag: string){
    if(window.location.pathname !== '/home'){
      localStorage.setItem('routerFlag', flag);
      this.router.navigate(['/home']);
    }
    this.service.scrolEvent.next(flag);

  }



}
