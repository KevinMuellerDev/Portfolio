import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isTarget: string = '';
  about: string = 'about';
  skills: string = 'skills';
  portfolio: string = 'portfolio';

  menuOpen: boolean = false;

  navigateHome() {
    window.scrollTo(0, document.body.scrollTop);
  }

  noScroll() {
    if (!this.menuOpen) {
      document.getElementsByTagName('app-root')[0].classList.add('modal-open');
      this.menuOpen = true;
    } else {
      document.getElementsByTagName('app-root')[0].classList.remove('modal-open');
      this.menuOpen = false;
    }
  }


}
