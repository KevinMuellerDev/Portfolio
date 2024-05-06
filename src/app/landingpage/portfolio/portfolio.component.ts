import { Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { WorkMirrorComponent } from './work-mirror/work-mirror.component';
import { ProjectdataService } from './projectdata.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, WorkComponent, WorkMirrorComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects;
  constructor(projectData: ProjectdataService){
    this.projects = projectData.projects;
  }

  translate=Inject(TranslationService);
}
