import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  hall: any;
  language: string;
  subscription: Subscription;

  public = ['/assets/img/halls/Общий1.png', '/assets/img/halls/Общий2.png', '/assets/img/halls/Общий3.png'];
  bantli = ['/assets/img/halls/Бэнтли.png', '/assets/img/halls/Бэнтли2.png', '/assets/img/halls/Бэнтли3.png'];
  versaci = ['/assets/img/halls/Версачи.png', '/assets/img/halls/Версачи2.png', '/assets/img/halls/Версачи3.png'];
  gucci = ['/assets/img/halls/Гуччи.png', '/assets/img/halls/Гуччи2.png', '/assets/img/halls/Гуччи3.png'];
  madona = ['/assets/img/halls/Маддона.png', '/assets/img/halls/Маддона2.png', '/assets/img/halls/Маддона3.png'];
  roberto = ['/assets/img/halls/Роберто.png', '/assets/img/halls/Роберто2.png', '/assets/img/halls/Роберто3.png'];
  fandi = ['/assets/img/halls/Фэнди.png', '/assets/img/halls/Фэнди2.png', '/assets/img/halls/Фэнди3.png'];
  hermes = ['/assets/img/halls/Эрмес.png', '/assets/img/halls/Эрмес2.png', '/assets/img/halls/Эрмес3.png'];
  kavia = ['/assets/img/halls/Кэвиа.png', '/assets/img/halls/Кэвиа2.png', '/assets/img/halls/Кэвиа3.png'];

  constructor(private service: MainService) {
    this.subscription = this.service.getSelectedLanguage().subscribe(res => {
      this.language = res;
  });
  }

  ngOnInit() {
    this.hall = this.public;
  }

  changeType(hall) {
    this.hall = hall;
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
