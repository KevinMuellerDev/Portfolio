import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atf-section.component.html',
  styleUrl: './atf-section.component.scss'
})

export class AtfSectionComponent {
  links:string[] =[
    'https://github.com/KevinMuellerDev',
    'https://www.linkedin.com/in/kevin-m%C3%BCller-386119277/']


  navigateToAbout(){
    window.location.href="#about";
  }

  navigateToContact(){
    window.location.href="#contact"
  }

  navigateToPage(index:number){
    window.open(this.links[index], '_blank')?.focus();
  }
}
