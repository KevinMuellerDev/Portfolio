import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  translate = Inject(TranslationService)

  skills = [
    {
      url: '/assets/img/icon/angular.svg',
      urlMobile: '/assets/img/icon/angularmobile.svg',
      title: 'Angular'
    },
    {
      url: '/assets/img/icon/typescript.svg',
      urlMobile: '/assets/img/icon/typescriptmobile.svg',
      title: 'TypeScript'
    },
    {
      url: '/assets/img/icon/javascript.svg',
      urlMobile: '/assets/img/icon/javascriptmobile.svg',
      title: 'JavaScript'
    },
    {
      url: '/assets/img/icon/html.svg',
      urlMobile: '/assets/img/icon/htmlmobile.svg',
      title: 'HTML'
    },
    {
      url: '/assets/img/icon/firebase.svg',
      urlMobile: '/assets/img/icon/firebasemobile.svg',
      title: 'Firebase'
    },
    {
      url: '/assets/img/icon/git.svg',
      urlMobile: '/assets/img/icon/gitmobile.svg',
      title: 'GIT'
    },
    {
      url: '/assets/img/icon/css.svg',
      urlMobile: '/assets/img/icon/cssmobile.svg',
      title: 'CSS'
    },
    {
      url: '/assets/img/icon/restapi.svg',
      urlMobile: '/assets/img/icon/restapimobile.svg',
      title: 'Rest-Api'
    },
    {
      url: '/assets/img/icon/scrum.svg',
      urlMobile: '/assets/img/icon/scrummobile.svg',
      title: 'Scrum'
    },
    {
      url: '/assets/img/icon/material.svg',
      urlMobile: '/assets/img/icon/materialmobile.svg',
      title: 'Material design'
    }
  ];

  public screenWidth: any;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }

  navigateToContact(){
    window.location.href="#contact"
  }

}
