import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

export const routes: Routes = [
    {path:'' ,  title: ' homepage' , component : HomepageComponent},
    {path:'register' , title:'Registerpage' , component : RegisterpageComponent },
];
