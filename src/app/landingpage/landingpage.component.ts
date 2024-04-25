import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfSectionComponent } from './atf-section/atf-section.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, AtfSectionComponent, AboutmeComponent, MyskillsComponent,PortfolioComponent,ContactComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
