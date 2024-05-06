import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links:string[] =[
    'https://github.com/KevinMuellerDev',
    'https://www.linkedin.com/in/kevin-m%C3%BCller-386119277/']
  isTarget:string = '';
  imprint:string = 'imprint';

  translate = Inject(TranslationService);

  navigateToPage(index:number){
    window.open(this.links[index], '_blank')?.focus();
  }

  navigateHome(){
    window.scrollTo(0 , document.body.scrollTop);
  }

  navigateToContact(){
    window.location.href="#contact";
  }



}
