import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss']
})
export class FormaComponent implements OnInit {

  time = '00:00';

  language: string;
  subscription: Subscription;

  constructor(private service: MainService, private router: Router) {
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

link() {
  window.location.href = 'https://epay.fortebank.com/?OrderID=4017081&SessionID=466B03BF5469A3F5E506F64DC3C3136A';
}


}
