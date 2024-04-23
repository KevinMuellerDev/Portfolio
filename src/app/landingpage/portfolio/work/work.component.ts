import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from "./../../../interface/projectdata";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})

export class WorkComponent {
  @Input() project!:ProjectData;
}
