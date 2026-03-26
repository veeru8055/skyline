import { Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page';
import { HomePageComponent } from './home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: DetailsPageComponent },
  { path: 'contact', component: ContactUsPageComponent }
];
