import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImpressumComponent } from './impressum/impressum.component';


export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'impressum', component: ImpressumComponent}
];
