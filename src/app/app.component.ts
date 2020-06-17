import { MainService } from './main.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'millionaireWeb';

  constructor(private service: MainService){}
  

  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }

  scrollIntoViewEvent(flag: string){
    this.service.scrolEvent.emit(flag)

  }



}
