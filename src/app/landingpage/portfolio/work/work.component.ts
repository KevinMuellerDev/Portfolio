import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from "./../../../interface/projectdata";
import { TranslationService } from '../../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})

export class WorkComponent {
  @Input() project!:ProjectData;
  translate = Inject(TranslationService);

  navigateToUrl(url:string){
    window.open(url, "_blank")?.focus();
  }
}
