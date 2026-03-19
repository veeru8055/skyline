import { Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page';

export const routes: Routes = [
  { path: 'services', component: DetailsPageComponent },
  { path: 'contact', component: ContactUsPageComponent }
];
