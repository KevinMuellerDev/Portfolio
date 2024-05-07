import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isTarget: string = '';
  about: string = 'about';
  skills: string = 'skills';
  portfolio: string = 'portfolio';
  menuOpen: boolean = false;
  menuGraphic:string= '/assets/img/icon/burgermenu.svg';

  constructor(public translate: TranslationService){}

  navigateHome() {
    window.location.href='#';
  }

  noScroll() {
    if (!this.menuOpen) {
      document.getElementsByClassName('menulist')[0].classList.remove('d-none');
      setTimeout(() => {
        document.getElementsByTagName('app-root')[0].classList.add('modal-open');
        this.menuGraphic = '/assets/img/icon/close.svg';
        this.menuOpen = true;
      }, 125);
    } else {
      this.menuOpen = false;
      document.getElementsByTagName('app-root')[0].classList.remove('modal-open');
      setTimeout(() => {
        this.menuGraphic = '/assets/img/icon/burgermenu.svg';
        document.getElementsByClassName('menulist')[0].classList.add('d-none');
      }, 125);
    }
  }


}
