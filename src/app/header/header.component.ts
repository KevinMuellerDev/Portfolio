import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isTarget:string = '';
  about:string = 'about';
  skills:string = 'skills';
  portfolio:string = 'portfolio';

  
  navigateHome(){
    window.scrollTo(0 , document.body.scrollTop);
  }
}
