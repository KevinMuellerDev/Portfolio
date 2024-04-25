import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  skills = [
    {
      url: '/assets/img/icon/angular.svg',
      title: 'Angular'
    },
    {
      url: '/assets/img/icon/typescript.svg',
      title: 'TypeScript'
    },
    {
      url: '/assets/img/icon/javascript.svg',
      title: 'JavaScript'
    },
    {
      url: '/assets/img/icon/html.svg',
      title: 'HTML'
    },
    {
      url: '/assets/img/icon/firebase.svg',
      title: 'Firebase'
    },
    {
      url: '/assets/img/icon/git.svg',
      title: 'GIT'
    },
    {
      url: '/assets/img/icon/css.svg',
      title: 'CSS'
    },
    {
      url: '/assets/img/icon/restapi.svg',
      title: 'Rest-Api'
    },
    {
      url: '/assets/img/icon/scrum.svg',
      title: 'Scrum'
    },
    {
      url: '/assets/img/icon/material.svg',
      title: 'Material design'
    }
  ];

  navigateToContact(){
    window.location.href="#contact"
  }

}
