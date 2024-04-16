import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links:string[] =['impressum','impressum','impressum']
  isTarget:string = '';
  imprint:string = 'imprint';

  linkToPage(index:number){
    window.location.href =`${this.links[index]}`;
  }

}
