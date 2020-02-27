import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../main.service';

@Component({
  selector: 'app-public-hall',
  templateUrl: './public-hall.component.html',
  styleUrls: ['./public-hall.component.scss']
})
export class PublicHallComponent implements OnInit {

  tables1 = [
    {name: 'Стол №1', places: '5 мест'},
    {name: 'Стол №2', places: '5 мест'},
    {name: 'Стол №3', places: '5 мест'},
    {name: 'Стол №4', places: '5 мест'},
    {name: 'Стол №5', places: '5 мест'},

  ];

  tables2 = [
    {name: 'Стол №6', places: '5 мест'},
    {name: 'Стол №7', places: '5 мест'},
    {name: 'Стол №8', places: '5 мест'},
    {name: 'Стол №9', places: '5 мест'},
    {name: 'Стол №10', places: '5 мест'},

  ];

  tables3 = [
    {name: 'Стол №11', places: '5 мест'},
    {name: 'Стол №12', places: '5 мест'},
    {name: 'Стол №13', places: '5 мест'},
    {name: 'Стол №14', places: '5 мест'},
    {name: 'Стол №15', places: '5 мест'}

  ];
  
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
