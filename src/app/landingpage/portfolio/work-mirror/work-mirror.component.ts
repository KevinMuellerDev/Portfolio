import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from "./../../../interface/projectdata";

@Component({
  selector: 'app-work-mirror',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-mirror.component.html',
  styleUrl: './work-mirror.component.scss'
})

export class WorkMirrorComponent {
  @Input() project!:ProjectData;

  navigateToUrl(url:string){
    window.open(url, "_blank")?.focus();
  }
}

