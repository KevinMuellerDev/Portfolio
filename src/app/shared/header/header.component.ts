import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isTarget: string = '';
  about: string = 'about';
  skills: string = 'skills';
  portfolio: string = 'portfolio';

  menuOpen: boolean = false;

  constructor(public translate: TranslationService){}

  navigateHome() {
    window.scrollTo(0, document.body.scrollTop);
  }

  noScroll() {
    if (!this.menuOpen) {
      document.getElementsByClassName('menulist')[0].classList.remove('d-none');
      setTimeout(() => {
        document.getElementsByTagName('app-root')[0].classList.add('modal-open');
        this.menuOpen = true;
      }, 125);
    } else {
      this.menuOpen = false;
      document.getElementsByTagName('app-root')[0].classList.remove('modal-open');
      setTimeout(() => {
        document.getElementsByClassName('menulist')[0].classList.add('d-none');
      }, 125);
    }
  }


}
