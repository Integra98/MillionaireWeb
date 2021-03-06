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
    {img: '/assets/img/halls/Бэнтли.png', title: 'Bentley', places: '10', titleHTML: 'VIP 1 с современным дизайном и роскоши отделки в стиле ⚜️Bentley⚜️', textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении с панорамным видом на павильон-музей "Нұр Әлем"  гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться бэк-вокалом от нашей арт-команды. <br>-Для отдыха предоставлена мебель из престижной коллекции, где использованы только дорогие материалы, как: мягкая натуральная кожа, профили из корня ореха. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для комфорта гостей имеется собственный санузел из мрамора и деталей ручной работы. <br>-VIP-зал оснащен системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для удобства и комфортного пребывания предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Одно из главных особенностей VIP-зала, современный и эксклюзивный декор с множество бесконечным мерцающих звезд, который скрасит полную атмосферу роскоши - "Звездное небо".'},
    {img: '/assets/img/halls/Версачи.png', title: 'Versace', places: '10', titleHTML: 'VIP 7 с гармоничным сочетанием классики и современности в контрастном сочетанием цветов ⚜️Versace⚜️',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться живым звучанием от нашей талантливой арт-команды. <br>-Для отдыха предоставлена мебель из престижной коллекции, лучшего качества с дамасскими узорами и декоративными элементами, где упор на удобство, практичность и функциональность. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для полного комфорта наших гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для комфортного пребывания предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Уникальность VIP-зала - это фото-зона, в виде неповторимого декора логотипа бренда Versace, которая идеально дополняет роскошь интерьера, придавая особую атмосферу.'},
    {img: '/assets/img/halls/Гуччи.png', title: 'Gucci', places: '10', titleHTML: 'VIP 3 в стиле с восхитительно красивым дизайном, выраженные в красных и изумрудных оттенках ⚜️Gucci⚜️',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться талантом живого звучания от нашей арт-команды "Millionaire". <br>-Для отдыха предоставлена мебель из престижной коллекции,привлекающие внимание грациозностью форм, безупречным качеством материалов и дорогим, но, при этом благородным внешним видом. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для комфортного времяпровождения гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для Вашего удобства предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Особенность стиля VIP-зала - это сочетание восхитительной красоты, добротности и уникальности. Другими словами, полное совершенство!'},
    {img: '/assets/img/halls/Маддона.png', title: 'Madonna', places: '10', titleHTML: 'VIP 2 с элегантно-классическим дизайном в благородно золотом контрасте с оттенками абсолютно белого в стиле ⚜️Madonna⚜️',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении с панорамным видом на центральную улицу Мангилик ел,  гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться живым звучанием от нашей великолепной арт-команды. <br>-Для отдыха предоставлена мебель из престижной коллекции, линии которые плавные, бахрома, медово-белая гамма и красочный узор. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для полного комфорта наших гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для комфортного пребывания предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Уникальность VIP-зала - стиль, который поражает особой красотой и нежностью. Находясь в VIP-зале Madonna Вы ощутите настоящий отдых по-королевски!'},
  ];

  hall2 = [
    {img: '/assets/img/halls/Роберто.png', title: 'Roberto', places: '10', titleHTML: 'VIP 6 с безупречным дизайном, которое создает неукротимое вдохновение, живую красоту и лучезарные эмоции ⚜️Roberto Cavalli⚜️',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться живым звучанием от нашей талантливой арт-команды. <br>-Для отдыха предоставлена мебель из престижной коллекции, элитарного качества, наполненный красками темно-зеленого придающий комфорт богатства. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для полного комфорта наших гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для комфортного пребывания предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Уникальность VIP-зала - стиль с эксклюзивной цветовой палитрой и исключительная мебельная фактура, добавляющая ей шарма и обаяния.'},
    {img: '/assets/img/halls/Фэнди.png', title: 'Fendi', places: '10', titleHTML: 'VIP 4 в стиле ⚜️Fendi⚜️ интригует и завораживает своим непревзойденным дизайном, сочетанием традиционных форм с дорогими материалами и правильными линиями.',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении с панорамным прекрасным видом на центральный проспект столицы,  гости даже вдохновляются на создании проектов! <br>-По желанию гостей есть возможность скрасит времяпровождение живой музыки в исполнении нашей арт-команды. <br>-Для отдыха предоставлена коллекция мебели, исключительные по дизайну с неординарными отделками, из которых фирменные — это натуральная кожа. Предлагаем непререкаемой ценности гарант качества и высокого стиля VIP-зал! <br>-Можно насладится наилучшей система караоке  - Evolution Pro 2. <br>-Для комфортного времяпровождения гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для Вашего удобства предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Исключительность стиля VIP-зала Fendi - это сочетание интриги и непререкаемой ценности. Зал для истинных ценителей высокой красоты, для ценителей настоящей роскоши и комфорта.'},
    {img: '/assets/img/halls/Эрмес.png', title: 'Hermes', places: '10', titleHTML: 'VIP 5 с выделяющимся классическим дизайном в выдержанном оранжевом цвете в сочетании темно-коричневыми тонами ⚜️Hermes⚜️',textHTML: '<br>-Зал вместимостью до 10 персон. <br>-Можно проводить закрытые корпоративные и торжественные мероприятия, деловые встречи, заключение сделок  и переговоров. Находясь в нашем заведении гости даже вдохновляются на грандиозные проекты! <br>-По Вашему желанию можно насладиться живым звучанием от нашей талантливой арт-команды. <br>-Для отдыха предоставлена мебель из престижной коллекции, из материалов отменного качества: древесиной, экологически чистой, а текстиль, украшающий поверхность поражает красотой и разнообразием. <br>-Предоставлена наилучшая система караоке  - Evolution Pro 2. <br>-Для полного комфорта наших гостей имеется собственный санузел из мрамора и особых деталей ручной работы. <br>-VIP-залы оснащены системой климат-контроля, что очень имеет значение в жаркие летние дни! <br>-Специально для комфортного пребывания предоставлен крытый и тёплый паркинг, с которого имеется вход в наш VIP-зал. <br>-Уникальность VIP-зала - стиль, высокого уровня для самых искушённых.'},
    {img: '/assets/img/halls/Кэвиа.png', title: 'Caviar', places: '10', titleHTML: '',textHTML: '"MILLIONAIRE" своим притязательным гостям представляет элитные и уникальные VIP-залы. Уникальность в том, что в каждой из них исключительный брендовый стиль и шикарная атмосфера, которую может ощутить не каждый!  Великолепие в каждой детали зала: сервировка, коллекции элегантной брендовой мебели и интерьера, так же с деталями ручной работы из дорогих материалов.'},
  ];

  language: string;
  subscription: Subscription;
  showModal: boolean = false;
  showFormModal: boolean = false;
  selectedImg: string;
  selectedVip;
  
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
