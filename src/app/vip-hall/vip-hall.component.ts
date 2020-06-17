import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-vip-hall',
  templateUrl: './vip-hall.component.html',
  styleUrls: ['./vip-hall.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(200)
      ])
    ])
  ]
})
export class VipHallComponent implements OnInit {


  hall1 = [
    {img: '/assets/img/halls/Бэнтли.png', title: 'Bentley', places: '10'},
    {img: '/assets/img/halls/Версачи.png', title: 'Versace', places: '10'},
    {img: '/assets/img/halls/Гуччи.png', title: 'Gucci', places: '10'},
    {img: '/assets/img/halls/Маддона.png', title: 'Madonna', places: '10'},
  ];

  hall2 = [
    {img: '/assets/img/halls/Роберто.png', title: 'Roberto', places: '10'},
    {img: '/assets/img/halls/Фэнди.png', title: 'Fendi', places: '10'},
    {img: '/assets/img/halls/Эрмес.png', title: 'Hermes', places: '10'},
    {img: '/assets/img/halls/Кэвиа.png', title: 'Caviar', places: '10'},
  ];

  language: string;
  subscription: Subscription;
  showModal: boolean = false;
  
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

  route() {
    window.open('payment.php');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
