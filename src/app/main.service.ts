import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  languages: ['en', 'ru', 'kz', 'ch'];
  // selectedLanguage = new EventEmitter<string>();
  private selectedLanguage = new BehaviorSubject('ru');
  constructor() {
   }

   setSelectedLanguage(lan: string) {
       this.selectedLanguage.next(lan);
       console.log(this.selectedLanguage);
   }

   getSelectedLanguage(): Observable<any> {
       return this.selectedLanguage.asObservable();
   }

  // getSelectedLanguage() {
  //   return this.selectedLanguage;
  // }

  // setSelectedLanguage(lan) {
  //   this.selectedLanguage.emit(lan);
  // }
}
