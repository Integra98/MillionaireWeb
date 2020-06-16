import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'millionaireWeb';

  changeLanguage(lan: string) {
    // this.service.setSelectedLanguage(lan);
  }
}
