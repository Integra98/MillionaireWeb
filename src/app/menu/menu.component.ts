import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  language: string;
  subscription: Subscription;

  constructor(private service: MainService) {
    this.subscription = this.service.getSelectedLanguage().subscribe(res => {
        this.language = res;
    });
  }

  ngOnInit() {
  }

  changeLanguage(lan: string) {
    this.service.setSelectedLanguage(lan);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}


}
