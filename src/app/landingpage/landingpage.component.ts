import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfSectionComponent } from './atf-section/atf-section.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, AtfSectionComponent, AboutmeComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
