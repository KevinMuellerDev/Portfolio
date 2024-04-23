import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { WorkMirrorComponent } from './work-mirror/work-mirror.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,WorkComponent, WorkMirrorComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
