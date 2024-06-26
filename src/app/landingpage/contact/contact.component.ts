import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../shared/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule,RouterModule, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact-responsive.component.scss'],
})
export class ContactComponent {

  http = inject(HttpClient);
  translate = Inject(TranslationService)

  contactData = {
    name: '',
    email: '',
    message: ''
  };


  mailTest = false;

  post = {
    endPoint: 'https://kevin-mueller-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.displaySearchInfo(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  navigateHome(){
    window.scrollTo(0 , document.body.scrollTop);
  }

  displaySearchInfo() {
    let searchInfo:any = document.getElementById("submitInfo");
    searchInfo.className = "show";
    setTimeout(function () {
      searchInfo.className = searchInfo.className.replace("show", "");
    }, 3000);
  }
}
