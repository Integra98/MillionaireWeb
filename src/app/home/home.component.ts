import { MainService } from './../main.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('show', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out')
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out')
      ])
    ])]
})
export class HomeComponent implements OnInit {

  language: string;
  subscription: Subscription[] = [];
  @ViewChild('grid', { static: true }) carouselElement: ElementRef<any>;
  interval;
  carouselAnimation: string = "in";

  dataForCarousel = [{
    image: '/assets/img/events/event1.jpg',
    title: '«Вкус – это здравый смысл гения»',
    description: '23 февраля у Вас появится возможность попробовать то, что Вы никогда не пробовали и, возможно, не заказали бы в ресторанах!'
  }, 
  {
    image: '/assets/img/events/event2.jpg',
    title: 'ONE MILLION & ONE NIGHT🔥',
    description: 'Эти выходные - 6 и 7 марта, мы предлагаем провести именно в "MILLIONAIRE"! Ведь именно у нас Вы можете получить 1.000.000 зажигательных эмоции в изящной и роскошной атмосфере. В этом нам помогут ART SQUAD MILLIONAIRE!'
  },
  {
    image: '/assets/img/events/event3.jpg',
    title: 'Гастрономический ужин',
    description: 'Мы долго думали, каким бы сделать первое мероприятие. Думали и решили! Оно будет не такое, как у всех! 23 февраля у вас появится возможность попробовать то, что Вы никогда не пробовали и, возможно, не заказали бы в ресторанах!'
  },
  {
    image: '/assets/img/events/event33.jpg',
    title: 'Грандиозный «Amazon Night»',
    description: 'Вас ждёт тематический, неповторимый вечер, который запомнится Вам ещё надолго! А так же мы предлагаем компаниям от 4х подруг повеселить как следует, самое главное, — БЕЗ ДЕПОЗИТА🔥'
  },
  {
    image: '/assets/img/events/event4.jpg',
    title: 'Незабываемый вечер в «MILLIONAIRE»🔥',
    description: 'Ведь —🔺Хэдлайнеры вечера - Raim & Artur! Авторы и исполнители хитов «Самая вышка", "Дискотека 90-х". Полетаем?'
  },
  {
    image: '/assets/img/events/event5.jpg',
    title: '«Беспредельный понедельник»',
    description: 'Только в понедельник - 9 марта, для ценителей петь — караоке БЕЗ ДЕПОЗИТА🎉Предлагаем Вам насладиться шикарной атмосферой: профессиональный звук, светотехника, бэк-вокал, которые помогут раскрыть вокальные данные каждого!'
  },
  {
    image: '/assets/img/events/event6.jpg',
    title: 'Проведите вечер с @ternovoy_oleg🔥',
    description: 'Приглашаем Вас 14 марта погрузится в невероятную атмосферу вместе с TERNOVOY (ex.ТERRY) @ternovoy_oleg (BLACK STAR)!'
  },
  {
    image: '/assets/img/events/event7.jpg',
    title: 'Долгожданный вечер LADIES NIGHT✨',
    description: 'Ресторан-караоке Millionaire 19 июня ждёт всех очаровательных дам на LADIES NIGHT!🖤 Только для Вас в этот вечер: Комплимент от заведения: 🔻 Бутылка игристого вина 🔻 Угощение от нашего шеф-повара'
  },
  ];

  mouseover: boolean = false;

  @ViewChild('grid', {static: true}) eventsComponent: ElementRef;
  @ViewChild('about', {static: true}) aboutComponent: ElementRef;

  constructor(private service: MainService) {
    let sub = this.service.getSelectedLanguage().subscribe(res => {
      this.language = res;
    });
    this.subscription.push(sub);
  }

  ngOnInit() {

    let localStorageItem = localStorage.getItem('routerFlag');
    if(localStorageItem === 'events'){
      this.eventsComponent.nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });
    } else if(localStorageItem === 'about') {
      this.aboutComponent.nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });

    }
    let index = 0
    this.interval = setInterval(() => {
      if(!this.mouseover){
        this.carouselElement.nativeElement.scrollTo({ left: (this.carouselElement.nativeElement.scrollLeft + 400), behavior: 'smooth' });
        this.dataForCarousel.push(this.dataForCarousel[index]);  
        // let popEl = this.dataForCarousel.shift();
        index++;
        // this.dataForCarousel.push(popEl);
        // console.log(this.dataForCarousel);
        // console.log(popEl);
      }
    }, 2500);

    let sub = this.service.scrolEvent.subscribe(res => {
        if(res === 'events'){
          this.eventsComponent.nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });
        } else {
          this.aboutComponent.nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
    this.subscription.push(sub);

  }

  scrollCarousel(flag: string){
    if(flag === 'left'){
      this.carouselElement.nativeElement.scrollTo({ left: (this.carouselElement.nativeElement.scrollLeft - 400), behavior: 'smooth' });
    } else {
      this.carouselElement.nativeElement.scrollTo({ left: (this.carouselElement.nativeElement.scrollLeft + 400), behavior: 'smooth' });
    }
  }


  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }

  mouseIn(){
    this.mouseover = true;
  }

  mouseOut(){
    this.mouseover = false;
  }

  // setSelectedEvent(item){
  //   // this.service.selectedevent.next(item);
  // }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.map(sub => {
      sub.unsubscribe();
    })
    clearInterval(this.interval);
  }


}
