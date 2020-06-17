import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.scss']
})
export class ReservComponent implements OnInit {

  language: string;
  subscription: Subscription[] =[];
  showFormModal: boolean = false;

  constructor(private service: MainService, private router: Router) {
    let subscription = this.service.getSelectedLanguage().subscribe(res => {
        this.language = res;
    });
    this.subscription.push(subscription)
  }

  ngOnInit() {
  }

  changeLanguage(lan: string) {
    this.service.setSelectedLanguage(lan);
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.map(sub => {
      sub.unsubscribe();
    });
}

}
