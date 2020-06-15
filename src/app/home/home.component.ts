import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language: string;
  subscription: Subscription;
  cards = [
    {
      title: 'Card Title 1',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: true
    },
    {
      title: 'Card Title 2',
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: false
    },
    {
      title: 'Card Title 3',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This text is much longer so that you can see a significant difference between the text in  previous tabs.',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: false
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: false
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: false
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      isShowDesc: false
    }
  ];
  slides: any = [[]];
  
  constructor(private service: MainService) {
    this.subscription = this.service.getSelectedLanguage().subscribe(res => {
      this.language = res;
    });
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
    console.log(this.slides);
  }
      chunk(arr: any, chunkSize:any) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
          R.push(arr.slice(i, i + chunkSize));
        }
        return R;
      }

  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }

  showDescription(flag, index){
    this.cards[index].isShowDesc = flag;
    console.log(this.cards[index]);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}


}
