import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links:string[] =[
    'https://github.com/KevinMuellerDev',
    'https://www.linkedin.com/in/kevin-m%C3%BCller-386119277/']
  isTarget:string = '';
  imprint:string = 'imprint';

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
